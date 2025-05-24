import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle } from 'lucide-react';

const ServiceAccordion = ({
  id,
  icon,
  title,
  description,
  features,
  image
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <motion.button
        className="w-full text-left"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className="p-6 sm:p-8 flex items-start justify-between">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="text-obsidium-500 transition-transform duration-300 mt-1 group-hover:scale-110">
              {icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-gray-500 dark:text-gray-400 ml-4"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
                <div className="order-2 lg:order-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.2 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle size={20} className="text-obsidium-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
                    <img
                      src={image}
                      alt={title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceAccordion;