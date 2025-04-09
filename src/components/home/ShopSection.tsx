
import { Link } from 'react-router-dom';
import { ArrowRight, Book, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ebooks } from '@/data/ebooks';
import PriceDisplay from '../shop/PriceDisplay';

const ShopSection = () => {
  // Afficher uniquement les 3 premiers ebooks pour prévisualisation
  const featuredEbooks = ebooks.slice(0, 3);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-kheops-lightGray" id="shop">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-block text-kheops-gold font-medium mb-3 px-4 py-1 rounded-full bg-kheops-gold/10">
              Ressources exclusives
            </span>
            <h2 className="mb-4">Notre <span className="text-kheops-gold">Boutique</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvrez notre sélection d'ebooks et de ressources pour développer vos compétences digitales 
              et booster votre présence en ligne.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-none shadow-md">
                <div className="aspect-[3/2] relative overflow-hidden bg-gray-100 group">
                  {ebook.imageUrl ? (
                    <img 
                      src={ebook.imageUrl} 
                      alt={ebook.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                      <Book size={48} className="text-kheops-gold/50" />
                    </div>
                  )}
                  {ebook.isOnSale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      PROMO
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <Link to={`/shop/${ebook.id}`} className="w-full">
                        <Button className="w-full bg-white hover:bg-kheops-gold text-gray-800 hover:text-white">
                          Voir détails
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{ebook.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{ebook.subtitle}</p>
                  
                  <div className="mb-4">
                    <PriceDisplay 
                      price={ebook.price} 
                      originalPrice={ebook.originalPrice} 
                      isOnSale={ebook.isOnSale}
                      className="justify-start"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link to="/shop">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Voir tous nos ebooks
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;
