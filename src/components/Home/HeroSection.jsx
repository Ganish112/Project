import React, { useEffect, useRef, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import AnimatedLogo from '../UI/AnimatedLogo';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const titleWords = [
    { text: "Crafting", className: "text-white" },
    { text: "Digital", className: "text-obsidium-300" },
    { text: "Experiences", className: "text-obsidium-300" },
    { text: "That", className: "text-white" },
    { text: "Define", className: "text-white" },
    { text: "Success", className: "text-obsidium-300" }
  ];

  // Generate random positions once when the component mounts
  const backgroundElements = useMemo(() => {
    return [...Array(5)].map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 5 + 5}s`
    }));
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-obsidium-900 via-obsidium-800 to-obsidium-600 flex items-center overflow-hidden"
    >
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element, i) => (
          <div
            key={i}
            className="absolute bg-obsidium-500/10 rounded-full animate-float"
            style={{
              width: element.width,
              height: element.height,
              left: element.left,
              top: element.top,
              animationDelay: element.animationDelay,
              animationDuration: element.animationDuration
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="max-w-2xl text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
          
            
            <motion.div 
              className="mb-8"
              variants={textContainer}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-2">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={letterAnimation}
                    className={`${word.className} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p 
              variants={fadeIn}
              className="text-base sm:text-lg lg:text-xl text-obsidium-100 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              From stunning websites to powerful web applications, we bring your digital vision to life with expert design and development.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                to="/portfolio" 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                className="bg-obsidium-500 hover:bg-obsidium-600 group w-full sm:w-auto"
              >
                <span className="group-hover:translate-x-1 transition-transform">
                  View Our Work
                </span>
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
              >
                Let's work together
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/30 to-transparent blur-3xl"></div>
            <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px]">
              <AnimatedLogo className="w-full h-full" />
              <div class="text-white text-base sm:text-lg md:text-2xl font-mono whitespace-nowrap overflow-hidden border-r-2 border-white w-[27ch] animate-typing">
  <span class="text-lg sm:text-xl md:text-3xl">Obsidium.</span> Web Development.
</div>


            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a 
          href="#services" 
          className="animate-bounce text-obsidium-300 hover:text-obsidium-200 transition-colors"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;