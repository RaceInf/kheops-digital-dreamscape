
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
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      style={{ paddingTop: '80px' }}
    >
      {/* Background Pattern and Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335397-9fa341196ff1?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/40 to-gray-900/90"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-kheops-gold opacity-10 parallax" data-speed="-0.2"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-kheops-salmon opacity-10 parallax" data-speed="0.3"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-kheops-gold opacity-5 parallax" data-speed="-0.1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-kheops-salmon opacity-5 parallax" data-speed="0.2"></div>
      </div>

      {/* Content */}
      <div className="container-custom z-10 text-center px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.span 
            className="inline-block text-kheops-salmon font-medium mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm"
            variants={fadeIn}
          >
            Agence de communication digitale au Cameroun
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
            variants={fadeIn}
          >
            <span className="bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">Transformez</span> votre présence digitale
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            variants={fadeIn}
          >
            Des stratégies digitales innovantes pour propulser votre marque vers de nouveaux sommets
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mx-auto max-w-md sm:max-w-xl"
            variants={fadeIn}
          >
            <Link to="/services" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg flex items-center justify-center">
                Découvrez notre expertise
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg">
                À propos de nous
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-gray-300 mb-2">Découvrir</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-gray-300 rounded-full mt-1"
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

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
