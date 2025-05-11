import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, MonitorSmartphone } from 'lucide-react';
import Logo from '../UI/Logo';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('system');
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const isDark = theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md py-2' 
          : 'bg-transparent dark:bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-8 items-center"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {['/', '/about', '/services', '/portfolio', '/contact'].map((path, index) => {
              const names = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
              return (
                <motion.div key={path} variants={itemVariants}>
                  <NavLink 
                    to={path}
                    className={({ isActive }) =>
                      `relative px-2 py-1 transition-colors font-medium hover:text-obsidium-500 dark:hover:text-obsidium-400 ${
                        isActive ? 'text-obsidium-500 dark:text-obsidium-400' : 'text-gray-800 dark:text-gray-200'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {names[index]}
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute left-0 right-0 h-0.5 bg-obsidium-500 dark:bg-obsidium-400 bottom-0"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              );
            })}
            
            <motion.div variants={itemVariants} className="flex items-center space-x-2 ml-4">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleThemeChange('light')}
                className={`p-1.5 rounded-full ${theme === 'light' ? 'bg-obsidium-100 dark:bg-obsidium-800' : ''}`}
                aria-label="Light mode"
              >
                <Sun size={18} className="text-yellow-500" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleThemeChange('dark')}
                className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-obsidium-100 dark:bg-obsidium-800' : ''}`}
                aria-label="Dark mode"
              >
                <Moon size={18} className="text-indigo-500" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleThemeChange('system')}
                className={`p-1.5 rounded-full ${theme === 'system' ? 'bg-obsidium-100 dark:bg-obsidium-800' : ''}`}
                aria-label="System preference"
              >
                <MonitorSmartphone size={18} className="text-gray-500 dark:text-gray-400" />
              </motion.button>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-[100%] left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg"
          >
            <motion.div 
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {['/', '/about', '/services', '/portfolio', '/contact'].map((path, index) => {
                const names = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
                return (
                  <motion.div key={path} variants={itemVariants}>
                    <NavLink 
                      to={path}
                      className={({ isActive }) =>
                        `block py-2 transition-colors font-medium hover:text-obsidium-500 dark:hover:text-obsidium-400 ${
                          isActive ? 'text-obsidium-500 dark:text-obsidium-400' : 'text-gray-800 dark:text-gray-200'
                        }`
                      }
                    >
                      {names[index]}
                    </NavLink>
                  </motion.div>
                );
              })}

              <motion.div variants={itemVariants} className="flex items-center space-x-4 py-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleThemeChange('light')}
                  className={`p-2 rounded-full ${theme === 'light' ? 'bg-obsidium-100 dark:bg-obsidium-800' : ''}`}
                  aria-label="Light mode"
                >
                  <Sun size={20} className="text-yellow-500" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleThemeChange('dark')}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'bg-obsidium-100 dark:bg-obsidium-800' : ''}`}
                  aria-label="Dark mode"
                >
                  <Moon size={20} className="text-indigo-500" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleThemeChange('system')}
                  className={`p-2 rounded-full ${theme === 'system' ? 'bg-obsidium-100 dark:bg-obsidium-800' : ''}`}
                  aria-label="System preference"
                >
                  <MonitorSmartphone size={20} className="text-gray-500 dark:text-gray-400" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;