
import { Link } from 'react-router-dom';
import { ArrowRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ebooks } from '@/data/ebooks';
import PriceDisplay from '../shop/PriceDisplay';

const ShopSection = () => {
  // Afficher uniquement les 3 premiers ebooks pour prévisualisation
  const featuredEbooks = ebooks.slice(0, 3);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="shop">
      {/* Background decorations */}
      <div className="absolute left-0 top-40 w-64 h-64 bg-kheops-gold/5 rounded-full -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-20 w-80 h-80 bg-kheops-salmon/5 rounded-full translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre <span className="text-kheops-gold">Boutique</span> en ligne</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-kheops-gold to-kheops-salmon mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvrez notre sélection d'ebooks et de ressources pour développer vos compétences digitales et propulser votre business.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {featuredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              variants={itemVariants}
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-0 shadow-md">
                <div className="aspect-[3/2] relative overflow-hidden">
                  {ebook.imageUrl ? (
                    <img 
                      src={ebook.imageUrl} 
                      alt={ebook.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                      <Book size={48} className="text-kheops-gold/50" />
                    </div>
                  )}
                  {ebook.isOnSale && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      PROMO
                    </div>
                  )}
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{ebook.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{ebook.subtitle}</p>
                  
                  {/* Price display */}
                  <div className="mb-4">
                    <PriceDisplay 
                      price={ebook.price} 
                      originalPrice={ebook.originalPrice} 
                      isOnSale={ebook.isOnSale}
                      className="justify-start"
                    />
                  </div>
                  
                  <Link to={`/shop/${ebook.id}`} className="w-full">
                    <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold text-white transition-all duration-300 flex items-center justify-center gap-2">
                      Voir détails
                      <ArrowRight size={16} />
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/shop">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg flex items-center shadow-md hover:shadow-lg">
              Tous nos ebooks et formations
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;
