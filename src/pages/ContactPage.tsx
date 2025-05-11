import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import {
  MapPin, Phone, Clock, Mail,
  Facebook, Twitter, Linkedin, Github,
  Send, User, MessageSquare
} from 'lucide-react';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | Obsidium';
  }, []);

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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-obsidium-500" />,
      title: 'Our Location',
      content: '123 Web Dev Street, San Francisco, CA 94103',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    },
    {
      icon: <Phone size={24} className="text-obsidium-500" />,
      title: 'Phone Number',
      content: '(415) 555-0123',
      link: 'tel:+14155550123',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    },
    {
      icon: <Mail size={24} className="text-obsidium-500" />,
      title: 'Email Address',
      content: 'info@webdevcompany.com',
      link: 'mailto:info@webdevcompany.com',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    },
    {
      icon: <Clock size={24} className="text-obsidium-500" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      bg: 'bg-obsidium-50 dark:bg-obsidium-900/30'
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com', color: 'text-blue-700' },
    { icon: <Github size={24} />, href: 'https://github.com', color: 'text-gray-900 dark:text-white' },
    { icon: <Twitter size={24} />, href: 'https://twitter.com', color: 'text-blue-500' },
    { icon: <Facebook size={24} />, href: 'https://facebook.com', color: 'text-blue-600' }
  ];

  return (
    <>
      <Section background="dark" spacing="xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
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
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Tilt
                  options={{
                    max: 15,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg h-full">
                    <div className={`${info.bg} p-4 rounded-lg inline-block mb-4`}>
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
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
            {/* Contact Form */}
            <motion.div 
              variants={fadeIn}
              className="md:col-span-2"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare size={24} className="text-obsidium-500 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
                </div>

                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg"
                  >
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We'll get back to you within 24–48 business hours.</p>
                  </motion.div>
                )}

                {formError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg"
                  >
                    <p>{formError}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-obsidium-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-obsidium-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-obsidium-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-obsidium-500"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-obsidium-500"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    icon={<Send size={18} />}
                    className="bg-obsidium-500 hover:bg-obsidium-600"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Social Links & Additional Info */}
            <motion.div variants={fadeIn}>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 sticky top-24">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Connect With Us</h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="flex items-center p-4 rounded-lg bg-obsidium-50 dark:bg-obsidium-900/20 hover:bg-obsidium-100 dark:hover:bg-obsidium-900/30 transition-colors"
                    >
                      <span className={`${social.color} mr-3`}>{social.icon}</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {social.href.split('https://')[1].split('.com')[0]}
                      </span>
                    </motion.a>
                  ))}
                </div>

                <div className="bg-obsidium-50 dark:bg-obsidium-900/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Expert team with years of experience',
                      'Customized solutions for your needs',
                      'Transparent communication',
                      'Competitive pricing',
                      'Ongoing support and maintenance'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="text-obsidium-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Map Section */}
      <Section background="white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0637507774103!2d-122.41941658468204!3d37.77492977975882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1523456789012"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </Section>
    </>
  );
};

export default ContactPage;