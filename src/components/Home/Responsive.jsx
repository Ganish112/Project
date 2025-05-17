import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useAnimation, motion } from "framer-motion";
import iPhoneImage from "../../assets/phone.png";
import PC from "../../assets/pc.png";
import Laptop from "../../assets/laptop.png";
import tablet from "../../assets/tablet.png";
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

export default function DeviceShowcase() {
  const devices = [
    { 
      name: "Mobile", 
      image: iPhoneImage, 
      description: "Perfectly optimized for smartphones",
      width: "w-24 md:w-32"
    },
    { 
      name: "Tablet", 
      image: tablet, 
      description: "Seamless tablet experience",
      width: "w-32 md:w-40"
    },
    { 
      name: "Laptop", 
      image: Laptop, 
      description: "Responsive laptop viewing",
      width: "w-48 md:w-56"
    },
    { 
      name: "Desktop", 
      image: PC, 
      description: "Full desktop experience",
      width: "w-40 md:w-48"
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

        <div className="relative mt-20">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-radial from-obsidium-100/50 to-transparent dark:from-obsidium-900/30 dark:to-transparent blur-3xl -z-10" />
          
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
              {devices.map((device, index) => (
                <motion.div
                  key={device.name}
                  custom={index}
                  animate={controls}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative group mb-6">
                    {/* Device container with hover effects */}
                    <div className="relative transform transition-all duration-500 hover:scale-110">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-radial from-obsidium-400/20 to-transparent dark:from-obsidium-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Device image */}
                      <div className="relative">
                        <img
                          src={device.image}
                          alt={`${device.name} view`}
                          className={`${device.width} h-auto object-contain filter drop-shadow-xl`}
                        />
                      </div>
                    </div>

                    {/* Reflection effect */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-b from-obsidium-400/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Device info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {device.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {device.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 max-w-2xl text-center"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our responsive design ensures your website maintains its visual appeal and functionality 
                across all devices, providing an exceptional user experience for every visitor.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}