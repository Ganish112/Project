import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import iPhoneImage from "../../assets/phone.png";
import PC from "../../assets/pc.png";
import Laptop from "../../assets/laptop.png";
import tablet from "../../assets/tablet.png";

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
   <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Responsive Across All Devices</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Our app looks stunning and functions smoothly on every Apple device—experience seamless design and performance everywhere.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex flex-col items-center">
            <img src={iPhoneImage} alt="iPhone Preview" className="w-40 h-auto" />
            <span className="mt-4 font-medium text-gray-700">iPhone</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Laptop} alt="MacBook Preview" className="w-64 h-auto" />
            <span className="mt-4 font-medium text-gray-700">MacBook</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={tablet} alt="iPad Preview" className="w-48 h-auto" />
            <span className="mt-4 font-medium text-gray-700">iPad</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={PC} alt="iMac Preview" className="w-56 h-auto" />
            <span className="mt-4 font-medium text-gray-700">iMac</span>
          </div>
        </div>
      </div>
    </section>
  );
}