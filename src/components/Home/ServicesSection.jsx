import React from 'react';
import { motion } from 'framer-motion';
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

const services = [
  {
    id: 'Website Design & Development',
    icon: <Globe size={40} className="text-obsidium-500" />,
    title: 'Website Design & Development',
    description: 'We craft fully customized, responsive websites tailored to your brand and business goals. From concept to launch, we focus on clean design, intuitive user experience, and cross-device compatibility to help you stand out online.'
  },
  {
    id: 'E-Commerce Solutions',
    icon: <ShoppingCart size={40} className="text-obsidium-500" />,
    title: 'E-Commerce Solutions',
    description: 'We create secure, user-friendly online stores that drive sales and improve customer experience. By creating custom-built solution, we integrate everything from product pages to payment systems.'
  },
  {
    id: 'SEO & Performance Optimization',
    icon: <Search size={40} className="text-obsidium-500" />,
    title: 'SEO & Performance Optimization',
    description: 'We optimize your site for search engines and fast load times. From on-page SEO and structured data to performance tweaks and mobile responsiveness, we make sure your website is discoverable and user-friendly.'
  },
  {
    id: 'Website Maintenance & Support',
    icon: <Settings size={40} className="text-obsidium-500" />,
    title: 'Website Maintenance & Support',
    description: 'Your website needs ongoing care to stay secure and functional. We offer regular updates, security checks, backups, and performance monitoring—so you can focus on growing your business without tech headaches.'
  },
  {
    id: 'Web Hosting & Domain Services',
    icon: <Layers size={40} className="text-obsidium-500" />,
    title: 'Web Hosting & Domain Services',
    description: 'We help you choose the right domain and set up fast, reliable hosting. Need emails or SSL? We got you covered with complete domain and hosting management services tailored to your needs.'
  },
  {
    id: 'Branding & Graphic Design',
    icon: <Smartphone size={40} className="text-obsidium-500" />,
    title: 'Branding & Graphic Design',
    description: 'Build a brand that people remember. We design logos, brand guidelines, and visual content that reflect your values and resonate with your audience across print and digital platforms.'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
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
          {services.map((service) => (
            <motion.a
              key={service.id}
              href="/services"
              variants={fadeIn}
              className="group bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-obsidium-500/0 via-obsidium-500/0 to-obsidium-500/0 group-hover:from-obsidium-500/5 group-hover:via-obsidium-500/10 group-hover:to-obsidium-500/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 text-obsidium-500 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <span className="text-obsidium-500 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
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
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={fadeIn}
        >
          <a 
            href="/services"
            className="inline-block bg-obsidium-500 hover:bg-obsidium-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Explore All Services
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ServicesSection;
