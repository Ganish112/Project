import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Settings, 
  Layers,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';

const services = [
  {
    id: 'web-development',
    icon: <Globe size={48} className="text-obsidium-500" />,
    title: 'Website Development',
    description: 'Custom website development tailored to your specific needs and goals. We create modern, fast-loading websites that convert visitors into customers.',
    features: [
      'Custom design and development',
      'Fast-loading and optimized websites',
      'CMS implementation (WordPress, etc.)',
      'Interactive elements and animations',
      'Cross-browser compatibility',
      'Technical SEO implementation'
    ],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'responsive-design',
    icon: <Smartphone size={48} className="text-obsidium-500" />,
    title: 'Responsive Design',
    description: 'Mobile-friendly websites that look great and function perfectly across all devices, from smartphones to desktop computers.',
    features: [
      'Mobile-first design approach',
      'Device-specific optimizations',
      'Consistent user experience across devices',
      'Touch-friendly navigation',
      'Optimized images and media',
      'Performance optimization for mobile'
    ],
    image: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={48} className="text-obsidium-500" />,
    title: 'E-commerce Solutions',
    description: 'Custom online stores with secure payment processing, inventory management, and everything you need to sell products online.',
    features: [
      'Custom e-commerce development',
      'Secure payment gateway integration',
      'Product management system',
      'Order and inventory tracking',
      'Customer account management',
      'Shipping and tax calculation integration'
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'seo',
    icon: <Search size={48} className="text-obsidium-500" />,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings with on-page SEO optimization that helps customers find your business online.',
    features: [
      'Keyword research and strategy',
      'On-page SEO optimization',
      'Technical SEO improvements',
      'Content optimization',
      'SEO audit and analysis',
      'Local SEO optimization'
    ],
    image: 'https://images.pexels.com/photos/306316/pexels-photo-306316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'maintenance',
    icon: <Settings size={48} className="text-obsidium-500" />,
    title: 'Website Maintenance',
    description: 'Keep your website secure, up-to-date, and running smoothly with our comprehensive maintenance services.',
    features: [
      'Regular software updates',
      'Security monitoring and patching',
      'Performance optimization',
      'Content updates and backups',
      'Technical support',
      'Monthly performance reports'
    ],
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'web-applications',
    icon: <Layers size={48} className="text-obsidium-500" />,
    title: 'Web Applications',
    description: 'Custom web applications that streamline your business processes and improve productivity.',
    features: [
      'Custom web application development',
      'User authentication and authorization',
      'Database design and integration',
      'API development and integration',
      'Real-time features and updates',
      'Scalable architecture'
    ],
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services | Obsidium';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
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
              <Button 
                to="/portfolio" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/30 to-transparent blur-3xl"></div>
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Web development services"
              className="rounded-lg shadow-lg object-cover w-full relative z-10"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* Services Overview */}
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
          <SectionTitle
            title="Our Services"
            subtitle="Discover how we can help bring your digital vision to life"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
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
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Individual Services */}
      {services.map((service, index) => (
        <Section key={service.id} id={service.id} background={index % 2 === 0 ? 'white' : 'light'}>
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className={index % 2 !== 0 ? 'order-2 md:order-1' : ''}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/20 to-transparent blur-2xl"></div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white relative">
                  {service.title}
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle size={20} className="text-obsidium-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button 
                to="/contact" 
                variant="primary"
                className="bg-obsidium-500 hover:bg-obsidium-600"
              >
                Request This Service
              </Button>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className={`relative ${index % 2 !== 0 ? 'order-1 md:order-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/30 to-transparent blur-3xl"></div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full object-cover relative z-10 transform hover:scale-105 transition-transform duration-500"
                style={{ height: '400px' }}
              />
            </motion.div>
          </motion.div>
        </Section>
      ))}

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