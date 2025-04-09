
import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-[100vh] w-full flex flex-col justify-center relative overflow-hidden py-24 md:py-32"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-white via-gray-50 to-kheops-lightGray"></div>
        <motion.div 
          initial={{ opacity: 0.1, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-kheops-gold"
        />
        <motion.div 
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-60 -right-20 w-[500px] h-[500px] rounded-full bg-kheops-salmon"
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="text-center lg:text-left"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-kheops-gold/10 text-kheops-gold rounded-full text-sm font-semibold mb-6"
            >
              Agence de Communication Digitale au Cameroun
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">
                Transformez
              </span> <br className="hidden sm:block" />
              votre présence digitale
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Une agence créative à votre écoute pour développer votre stratégie digitale et propulser votre marque vers de nouveaux sommets sur le marché africain.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto bg-kheops-gold hover:bg-kheops-salmon text-white font-medium transition-all duration-300 hover:shadow-lg text-base">
                  Découvrir nos services
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white font-medium transition-all duration-300 text-base">
                  Nous contacter
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero image with floating elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ scale, opacity }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Stratégie digitale" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </motion.div>
              
              {/* Floating UI elements */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-10 top-1/4 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-kheops-gold/20 flex items-center justify-center">
                    <span className="text-kheops-gold text-lg font-bold">100+</span>
                  </div>
                  <div>
                    <p className="font-medium">Clients satisfaits</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-kheops-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-5 bottom-20 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-kheops-salmon/20 flex items-center justify-center">
                    <span className="text-kheops-salmon text-lg font-bold">7+</span>
                  </div>
                  <p className="font-medium">Années d'expertise</p>
                </div>
              </motion.div>
              
              {/* Decorative shapes */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-kheops-gold/10 rounded-full blur-xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-kheops-salmon/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-sm text-gray-500 mb-2">Découvrir</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
