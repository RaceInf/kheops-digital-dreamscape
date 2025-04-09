
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

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
    { name: 'Services', href: '/services', submenu: [
      { name: 'Community Management', href: '/services/community-management' },
      { name: 'Création de Sites Web', href: '/services/creation-sites-web' },
      { name: 'Identité Visuelle', href: '/services/identite-visuelle' },
      { name: 'Stratégie Digitale', href: '/services/strategie-digitale' },
    ]},
    { name: 'Boutique', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20">
          <span className="font-poppins font-bold text-2xl">
            <span className="text-kheops-gold">KHEOPS</span> 
            <span className="text-kheops-salmon">SET</span> 
            <span className={scrolled ? 'text-gray-800' : 'text-white'}>DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              {navLinks.map((link, index) => 
                link.submenu ? (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-kheops-salmon bg-transparent hover:bg-transparent focus:bg-transparent`}>
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {link.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="row-span-1">
                            <NavigationMenuLink asChild>
                              <Link
                                to={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <Link
                      to={link.href}
                      className={`${scrolled ? 'text-gray-800' : 'text-white'} font-poppins font-medium hover:text-kheops-salmon transition-colors duration-300 px-4 py-2`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button className="ml-4 bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 shadow-lg hover:shadow-xl">
            Demander un devis
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden z-20 p-2" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Menu principal"
        >
          {isOpen ? 
            <X size={24} className={scrolled || isOpen ? 'text-gray-800' : 'text-white'} /> : 
            <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
          }
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-full bg-white shadow-xl z-10 lg:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-20">
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      {link.submenu ? (
                        <div className="space-y-4">
                          <div className="font-poppins font-medium text-gray-800 text-xl flex items-center justify-between">
                            {link.name}
                            <ChevronDown size={18} />
                          </div>
                          <div className="pl-4 space-y-3 border-l-2 border-kheops-salmon/30">
                            {link.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block font-poppins text-gray-600 hover:text-kheops-salmon transition-colors duration-300"
                                onClick={toggleMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          className="font-poppins font-medium text-gray-800 hover:text-kheops-salmon transition-colors duration-300 text-xl"
                          onClick={toggleMenu}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Button className="mt-8 bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 w-full">
                    Demander un devis
                  </Button>
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
