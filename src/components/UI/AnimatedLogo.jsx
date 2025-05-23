import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/ob.png';  // Import the logo if it's in the src/assets folder

const AnimatedLogo = () => {
  const [revealed, setRevealed] = useState(false);
  const [afterEffectStarted, setAfterEffectStarted] = useState(false);
  const crystalControls = useAnimation();

  useEffect(() => {
  let isMounted = true;

  const startReveal = async () => {
    if (!isMounted) return;

    await crystalControls.start({
      rotateY: [0, 723],
      scale: [1.5, 1],
      opacity: [0, 1],
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
      },
    });

    if (!isMounted) return;
    setRevealed(true);

    crystalControls.start({
      scale: [1, 1.1, 1],
      opacity: [1, 1],
      transition: {
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        rotateX: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      },
    });

    setTimeout(() => {
      if (isMounted) setAfterEffectStarted(true);
    }, 2000);
  };

  startReveal();

  return () => {
    isMounted = false; // Cleanup function
  };
}, []);


  return (
    <div className="w-[300px] h-[300px] relative flex items-center justify-center">
      {/* Crystal logo with reveal spin and floating */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={crystalControls}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${logo})`,  // Use the imported logo here
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 20px 30px rgba(59, 130, 246, 0.6))',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0"
      />

      {/* Glowing background */}
      {revealed && (
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent)',
            filter: 'blur(100px)',
            zIndex: -1,
          }}
        />
      )}

      {/* After-effect: Fading, glowing effect */}
      {afterEffectStarted && (
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
            filter: ['blur(50px)', 'blur(0px)', 'blur(50px)'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent)',
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
};

export default AnimatedLogo;
