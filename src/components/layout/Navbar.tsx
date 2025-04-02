
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();

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
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply dark mode if needed
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-poppins font-bold text-xl md:text-2xl">
            <span className="text-kheops-gold">KHEOPS</span> 
            <span className="text-kheops-salmon">SET</span> 
            <span className="dark:text-white">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="font-poppins font-medium text-gray-800 dark:text-gray-200 hover:text-kheops-salmon transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-kheops-salmon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300">
            Demander un devis
          </Button>
          
          {/* Dark Mode Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="ml-2 text-gray-800 dark:text-gray-200"
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden">
          {/* Dark Mode Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="mr-2 text-gray-800 dark:text-gray-200"
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          {/* Mobile Menu Trigger */}
          <Button 
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Menu"
            className="text-gray-800 dark:text-gray-200"
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Mobile Sheet Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="w-[85vw] max-w-md p-0 pt-12 dark:bg-gray-900">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4 text-gray-800 dark:text-gray-200" 
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </Button>
            
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-start items-center mb-8">
                <span className="font-poppins font-bold text-xl">
                  <span className="text-kheops-gold">KHEOPS</span> 
                  <span className="text-kheops-salmon">SET</span>
                  <span className="dark:text-white">DIGITAL</span>
                </span>
              </div>
              
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="font-poppins font-medium text-gray-800 dark:text-gray-200 hover:text-kheops-salmon transition-colors duration-300 text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Button 
                  className="mt-4 bg-kheops-gold hover:bg-kheops-salmon text-white transition-colors duration-300 w-full py-6"
                >
                  Demander un devis
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
