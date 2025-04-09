
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

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
  }, [location]);

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <span className="font-poppins font-bold text-xl md:text-2xl">
            <span className="text-kheops-gold">KHEOPS</span> 
            <span className="text-kheops-salmon">SET</span> 
            <span>DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className={`font-poppins font-medium text-base transition-colors duration-300 relative ${
                isActive(link.href)
                ? 'text-kheops-salmon after:scale-x-100 after:origin-bottom-left'
                : 'text-gray-800 hover:text-kheops-salmon'
              } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-kheops-salmon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <a href="tel:+237600000000" className="hidden md:flex items-center text-gray-800 hover:text-kheops-gold transition-colors duration-200">
              <Phone size={18} className="mr-1.5" strokeWidth={2} />
              <span className="font-medium text-sm">+237 600 000 000</span>
            </a>
            <Link to="/contact" className="hidden md:block">
              <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 shadow-sm">
                Demander un devis
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden flex items-center text-gray-700 z-10"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <motion.div 
          className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-xl z-40 lg:hidden`}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-8 pt-2">
              <span className="font-poppins font-bold text-xl">
                <span className="text-kheops-gold">KHEOPS</span> 
                <span className="text-kheops-salmon">SET</span>
              </span>
              <button onClick={toggleMenu} aria-label="Fermer le menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`font-poppins font-medium text-lg ${
                    isActive(link.href) ? 'text-kheops-salmon' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <a href="tel:+237600000000" className="flex items-center text-gray-800 hover:text-kheops-gold transition-colors duration-200 py-2">
                <Phone size={18} className="mr-2" strokeWidth={2} />
                <span className="font-medium">+237 600 000 000</span>
              </a>
              <Link to="/contact" className="block">
                <Button className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 lg:hidden"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
