import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Settings, 
  Layers 
} from 'lucide-react';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const services = [
  {
    icon: <Globe size={40} className="text-obsidium-500" />,
    title: 'Website Development',
    description: 'Custom website development tailored to your specific needs and goals. We create modern, fast-loading websites that convert visitors into customers.'
  },
  {
    icon: <Smartphone size={40} className="text-obsidium-500" />,
    title: 'Responsive Design',
    description: 'Mobile-friendly websites that look great and function perfectly across all devices, from smartphones to desktop computers.'
  },
  {
    icon: <ShoppingCart size={40} className="text-obsidium-500" />,
    title: 'E-commerce Solutions',
    description: 'Custom online stores with secure payment processing, inventory management, and everything you need to sell products online.'
  },
  {
    icon: <Search size={40} className="text-obsidium-500" />,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings with on-page SEO optimization that helps customers find your business online.'
  },
  {
    icon: <Settings size={40} className="text-obsidium-500" />,
    title: 'Website Maintenance',
    description: 'Keep your website secure, up-to-date, and running smoothly with our comprehensive maintenance services.'
  },
  {
    icon: <Layers size={40} className="text-obsidium-500" />,
    title: 'Web Applications',
    description: 'Custom web applications that streamline your business processes and improve productivity.'
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="services" background="light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <SectionTitle 
          title="Our Services" 
          subtitle="We offer a full range of web development services to make your online presence stand out."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1,
                  speed: 450,
                }}
                className="h-full"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg h-full backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-obsidium-100/20">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/20 to-transparent blur-xl"></div>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <Button
                      to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="ghost"
                      className="group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Learn more
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <Button to="/services" variant="primary" size="lg">
            Explore All Services
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ServicesSection;