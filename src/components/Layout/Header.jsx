import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X} from 'lucide-react';
import Logo from '../UI/Logo';
import { GoSun, GoMoon } from "react-icons/go";

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else {
      setTheme('dark'); // default
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

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/services', name: 'Services' },
    //{ path: '/portfolio', name: 'Portfolio' },
    { path: '/contact', name: 'Contact' }
  ];

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
            <Link to="/" className="flex items-center space-x-2 ">
              <Logo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) =>
                      `relative inline-block px-2 py-1 transition-colors font-medium hover:text-obsidium-500 dark:hover:text-obsidium-400 ${
                        isActive ? 'text-obsidium-500 dark:text-obsidium-400' : 'text-gray-800 dark:text-gray-200'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-obsidium-500 dark:bg-obsidium-400"
                          initial={false}
                          animate={{
                            width: isActive ? "100%" : "0%",
                            opacity: isActive ? 1 : 0
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                          }}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants}>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:opacity-80 transition"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <GoSun size={20} /> : <GoMoon size={20} />}
              </button>
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
              {navItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 transition-colors font-medium hover:text-obsidium-500 dark:hover:text-obsidium-400 ${
                        isActive ? 'text-obsidium-500 dark:text-obsidium-400' : 'text-gray-800 dark:text-gray-200'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="flex items-center space-x-4 py-2">
                <button
                  onClick={toggleTheme}
                  className="w-full p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex items-center justify-center space-x-2"
                  aria-label="Toggle Theme"
                >
                  {theme === 'light' ? <GoSun size={20} /> : <GoMoon size={20} />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;