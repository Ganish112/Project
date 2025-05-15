import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import iPhoneImage from "../../assets/phone.png";
import iPadImage from "../../assets/tablet.png";
import LaptopImage from "../../assets/laptop.png";
import TVImage from "../../assets/pc.png";

export default function DeviceShowcase() {
  const devices = [
    { name: "iPhone", image: iPhoneImage },
    { name: "iPad", image: iPadImage },
    { name: "Laptop", image: LaptopImage },
    { name: "TV", image: TVImage },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((index) => ({
        opacity: 1,
        y: index % 2 === 0 ? -50 : 50,
        transition: {
          duration: 0.6,
          delay: index * 0.2,
        },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        y: 50,
        transition: { duration: 0.3 },
      }));
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden text-black dark:text-white"
    >
      {/* Background split */}
      <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-sky-100 before:to-white dark:before:from-[#0a1a33] dark:before:to-white"></div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          Responsive Across All Devices
        </h2>

        <div className="w-full overflow-hidden no-scrollbar">
          <div className="flex flex-nowrap justify-start gap-8 px-4">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] aspect-[2/3] flex items-center justify-center shrink-0"
              >
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
