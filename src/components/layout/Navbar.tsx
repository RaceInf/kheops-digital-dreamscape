
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
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

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Boutique', href: '/Boutique' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

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
              {navLinks.map((link) => (
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
              ))}
              
              <NavigationMenuItem>
                <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 ml-4">
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu - Using Sheet from shadcn UI */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                {/* Header with logo and close button */}
                <div className="p-6 bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10">
                  <span className="font-bold text-2xl">
                    <span className="text-kheops-gold">KHEOPS</span> 
                    <span className="text-kheops-salmon">SET</span> 
                    <span>DIGITAL</span>
                  </span>
                </div>
                
                <Separator />
                
                {/* Navigation Links */}
                <nav className="flex-grow p-6">
                  <ul className="space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.li 
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="overflow-hidden"
                      >
                        <Link
                          to={link.href}
                          className={cn(
                            "flex items-center justify-between py-2 px-2 rounded-lg font-medium text-lg transition-all duration-300",
                            location.pathname === link.href 
                              ? "bg-kheops-salmon/10 text-kheops-salmon" 
                              : "text-gray-800 hover:bg-gray-100"
                          )}
                        >
                          {link.name}
                          <ChevronRight 
                            className={cn(
                              "h-5 w-5 transition-all",
                              location.pathname === link.href ? "text-kheops-salmon" : "text-gray-400"
                            )} 
                          />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                
                {/* CTA Button */}
                <div className="p-6 bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10">
                  <Button className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300">
                    <Link to="/contact" className="w-full flex items-center justify-center">
                      Demander un devis
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
