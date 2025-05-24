import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import SEO from '../components/UI/SEO';
import { 
  Globe, 
  ShoppingCart, 
  Search, 
  Settings, 
  Layers,
  Warehouse,
  Figma,
  HardDriveUpload,
  Images,
  ArrowRight,
} from 'lucide-react';
import ServiceAccordion from '../components/ServicesAccordion';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import AnimatedLogo from '../components/UI/AnimatedLogo';

import p1 from '../assets/p1.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p7 from '../assets/p7.png';
import p6 from '../assets/p6.jpg';
import p5 from '../assets/p5.jpg';
import p9 from '../assets/p9.jpg';
import p8 from '../assets/p8.png';
import p2 from '../assets/p2.png';

const services = [
  {
    id: 'website-design',
    icon: <Globe size={48} className="text-obsidium-500" />,
    title: 'Website Design & Development',
    description: 'Custom website development tailored to your specific needs and goals. We create modern, fast-loading websites that convert visitors into customers.',
    features: [
      'Custom design and development',
      'Fast-loading and optimized websites',
      'CMS implementation (WordPress, etc.)',
      'Interactive elements and animations',
      'Cross-browser compatibility',
      'Technical SEO implementation'
    ],
    image: p1
  },
  {
    id: 'ecommerce-solutions',
    icon: <ShoppingCart size={48} className="text-obsidium-500" />,
    title: 'E-Commerce Solutions',
    description: 'Custom online stores with secure payment processing, inventory management, and everything you need to sell products online.',
    features: [
      'Custom e-commerce development',
      'Secure payment gateway integration',
      'Product management system',
      'Order and inventory tracking',
      'Customer account management',
      'Shipping and tax calculation integration'
    ],
    image: p3
  },
  {
    id: 'seo-optimization',
    icon: <Search size={48} className="text-obsidium-500" />,
    title: 'SEO & Performance Optimization',
    description: 'Improve your search engine rankings with on-page SEO optimization that helps customers find your business online.',
    features: [
      'Keyword research and strategy',
      'On-page SEO optimization',
      'Technical SEO improvements',
      'Content optimization',
      'SEO audit and analysis',
      'Local SEO optimization'
    ],
    image: p4
  },
  {
    id: 'website-maintenance',
    icon: <Settings size={48} className="text-obsidium-500" />,
    title: 'Website Maintenance & Support',
    description: 'Keep your website secure, up-to-date, and running smoothly with our comprehensive maintenance services.',
    features: [
      'Regular software updates',
      'Security monitoring and patching',
      'Performance optimization',
      'Content updates and backups',
      'Technical support',
      'Monthly performance reports'
    ],
    image: p7
  },
  {
    id: 'web-applications',
    icon: <Layers size={48} className="text-obsidium-500" />,
    title: 'Web Application Development',
    description: 'Custom web applications that streamline your business processes and improve productivity.',
    features: [
      'Custom web application development',
      'User authentication and authorization',
      'Database design and integration',
      'API development and integration',
      'Real-time features and updates',
      'Scalable architecture'
    ],
    image: p6
  },
  {
    id: 'web-hosting',
    icon: <Warehouse size={48} className="text-obsidium-500" />,
    title: 'Web Hosting & Domain Services',
    description: 'Reliable hosting solutions with fast load times, high uptime, and excellent security features.',
    features: [
      'Fast and reliable web hosting',
      'Domain registration and management',
      'SSL certificate installation',
      'Server configuration and optimization',
      'Regular backups and monitoring',
      'Email hosting and setup'
    ],
    image: p5
  },
  {
    id: 'ui-ux-design',
    icon: <Figma size={48} className="text-obsidium-500" />,
    title: 'UI/UX Designing',
    description: 'User-centered design that focuses on creating intuitive, engaging, and effective user experiences.',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'User interface design',
      'Usability testing',
      'Interaction design',
      'Design system creation'
    ],
    image: p2
  },
  {
    id: 'api-integrations',
    icon: <HardDriveUpload size={48} className="text-obsidium-500" />,
    title: 'API & Third Party Integrations',
    description: 'Seamless integration of third-party services and APIs to extend your website or application functionality.',
    features: [
      'Payment gateway integration',
      'CRM and marketing automation integration',
      'Social media API integration',
      'E-commerce platform integration',
      'Custom API development',
      'Analytics and tracking implementation'
    ],
    image: p8
  },
  {
    id: 'branding-design',
    icon: <Images size={48} className="text-obsidium-500" />,
    title: 'Branding & Logo Design',
    description: 'Strategic branding and logo design that communicates your company values and resonates with your target audience.',
    features: [
      'Logo design and brand identity',
      'Brand strategy development',
      'Visual style guide creation',
      'Marketing collateral design',
      'Brand messaging and positioning',
      'Social media branding'
    ],
    image: p9
  },
];

const ServicesPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

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

  return (
    <>
      <SEO 
        title="Our Services"
        description="Comprehensive web development services including custom websites, e-commerce solutions, SEO optimization, and maintenance. Expert solutions for your digital needs."
      />
      {/* Hero Section */}
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h5 className="text-obsidium-300 font-semibold mb-4 tracking-wide">OUR SERVICES</h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Comprehensive Web Development Solutions
            </h1>
            <p className="text-xl text-obsidium-100 mb-8 leading-relaxed">
              From website development to e-commerce solutions, we offer a full range of services to meet your digital needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/contact" 
                variant="primary"
                size="lg"
                icon={<ArrowRight size={20} />}
                className="bg-obsidium-500 hover:bg-obsidium-600 group"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  Start Your Project
                </span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center relative lg:translate-x-4 lg:ml-28"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/30 to-transparent blur-3xl"></div>
            <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px]">
              <AnimatedLogo className="w-full h-full" />
            </div>
          </motion.div>
        </motion.div>
      </Section>
      
      <Section background="light" className="min-h-screen relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mb-12 text-center"
          >
            <SectionTitle
              title="Our Services"
              subtitle="We offer a full range of web development services to make your online presence stand out."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-4"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <ServiceAccordion {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-obsidium-100 mb-8">
            Let's work together to create a website that drives results for your business.
          </p>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Start Your Project
          </Button>
        </motion.div>
      </Section>
    </>
  );
};

export default ServicesPage;