
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Boutique', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicesDropdownItems = [
    { 
      title: "Community Management", 
      href: "/services/community-management", 
      description: "Gestion professionnelle de vos réseaux sociaux"
    },
    { 
      title: "Création de Sites Web", 
      href: "/services/creation-sites-web", 
      description: "Sites vitrines et e-commerce modernes et responsives" 
    },
    { 
      title: "Identité Visuelle", 
      href: "/services/identite-visuelle", 
      description: "Logos et chartes graphiques percutants" 
    },
    { 
      title: "Stratégie Digitale", 
      href: "/services/strategie-digitale", 
      description: "Plans marketing digitaux complets" 
    },
    { 
      title: "SEO", 
      href: "/services/referencement-seo", 
      description: "Optimisez votre visibilité sur les moteurs de recherche" 
    },
  ];

  // Animation variants
  const mobileMenuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "tween", ease: "easeOut" } }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
      aria-label="Navigation principale"
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.span 
            className="font-bold text-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-kheops-gold">KHEOPS</span> 
            <span className="text-kheops-salmon">SET</span> 
            <span>DIGITAL</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-1">
              {navLinks.map((link) => {
                if (link.name === 'Services') {
                  return (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className={cn(
                        "text-gray-800 hover:text-kheops-salmon transition-colors font-medium",
                        location.pathname === link.href && "text-kheops-salmon"
                      )}>
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {servicesDropdownItems.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{item.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                
                return (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.href}
                      className={cn(
                        "group px-4 py-2 text-gray-800 hover:text-kheops-salmon transition-colors duration-300 font-medium relative",
                        location.pathname === link.href && "text-kheops-salmon",
                        "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-kheops-salmon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
              
              <NavigationMenuItem>
                <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 ml-4">
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <motion.div
            initial="rest"
            animate={isOpen ? "open" : "rest"}
            className="relative w-6 h-6"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-xl z-50 lg:hidden"
              id="mobile-menu"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-xl">
                    <span className="text-kheops-gold">KHEOPS</span> 
                    <span className="text-kheops-salmon">SET</span>
                  </span>
                  <button 
                    onClick={toggleMenu}
                    aria-label="Fermer le menu"
                    className="p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <div key={index} className="border-b border-gray-100 pb-2">
                      {link.name === 'Services' ? (
                        <details className="group">
                          <summary className="flex justify-between items-center cursor-pointer list-none text-gray-800 hover:text-kheops-salmon transition-colors duration-300 font-medium text-lg py-2">
                            {link.name}
                            <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                          </summary>
                          <ul className="mt-2 ml-4 space-y-2">
                            {servicesDropdownItems.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={item.href}
                                  className="block text-gray-600 hover:text-kheops-salmon py-1"
                                  onClick={toggleMenu}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        <Link
                          to={link.href}
                          className={cn(
                            "block py-2 text-gray-800 hover:text-kheops-salmon transition-colors duration-300 font-medium text-lg",
                            location.pathname === link.href && "text-kheops-salmon"
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="mt-6 bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300">
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black lg:hidden"
            onClick={toggleMenu}
            style={{ zIndex: 40 }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
