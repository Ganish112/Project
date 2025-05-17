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
    { name: "iPhone", image: iPhoneImage, description: "Perfect mobile experience" },
    { name: "Tablet", image: tablet, description: "Optimized for tablets" },
    { name: "Laptop", image: Laptop, description: "Seamless laptop viewing" },
    { name: "Desktop", image: PC, description: "Full desktop experience" }
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut"
        },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.4 },
      }));
    }
  }, [inView, controls]);

  return (
    <Section background="light">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionTitle
          title="Responsive Across All Devices"
          subtitle="Experience seamless design and functionality across every device. Our websites adapt perfectly to any screen size."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              custom={index}
              animate={controls}
              initial={{ opacity: 0, y: 50 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  {/* Decorative background circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-obsidium-100 to-obsidium-50 dark:from-obsidium-900/30 dark:to-obsidium-800/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={device.image}
                        alt={`${device.name} Preview`}
                        className="w-auto h-32 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {device.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {device.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-obsidium-500/0 via-obsidium-500/0 to-obsidium-500/0 group-hover:from-obsidium-500/5 group-hover:via-obsidium-500/10 group-hover:to-obsidium-500/5 rounded-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our responsive design ensures your website looks and functions perfectly on every device, 
            providing an optimal user experience for all your visitors.
          </p>
        </div>
      </div>
    </Section>
  );
}