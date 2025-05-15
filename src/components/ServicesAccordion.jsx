
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

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
      id={id}
    >
      <motion.div
        className="cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="p-5 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="text-obsidium-500 transition-transform duration-300 mt-1">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-gray-500 dark:text-gray-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 pt-0 border-t border-gray-100 dark:border-gray-800">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-obsidium-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceAccordion;
