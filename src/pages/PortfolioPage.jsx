import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';

// Portfolio project data
const portfolioProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'e-commerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: 'FashionStore Inc.',
    description: 'A complete e-commerce solution with custom product filters, user accounts, and secure payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    challenge: 'Creating a seamless shopping experience across devices with fast loading product pages and real-time inventory updates.',
    solution: 'We implemented a responsive design with lazy loading images and server-side rendering for optimal performance.',
    results: '45% increase in mobile conversions and 30% reduction in cart abandonment rate.'
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    category: 'website',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: 'TechCorp Solutions',
    description: 'A complete redesign of a corporate website with improved UX, modern design, and enhanced performance.',
    technologies: ['WordPress', 'CSS3', 'JavaScript', 'PHP'],
    challenge: 'Modernizing the website while maintaining brand identity and improving page load speed.',
    solution: 'We created a custom WordPress theme with optimized assets and a streamlined content management system.',
    results: '200% increase in organic traffic and 65% improvement in page load times.'
  },
  {
    id: 3,
    title: 'Booking Platform',
    category: 'web-app',
    image: 'https://images.pexels.com/photos/2180283/pexels-photo-2180283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: 'TravelEase',
    description: 'A comprehensive booking platform for travel accommodations with user reviews and real-time availability.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    challenge: 'Building a scalable system that could handle thousands of concurrent users and real-time updates.',
    solution: 'We implemented a microservices architecture with caching and load balancing for optimal performance.',
    results: '300% increase in bookings and 50% reduction in customer support requests.'
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'website',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: 'Gourmet Bistro',
    description: 'An elegant website for a high-end restaurant featuring online reservations, menu display, and events calendar.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    challenge: 'Creating a visually stunning experience that reflected the restaurant\'s ambiance while ensuring functionality.',
    solution: 'We designed a custom website with high-quality food photography and an intuitive reservation system.',
    results: 'Online reservations increased by 75% and website traffic by 120%.'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'web-app',
    image: 'https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: 'FitLife Co.',
    description: 'A comprehensive fitness tracking web application with workout plans, progress monitoring, and social features.',
    technologies: ['React', 'Firebase', 'Node.js', 'Chart.js'],
    challenge: 'Creating an engaging user experience that would motivate users to track their fitness consistently.',
    solution: 'We implemented gamification elements, progress visualizations, and social sharing features.',
    results: '85% user retention rate and 40% increase in daily active users.'
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    category: 'e-commerce',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: 'HomeFinderPro',
    description: 'A property listing and search platform with advanced filtering, virtual tours, and agent contact features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    challenge: 'Creating an intuitive search experience with complex filtering options and map-based property exploration.',
    solution: 'We implemented a custom search algorithm with geo-location features and virtual tour capabilities.',
    results: 'Property inquiries increased by 60% and average time on site by 45%.'
  }
];

// Category filters
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'website', name: 'Websites' },
  { id: 'e-commerce', name: 'E-commerce' },
  { id: 'web-app', name: 'Web Applications' }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayedProjects, setDisplayedProjects] = useState(portfolioProjects);

  useEffect(() => {
    document.title = 'Portfolio | Obsidium';
  }, []);

  useEffect(() => {
    const filtered = activeCategory === 'all'
      ? portfolioProjects
      : portfolioProjects.filter(project => project.category === activeCategory);
    setDisplayedProjects(filtered);
  }, [activeCategory]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const openProject = (id) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const project = selectedProject
    ? portfolioProjects.find(p => p.id === selectedProject)
    : null;

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
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h5 variants={fadeIn} className="text-obsidium-300 font-semibold mb-4 tracking-wide">
            OUR PORTFOLIO
          </motion.h5>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Our Latest Projects
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-obsidium-100 mb-8 leading-relaxed">
            Explore our recent work and see how we've helped businesses achieve their digital goals.
          </motion.p>
        </motion.div>
      </Section>

      {/* Portfolio Grid */}
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
          {/* Category Filters */}
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-obsidium-500 text-white shadow-lg shadow-obsidium-500/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-obsidium-50 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                onClick={() => openProject(project.id)}
              >
                <Tilt
                  options={{
                    max: 15,
                    scale: 1,
                    speed: 450,
                  }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidium-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 relative">
                      <span className="absolute top-0 right-6 -translate-y-1/2 text-xs font-semibold bg-obsidium-500 text-white px-4 py-1 rounded-full">
                        {project.category === 'website'
                          ? 'Website'
                          : project.category === 'e-commerce'
                          ? 'E-commerce'
                          : 'Web Application'}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <span className="text-obsidium-500 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                        View Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Project Modal */}
      {selectedProject && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={closeProject}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Client: {project.client}
                  </p>
                </div>
                <span className="text-sm font-semibold bg-obsidium-500 text-white px-3 py-1 rounded-full mt-2">
                  {project.category === 'website'
                    ? 'Website'
                    : project.category === 'e-commerce'
                    ? 'E-commerce'
                    : 'Web Application'}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Project Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  The Challenge
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.challenge}
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Our Solution
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.solution}
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Results
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.results}
                </p>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-obsidium-50 dark:bg-obsidium-900/30 text-obsidium-600 dark:text-obsidium-300 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Button onClick={closeProject} variant="outline">
                  Close
                </Button>
                <Button 
                  to="/contact" 
                  variant="primary"
                  className="bg-obsidium-500 hover:bg-obsidium-600"
                >
                  Start a Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-obsidium-100 mb-8">
            Let's work together to bring your vision to life. Contact us today to start your project.
          </p>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-obsidium-500 hover:border-obsidium-500 transition-all duration-300"
          >
            Start Your Project
          </Button>
        </motion.div>
      </Section>
    </>
  );
};

export default PortfolioPage;