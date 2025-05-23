import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useAnimation, motion } from "framer-motion";

import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

import p1 from '../../assets/d1.png'
import p2 from '../../assets/d2.png'
import p3 from '../../assets/d3.png'
import p4 from '../../assets/d4.png'

export default function DeviceShowcase() {
 const devices = [
  { 
    name: "Mobile", 
    image: p4, 
    description: "Perfectly optimized for smartphones"
  },
  { 
    name: "Tablet", 
    image: p2, 
    description: "Seamless tablet experience"
  },
  { 
    name: "Desktop", 
    image: p1, 
    description: "Full desktop experience"
  },
  { 
    name: "Laptop", 
    image: p3, 
    description: "Responsive laptop viewing"
  }
];


  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.2,
          ease: "easeOut"
        },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        y: 30,
        scale: 0.95,
        transition: { duration: 0.4 },
      }));
    }
  }, [inView, controls]);

  return (
    <Section background="light">
  <div ref={ref} className="container mx-auto px-4 py-16">
    <SectionTitle
      title="Responsive Design Excellence"
      subtitle="Experience your website at its best across all devices with our responsive design approach"
    />

    <div className="mt-20">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14 md:gap-x-10 md:gap-y-16">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              custom={index}
              animate={controls}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              className="flex flex-col items-center text-center"
            >
              {/* Responsive image container */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center mb-8 sm:mb-10">
                <img
                  src={device.image}
                  alt={`${device.name} view`}
                  className="w-full h-full object-contain"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {device.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</Section>

  );
}