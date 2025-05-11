import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Logo from '../UI/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialHoverVariants = {
    hover: { scale: 1.2, rotate: 12 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Logo color="white" />
            </div>
            <p className="text-gray-400 mb-4">
              We build beautiful, functional websites and web applications that help businesses grow.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook" },
                { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
                { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-gray-800 rounded-full"
                  whileHover="hover"
                  variants={socialHoverVariants}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/services", text: "Services" },
                { to: "/portfolio", text: "Portfolio" },
                { to: "/contact", text: "Contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 relative">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-2">
              {[
                "Website Development",
                "Responsive Design",
                "E-commerce Solutions",
                "SEO Optimization",
                "Website Maintenance"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Web Dev Street<br />
                  San Francisco, CA 94103
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+14155550123" className="text-gray-400 hover:text-blue-400 transition-colors">
                  (415) 555-0123
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@webdevcompany.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@webdevcompany.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.hr 
          variants={itemVariants}
          className="border-gray-800 mb-6"
        />

        <motion.div 
          variants={itemVariants}
          className="text-center text-sm text-gray-500"
        >
          &copy; {currentYear} Web Development Company. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;