
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CurrencySelector } from '@/components/ui/currency-selector';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-poppins font-bold text-2xl">
            <span className="text-kheops-gold">KHEOPS</span> 
            <span className="text-kheops-salmon">SET</span> 
            <span>DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="font-poppins font-medium text-gray-800 hover:text-kheops-salmon transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-kheops-salmon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Currency Selector */}
          <div className="mx-2">
            <CurrencySelector />
          </div>
          
          <Button className="bg-gradient-to-r from-kheops-gold to-kheops-salmon hover:from-kheops-salmon hover:to-kheops-gold text-white shadow-md hover:shadow-lg transition-all duration-300">
            Demander un devis
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <CurrencySelector />
          <button className="p-2" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-8">
              <span className="font-poppins font-bold text-xl">
                <span className="text-kheops-gold">KHEOPS</span> 
                <span className="text-kheops-salmon">SET</span>
              </span>
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="font-poppins font-medium text-gray-800 hover:text-kheops-salmon transition-colors duration-300 text-xl"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-kheops-gold to-kheops-salmon hover:from-kheops-salmon hover:to-kheops-gold text-white transition-colors duration-300">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
