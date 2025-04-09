
import { Link } from 'react-router-dom';
import { ArrowRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ebooks } from '@/data/ebooks';
import PriceDisplay from '../shop/PriceDisplay';

const ShopSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Afficher uniquement les 3 premiers ebooks pour prévisualisation
  const featuredEbooks = ebooks.slice(0, 3);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('shop');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-kheops-lightGray relative overflow-hidden" id="shop">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-kheops-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-kheops-salmon/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-kheops-salmon text-sm font-medium uppercase tracking-wider mb-2">Ressources digitales</span>
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Découvrez notre <span className="text-kheops-gold">Boutique</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Accédez à notre sélection d'ebooks et de ressources exclusives pour développer vos compétences digitales.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {featuredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              variants={itemVariants}
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-kheops-gold/30 rounded-xl">
                <div className="aspect-[3/2] relative overflow-hidden bg-gray-50 rounded-t-xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    {ebook.imageUrl ? (
                      <img src={ebook.imageUrl} alt={ebook.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                        <Book size={48} className="text-kheops-gold/50" />
                      </div>
                    )}
                  </motion.div>
                  {ebook.isOnSale && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md transform rotate-[-5deg]">
                      PROMO
                    </div>
                  )}
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{ebook.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{ebook.subtitle}</p>
                  
                  <div className="mb-4">
                    <PriceDisplay 
                      price={ebook.price} 
                      originalPrice={ebook.originalPrice} 
                      isOnSale={ebook.isOnSale}
                      className="justify-center"
                    />
                  </div>
                  
                  <Link to={`/shop/${ebook.id}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-kheops-gold to-kheops-salmon hover:from-kheops-salmon hover:to-kheops-gold text-white shadow-sm hover:shadow-md transition-all duration-300">
                      Voir détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/shop">
            <Button className="bg-white hover:bg-kheops-gold text-gray-800 hover:text-white border border-gray-200 hover:border-transparent px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg flex items-center mx-auto group">
              Voir tous nos ebooks
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;
