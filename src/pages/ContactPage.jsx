import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import {
  MapPin, Phone, Clock, Mail,
  Facebook, Instagram, Linkedin,
  Send, User, MessageSquare, Building
} from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import SEO from '../components/UI/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const web3formKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;
    const data = new FormData();

    data.append('access_key', web3formKey);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('subject', formData.subject);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        setFormError(null);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        setFormError(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setFormError("Network error. Please try again later.");
    }
  };

  const fadeIn = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), []);

  const contactInfo = useMemo(() => [
    {
      icon: <MapPin size={24} className="text-obsidium-500" />,
      title: 'Our Location',
      content: 'Prishtina 10000, Kosovo',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    },
    {
      icon: <Phone size={24} className="text-obsidium-500" />,
      title: 'Phone Number',
      content: [
        { number: '(+383) 45 354 732'},
        { number: '(+383) 45 439 223'}
      ],
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    },
    {
      icon: <Mail size={24} className="text-obsidium-500" />,
      title: 'Email Address',
      content: 'obsidium.dev@gmail.com',
      link: 'mailto:info@webdevcompany.com',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    },
    {
      icon: <Clock size={24} className="text-obsidium-500" />,
      title: 'Business Hours',
      content: 'Mon - Sun: 9:00 AM - 7:00 PM',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    }
  ], []);

  const socialLinks = useMemo(() => [
    { icon: <Instagram size={24} />, href: 'https://Instagram.com', color: 'text-blue-500' },
    { icon: <Facebook size={24} />, href: 'https://Facebook.com', color: 'text-blue-600' },
    { icon: <Linkedin size={24} />, href: 'https://LinkedIn.com', color: 'text-blue-700' },
  ], []);

  const inputClasses = "w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-obsidium-500 transition-all duration-300 border-gray-200 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500";

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Obsidium's web development team. Let's discuss your project and create something amazing together."
      />
      <Section background="dark" spacing="xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { 
                duration: 0.5,
                staggerChildren: 0.1 
              }
            }
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h5 variants={fadeIn} className="text-obsidium-300 font-semibold mb-4 tracking-wide">
            GET IN TOUCH
          </motion.h5>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Start a Conversation
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-obsidium-100 mb-8">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
          </motion.p>
        </motion.div>
      </Section>

      <Section background="light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { 
                duration: 0.5,
                staggerChildren: 0.1 
              }
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Tilt options={{ max: 15, scale: 1, speed: 450 }}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full backdrop-blur-lg bg-opacity-80">
                    <div className={`${info.bg} p-3 rounded-lg inline-block mb-4`}>
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                    {Array.isArray(info.content) ? (
                      info.content.map((phone, i) => (
                        <a
                          key={i}
                          href={phone.link}
                          className="block text-gray-600 dark:text-gray-400 hover:text-obsidium-500 dark:hover:text-obsidium-400 transition-colors"
                        >
                          {phone.number}
                        </a>
                      ))
                    ) : info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-obsidium-500 dark:hover:text-obsidium-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                    )}
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div variants={fadeIn} className="md:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 backdrop-blur-lg bg-opacity-80">
                <div className="flex items-center mb-8">
                  <MessageSquare size={32} className="text-obsidium-500 mr-4" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Fill out the form below and we'll get back to you soon.</p>
                  </div>
                </div>

                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-lg"
                    >
                      <h4 className="font-semibold text-lg mb-2">Thank you for your message!</h4>
                      <p>We'll get back to you within 24–48 business hours.</p>
                    </motion.div>
                  )}

                  {formError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-6 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 rounded-lg"
                    >
                      <p>{formError}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`${inputClasses} pl-10`}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Email *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`${inputClasses} pl-10`}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10`}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject *
                      </label>
                      <div className="relative">
                        <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className={`${inputClasses} pl-10`}
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={inputClasses}
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    icon={<Send size={18} />}
                    className="bg-obsidium-500 hover:bg-obsidium-600 mt-8"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="md:sticky md:top-24">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 backdrop-blur-lg bg-opacity-80">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Us</h2>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="flex items-center p-4 rounded-lg bg-obsidium-50 dark:bg-obsidium-900/20 hover:bg-obsidium-100 dark:hover:bg-obsidium-900/30 transition-all duration-300"
                    >
                      <span className={`${social.color} mr-3`}>{social.icon}</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {social.href.split('https://')[1].split('.com')[0]}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default React.memo(ContactPage);