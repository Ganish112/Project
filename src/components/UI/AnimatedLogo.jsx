import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/ob.png';

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);

  // Memoize animation variants to prevent recreating on each render
  const animationVariants = useMemo(() => ({
    initial: { 
      scale: 0.8,
      opacity: 0,
      filter: 'blur(10px)',
      transform: 'translateZ(0)' // Force GPU acceleration
    },
    animate: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: 'easeOut'
      }
    }
  }), []);

  // Memoize styles to prevent recreation
  const styles = useMemo(() => ({
    container: {
      width: '300px',
      height: '400px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      willChange: 'transform', // Optimize animations
      transform: 'translateZ(0)' // Force GPU acceleration
    },
    logo: {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${logo})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'drop-shadow(0 10px 15px rgba(59, 130, 246, 0.3))',
      willChange: 'transform, opacity', // Optimize animations
      transform: 'translateZ(0)' // Force GPU acceleration
    },
    glow: {
      position: 'absolute',
      inset: '0',
      background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent)',
      filter: 'blur(40px)',
      opacity: 0.5,
      willChange: 'transform, opacity', // Optimize animations
      transform: 'translateZ(0)' // Force GPU acceleration
    }
  }), []);

  useEffect(() => {
    // Delay the reveal animation slightly
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <motion.div
        initial="initial"
        animate={revealed ? "animate" : "initial"}
        variants={animationVariants}
        style={styles.logo}
      />
      
      {revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          style={styles.glow}
        />
      )}
    </div>
  );
};

// Prevent unnecessary re-renders
export default React.memo(AnimatedLogo);