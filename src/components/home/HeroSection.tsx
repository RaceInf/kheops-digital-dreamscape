
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Parallax values for different elements
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -25]);
  const buttonsY = useTransform(scrollY, [0, 300], [0, -15]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
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

  const textAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    }
  };

  // Split heading into array of letters for animation
  const headingText = "Transformez votre présence digitale";
  const splitHeading = headingText.split('');

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background Elements - Abstract Shapes with enhanced animation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-kheops-gold opacity-10"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-kheops-salmon opacity-10"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-kheops-gold opacity-5"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-kheops-salmon opacity-5"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* Content with enhanced parallax and animations */}
      <div className="container-custom z-10 text-center">
        {isMounted && (
          <>
            <motion.div
              style={{ opacity: titleOpacity, y: titleY }}
              className="mb-6"
            >
              <motion.h1 
                variants={textAnimation}
                initial="hidden"
                animate="visible"
                className="font-bold leading-tight"
              >
                {splitHeading.map((letter, index) => (
                  <motion.span 
                    key={index}
                    variants={letterAnimation}
                    className={letter === ' ' ? 'mr-2' : ''}
                  >
                    {letter === 'T' ? 
                      <span className="text-gradient-primary">{letter}</span> : 
                      letter
                    }
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
            
            <motion.p 
              style={{ y: subtitleY }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
              initial="hidden"
              animate="visible"
              variants={slideInVariants}
              custom={1}
            >
              Une agence de communication digitale dédiée à propulser votre marque vers de nouveaux sommets
            </motion.p>
            
            <motion.div 
              style={{ y: buttonsY }}
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial="hidden"
              animate="visible"
              variants={slideInVariants}
              custom={2}
            >
              <Link to="/services">
                <Button 
                  className="group bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg flex items-center overflow-hidden relative"
                >
                  <span className="relative z-10">Découvrez notre expertise</span>
                  <motion.span
                    className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 w-full bg-white/30"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-2 border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">À propos de nous</span>
                  <motion.div 
                    className="absolute inset-0 bg-kheops-gold/10 translate-y-full"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </Link>
            </motion.div>
          </>
        )}
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        style={{ opacity: scrollIndicatorOpacity }}
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
        <motion.div 
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
          >
            <ChevronDown size={18} className="text-gray-400 mt-1" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
