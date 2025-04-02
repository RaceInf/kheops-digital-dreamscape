
import { Link } from 'react-router-dom';
import { ArrowRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ebooks } from '@/data/ebooks';
import { useIsMobile } from '@/hooks/use-mobile';

const ShopSection = () => {
  const isMobile = useIsMobile();
  
  // Show fewer ebooks on mobile for better performance
  const featuredEbooks = ebooks.slice(0, isMobile ? 2 : 3);

  return (
    <section className="section-padding bg-kheops-lightGray dark:bg-gray-800" id="shop">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mb-3 md:mb-4">Notre <span className="text-kheops-gold">Boutique</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg px-4">
            Découvrez notre sélection d'ebooks et de ressources pour développer vos compétences digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {featuredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="touch-button"
            >
              <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg dark:bg-gray-700 dark:border-gray-600">
                <div className="aspect-[3/2] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {ebook.imageUrl ? (
                    <img 
                      src={ebook.imageUrl} 
                      alt={ebook.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-kheops-gold/10 dark:bg-kheops-gold/5">
                      <Book size={48} className="text-kheops-gold/50" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-kheops-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                    {ebook.price.toLocaleString()} FCFA
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{ebook.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm md:text-base line-clamp-2">{ebook.subtitle}</p>
                  <Link to={`/shop/${ebook.id}`} className="w-full">
                    <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold text-white better-tap-target">
                      Voir détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 px-4 sm:px-0">
          <Link to="/shop">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-6 md:px-8 py-4 md:py-6 rounded-md font-medium transition-all duration-300 text-base md:text-lg flex items-center better-tap-target touch-button">
              Voir tous nos ebooks
              <ArrowRight className="ml-2" size={isMobile ? 16 : 18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
