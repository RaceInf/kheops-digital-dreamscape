
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shop/WhatsAppButton';

const ShopHero = () => {
  return (
    <section className="pt-32 pb-16 overflow-hidden relative bg-gradient-to-br from-white via-kheops-gold/5 to-white">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-kheops-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-kheops-salmon/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-kheops-gold/10 text-kheops-gold text-sm font-medium mb-6">
              <Star size={16} className="mr-1 fill-current" />
              Ressources digitales de qualité
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">
              Notre Boutique d'Ebooks
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <WhatsAppButton className="bg-green-600 hover:bg-green-700 shadow-md" />
              
              <Button 
                variant="outline"
                className="group border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white"
                onClick={() => {
                  const catalogSection = document.getElementById('catalog');
                  if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explorer le catalogue
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              {/* Main image */}
              <div className="absolute top-0 right-0 md:right-10 w-3/4 h-72 overflow-hidden rounded-2xl shadow-2xl transform rotate-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/images/ebook-entrepreneuriat.jpg" 
                    alt="Entrepreneuriat Digital" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute top-4 right-4 bg-kheops-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow-md transform -rotate-3">
                  Bestseller
                </div>
              </div>
              
              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 md:left-10 w-2/3 h-64 overflow-hidden rounded-2xl shadow-xl transform -rotate-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src="/images/ebook-community-manager.jpg" 
                    alt="Community Manager de Choc" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md transform rotate-3">
                  Promo
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-kheops-gold/20 z-10"
                animate={{ 
                  y: [0, -15, 0], 
                  opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-kheops-salmon/20 z-10"
                animate={{ 
                  y: [0, 10, 0], 
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 bg-white/80 backdrop-blur-sm border border-gray-100 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <div className="p-2 bg-kheops-gold/10 rounded-full text-kheops-gold">
                  <Book size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Bibliothèque</p>
                  <p className="text-gray-500 text-xs">+10 ebooks disponibles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
