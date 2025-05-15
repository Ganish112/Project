import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import Section from '../UI/Section';

const MockupSection = () => {
  const mockups = [
    {
      title: 'Desktop View',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Full-featured desktop experience with intuitive navigation'
    },
    {
      title: 'Tablet View',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Optimized for tablet devices with touch-friendly interface'
    },
    {
      title: 'Mobile View',
      image: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Responsive mobile design for on-the-go access'
    }
  ];

  return (
    <Section background="white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Website Mockups
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience our website across different devices, ensuring a consistent and engaging user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockups.map((mockup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1,
                  speed: 450,
                }}
                className="h-full"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden h-full transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative aspect-video">
                    <img
                      src={mockup.image}
                      alt={mockup.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white">
                        {mockup.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      {mockup.description}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MockupSection;