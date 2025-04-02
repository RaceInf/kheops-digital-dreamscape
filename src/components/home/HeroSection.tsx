
import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
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

  const slideInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background Elements - Abstract Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-kheops-gold opacity-10 parallax" data-speed="-0.2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-kheops-salmon opacity-10 parallax" data-speed="0.3"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-kheops-gold opacity-5 parallax" data-speed="-0.1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-kheops-salmon opacity-5 parallax" data-speed="0.2"></div>
      </div>

      {/* Content */}
      <div className="container-custom z-10 text-center">
        <motion.h1 
          className="mb-6 font-bold leading-tight"
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
          custom={0}
        >
          <span className="bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">Transformez</span> votre présence digitale
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
          custom={1}
        >
          Une agence de communication digitale dédiée à propulser votre marque vers de nouveaux sommets
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
          custom={2}
        >
          <Link to="/services">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg flex items-center">
              Découvrez notre expertise
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="border-2 border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg">
              À propos de nous
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="text-sm text-gray-500 mb-2">Découvrir</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start">
          <ChevronDown size={18} className="text-gray-400 animate-bounce mt-1" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
