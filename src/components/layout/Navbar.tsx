
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen, location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Boutique', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if the link is active
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') {
      return false;
    }
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-poppins font-bold text-xl md:text-2xl"
          >
            <span className="text-kheops-gold">KHEOPS</span> 
            <span className="text-kheops-salmon">SET</span> 
            <span className="hidden sm:inline-block">DIGITAL</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`font-poppins font-medium text-base transition-all duration-300 relative px-1 py-2 group ${
                isActive(link.href)
                ? 'text-kheops-salmon'
                : 'text-gray-800 hover:text-kheops-salmon'
              }`}
            >
              {link.name}
              <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-kheops-salmon transform origin-left transition-transform duration-300 ${
                isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Contact Button and Phone */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:+237600000000" className="flex items-center text-gray-800 hover:text-kheops-gold transition-colors duration-200 group">
            <span className="bg-kheops-gold/10 p-2 rounded-full mr-2 group-hover:bg-kheops-gold/20 transition-all">
              <Phone size={16} className="text-kheops-gold" />
            </span>
            <span className="font-medium text-sm">+237 600 000 000</span>
          </a>
          <Link to="/contact">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white font-medium transition-all duration-300 shadow-sm">
              Demander un devis
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-700 z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? 'close' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              
              <motion.div 
                className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-xl z-40 lg:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col h-full p-8">
                  <div className="flex justify-between items-center mb-8 pt-2">
                    <span className="font-poppins font-bold text-xl">
                      <span className="text-kheops-gold">KHEOPS</span> 
                      <span className="text-kheops-salmon">SET</span>
                    </span>
                    <button onClick={toggleMenu} aria-label="Fermer le menu" className="p-2">
                      <X size={24} />
                    </button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.href}
                          className={`font-poppins font-medium text-lg p-2 block transition-colors ${
                            isActive(link.href) 
                              ? 'text-kheops-salmon bg-kheops-salmon/5 rounded-lg' 
                              : 'text-gray-800 hover:text-kheops-salmon hover:bg-kheops-salmon/5 rounded-lg'
                          }`}
                          onClick={toggleMenu}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-4 pt-8 border-t border-gray-100">
                    <a href="tel:+237600000000" className="flex items-center text-gray-800 hover:text-kheops-gold transition-colors duration-200 p-2">
                      <div className="bg-kheops-gold/10 p-2 rounded-full mr-3">
                        <Phone size={16} className="text-kheops-gold" />
                      </div>
                      <span className="font-medium">+237 600 000 000</span>
                    </a>
                    <Link to="/contact" className="block" onClick={toggleMenu}>
                      <Button className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300">
                        Demander un devis
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
