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
  MapPin,
  Send,
  ArrowRight
} from 'lucide-react';
import Logo from '../UI/Logo';
import Button from '../UI/Button';

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
    <footer className="relative bg-gradient-to-br from-obsidium-900 via-obsidium-800 to-obsidium-600 text-white">
      {/* Newsletter Section */}
      

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Logo color="white" />
            <p className="text-obsidium-100 my-6">
              We build beautiful, functional websites and web applications that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
                { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
               
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-obsidium-800 hover:bg-obsidium-700 p-3 rounded-full transition-colors"
                  whileHover="hover"
                  variants={socialHoverVariants}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Quick Links
              <ArrowRight size={16} className="ml-2" />
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/services", text: "Services" },
                { to: "/contact", text: "Contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={link.to} 
                    className="text-obsidium-100 hover:text-white transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Our Services
              <ArrowRight size={16} className="ml-2" />
            </h4>
            <ul className="space-y-3">
              {[
                "Website Design & Development",
                "E-Commerce Solutions",
                "SEO & Performance Optimization",
                "Website Maintenance & Support",
                "Web Hosting & Domain Services",
                "Branding & Graphic Design"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to="/services" 
                    className="text-obsidium-100 hover:text-white transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Get in Touch
              <ArrowRight size={16} className="ml-2" />
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <MapPin size={20} className="text-obsidium-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-obsidium-100">
                  
                Prishtina 10000, Kosovo
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} className="text-obsidium-300 mr-3 flex-shrink-0" />
                <a href="tel:+14155550123" className="text-obsidium-100 hover:text-white transition-colors">
                  (+383) 45 354 743
                  <br />
                  (+383) 45 439 223
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} className="text-obsidium-300 mr-3 flex-shrink-0" />
                <a href="mailto:info@webdevcompany.com" className="text-obsidium-100 hover:text-white transition-colors">
                  info@webdevcompany.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-obsidium-700/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-obsidium-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Obsidium. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-obsidium-200">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;