
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.speed || '0.5');
          const pos = scrolled * speed;
          (el as HTMLElement).style.transform = `translateY(${pos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <header 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50"
      style={{ paddingTop: '80px' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-kheops-gold opacity-10 parallax" data-speed="-0.2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-kheops-salmon opacity-10 parallax" data-speed="0.3"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-kheops-gold opacity-5 parallax" data-speed="-0.1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-kheops-salmon opacity-5 parallax" data-speed="0.2"></div>
      </div>

      {/* Content */}
      <div className="container-custom z-10 px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1 
            className="mb-6 font-bold leading-tight"
            variants={fadeIn}
          >
            <span className="bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">Transformez</span> votre présence digitale
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
            variants={fadeIn}
          >
            Une agence de communication digitale dédiée à propulser votre marque vers de nouveaux sommets
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto"
            variants={fadeIn}
          >
            <Link to="/services" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg flex items-center justify-center">
                Découvrez notre expertise
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg">
                Demander un devis
              </Button>
            </Link>
          </motion.div>
          
          {/* Animated badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 inline-flex"
          >
            <div className="bg-white shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 animate-pulse">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-800 font-medium">Disponible pour nouveaux projets</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-sm text-gray-500 mb-2">Découvrir</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-gray-400 rounded-full mt-1"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
