
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check localStorage for user preference
    const storedPreference = localStorage.getItem('darkMode');
    
    if (storedPreference !== null) {
      setIsDarkMode(storedPreference === 'true');
    } else {
      setIsDarkMode(prefersDark);
    }
    
    // Apply dark mode if needed
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', String(newDarkMode));
    
    // Toggle dark class on html element
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Boutique', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo with animation */}
        <Link to="/" className="flex items-center group">
          <motion.span 
            className="font-poppins font-bold text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="text-kheops-gold"
              whileHover={{ scale: 1.05 }}
            >
              KHEOPS
            </motion.span> 
            <motion.span 
              className="text-kheops-salmon"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 }}
            >
              SET
            </motion.span> 
            <motion.span 
              className="dark:text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 }}
            >
              DIGITAL
            </motion.span>
          </motion.span>
        </Link>

        {/* Desktop Navigation with enhanced animations */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`font-poppins font-medium ${
                isActive(link.href) 
                  ? 'text-kheops-salmon' 
                  : 'text-gray-800 dark:text-gray-200'
              } hover:text-kheops-salmon transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-kheops-salmon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              {link.name}
              {isActive(link.href) && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-kheops-salmon"
                  layoutId="activeNav"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </Link>
          ))}
          
          {/* Dark mode toggle */}
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={20} className="text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={20} className="text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 hover:shadow-lg">
            Demander un devis
          </Button>
        </div>

        {/* Mobile Navigation Toggle with animation */}
        <div className="md:hidden flex items-center">
          <button 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2 focus:outline-none"
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
          </button>
          
          <motion.button 
            className="focus:outline-none" 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="dark:text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="dark:text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu with improved animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              ref={menuRef}
              className="fixed top-0 right-0 h-full w-4/5 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-poppins font-bold text-xl">
                    <span className="text-kheops-gold">KHEOPS</span> 
                    <span className="text-kheops-salmon">SET</span>
                  </span>
                  <button onClick={toggleMenu}>
                    <X size={24} className="dark:text-white" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className={`font-poppins font-medium text-xl ${
                          isActive(link.href) 
                            ? 'text-kheops-salmon' 
                            : 'text-gray-800 dark:text-gray-200'
                        } hover:text-kheops-salmon transition-colors duration-300`}
                        onClick={toggleMenu}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Button className="mt-4 w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300">
                      Demander un devis
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
