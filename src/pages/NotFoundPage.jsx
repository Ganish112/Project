import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import SEO from '../components/UI/SEO';
import Logo from '../components/UI/Logo';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to our homepage to explore our web development services."
      />
      <Section background="gradient" spacing="xl">
        <div className="min-h-[80vh] flex flex-col items-center justify-center relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/5 rounded-full"
                initial={{ 
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: 0
                }}
                animate={{ 
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100,
                  scale: Math.random() * 2 + 1
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  width: Math.random() * 300 + 100,
                  height: Math.random() * 300 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="mb-8"
            >
              <Logo color="white" />
            </motion.div>

            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[150px] md:text-[200px] font-bold text-white/10 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              404
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-obsidium-100 mb-8 max-w-lg mx-auto">
                The page you're looking for seems to have vanished into the digital void. 
                Let's get you back on track!
              </p>

              <Button 
                to="/" 
                variant="outline"
                size="lg"
                icon={<ArrowLeft size={20} />}
                className="border-white text-white hover:bg-white/10"
              >
                Back to Homepage
              </Button>
            </motion.div>
          </div>

          {/* Floating icon in bottom-left */}
          <motion.div
            className="fixed bottom-8 left-8 z-50"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-full p-4 shadow-lg">
              <Logo color="white" />
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default NotFoundPage;