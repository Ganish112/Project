import React from 'react';
import { motion } from 'framer-motion';
import Section from '../UI/Section';
import Button from '../UI/Button';

const CtaSection = () => {
  return (
    <Section background="gradient" spacing="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative"
      >
       

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white relative"
        >
          Ready to Start Your Next Web Project?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/90 mb-8"
        >
          Let's work together to bring your vision to life. Our team is ready to help you create a website that drives results for your business.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Button 
            to="/contact" 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
          >
            Let's Talk
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default CtaSection;