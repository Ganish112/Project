
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

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
    className="group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg relative"
    id={id}
  >
    {/* Overlay effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-obsidium-500/0 via-obsidium-500/0 to-obsidium-500/0 
                    group-hover:from-obsidium-500/5 group-hover:via-obsidium-500/10 group-hover:to-obsidium-500/5 
                    pointer-events-none transition-all duration-500 rounded-lg"></div>
  
    <motion.div
      className="cursor-pointer relative z-10"
      onClick={toggleAccordion}
    >
      <div className="p-8 flex items-start justify-between ">
        <div className="flex items-start gap-4">
        <div className="text-obsidium-500 transition-transform duration-300 mt-1 mb-6 group-hover:scale-125 group-hover:-translate-x-2">
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
          className="relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 pt-0 border-t border-gray-100 dark:border-gray-800">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3 mt-3">Key Features</h4>
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
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 mt-2 mb-2"
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
