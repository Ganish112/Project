import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import {
  Lightbulb,
  Users,
  Clock,
  Code as CodeIcon,
  Shield,
  HeartHandshake
} from 'lucide-react';
import Section from '../UI/Section';

const features = [
  {
    icon: <Lightbulb size={28} className="text-obsidium-500" />,
    title: 'Innovative Solutions',
    description: 'We think outside the box to deliver creative, cutting-edge solutions that help your business stand out.'
  },
  {
    icon: <Users size={28} className="text-obsidium-500" />,
    title: 'Experienced Team',
    description: 'Our team of experienced developers, designers, and strategists work together to deliver exceptional results.'
  },
  {
    icon: <Clock size={28} className="text-obsidium-500" />,
    title: 'On-Time Delivery',
    description: 'We value your time and always deliver projects on schedule without compromising on quality.'
  },
  {
    icon: <CodeIcon size={28} className="text-obsidium-500" />,
    title: 'Clean Code',
    description: 'We write clean, maintainable code that follows best practices and ensures your website runs smoothly.'
  },
  {
    icon: <Shield size={28} className="text-obsidium-500" />,
    title: 'Security Focus',
    description: 'Security is built into everything we create, protecting your data and your customers.'
  },
  {
    icon: <HeartHandshake size={28} className="text-obsidium-500" />,
    title: 'Dedicated Support',
    description: 'We provide ongoing support and maintenance to ensure your website continues to perform optimally.'
  }
];

const WhyChooseUsSection = () => {
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
    <Section background="gray">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        {/* Text Column */}
        <motion.div variants={itemVariants}>
          <h5 className="text-sm font-semibold text-obsidium-600 uppercase mb-2 tracking-wide">Why Choose Us</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            What Sets Us Apart From{' '}
            <span className="text-obsidium-600 relative">
              The Competition
              <span className="absolute bottom-0 left-0 w-full h-1 bg-obsidium-500/30"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-base leading-relaxed">
            With years of experience and a passion for innovation, we deliver high-quality web solutions that drive results. Our client-centric approach ensures that we understand your unique needs and provide solutions that exceed expectations.
          </p>

          <div className="space-y-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start group"
              >
                <div className="p-2 bg-obsidium-100 dark:bg-obsidium-900/30 rounded-xl mr-4 mt-1 group-hover:bg-obsidium-200 dark:group-hover:bg-obsidium-800/50 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image and Second Column */}
        <motion.div variants={itemVariants} className="space-y-8">
          <Tilt
            options={{
              max: 10,
              scale: 1,
              speed: 450,
            }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidium-600/20 to-transparent mix-blend-overlay"></div>
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="w-full h-full object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidium-900/50 to-transparent"></div>
            </div>
          </Tilt>

          <div className="space-y-6 mt-10">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start group"
              >
                <div className="p-2 bg-obsidium-100 dark:bg-obsidium-900/30 rounded-xl mr-4 mt-1 group-hover:bg-obsidium-200 dark:group-hover:bg-obsidium-800/50 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default WhyChooseUsSection;