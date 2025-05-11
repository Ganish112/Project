import React, { useEffect, useState } from 'react';
import {
  MapPin, Phone, Clock,
  Facebook, Twitter, Linkedin, Github
} from 'lucide-react';
import Section from '../components/UI/Section';
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

  return (
    <>
      <Section background="dark" spacing="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h5 className="text-blue-400 font-semibold mb-4">GET IN TOUCH</h5>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your digital presence.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {/* Contact Cards */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-5 flex items-center space-x-4 min-w-[280px]">
            <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg py-6">
              <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
  <p className="text-base text-gray-600 dark:text-gray-400">123 Web Dev Street, SF</p>
</div>

          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-5 flex items-center space-x-4 min-w-[280px]">
            <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Phone size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Contact Info</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">(415) 555-0123</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-5 flex items-center space-x-4 min-w-[280px]">
            <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Clock size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Business Hours</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri: 9am - 6pm</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>

              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you within 24–48 business hours.</p>
                </div>
              )}

              {formError && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg">
                  <p>{formError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
                      placeholder="Enter the subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-5">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <Linkedin size={24} className="text-blue-700 mr-3" />
                  <span className="text-gray-900 dark:text-white font-medium">LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <Github size={24} className="text-gray-900 dark:text-white mr-3" />
                  <span className="text-gray-900 dark:text-white font-medium">GitHub</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <Twitter size={24} className="text-blue-500 mr-3" />
                  <span className="text-gray-900 dark:text-white font-medium">Twitter</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                  <Facebook size={24} className="text-blue-600 mr-3" />
                  <span className="text-gray-900 dark:text-white font-medium">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;