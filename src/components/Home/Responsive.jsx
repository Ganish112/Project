import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import iPhoneImage from "../../assets/phone.png";
import tablet from "../../assets/tablet.png";
import PC from "../../assets/pc.png";
import Laptop from "../../assets/laptop.png";

export default function DeviceShowcase() {
  const devices = [
    { name: "iPhone 12", image: iPhoneImage },
    { name: "Tablet", image: tablet },
    { name: "PC", image: PC },
    { name: "Laptop", image: Laptop },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: index % 2 === 0 ? -30 : 30,
        transition: {
          duration: 0.6,
          delay: index * 0.2,
        },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        y: 30,
        transition: { duration: 0.3 },
      }));
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-black dark:text-white py-12 md:py-20"
    >
      {/* Background split */}
      <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-sky-100 before:to-white dark:before:from-[#0a1a33] dark:before:to-white"></div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          Responsive Across All Devices
        </h2>

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                custom={index}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-[280px] aspect-[3/4] p-4">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                    style={{
                      filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}