
import { Link } from 'react-router-dom';
import { ArrowRight, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ebooks } from '@/data/ebooks';

const ShopSection = () => {
  // Afficher uniquement les 3 premiers ebooks pour prévisualisation
  const featuredEbooks = ebooks.slice(0, 3);

  return (
    <section className="section-padding bg-kheops-lightGray" id="shop">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Notre <span className="text-kheops-gold">Boutique</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Découvrez notre sélection d'ebooks et de ressources pour développer vos compétences digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEbooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-[3/2] relative overflow-hidden bg-gray-100">
                  {ebook.imageUrl ? (
                    <img src={ebook.imageUrl} alt={ebook.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                      <Book size={48} className="text-kheops-gold/50" />
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-kheops-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                    {ebook.price.toLocaleString()} FCFA
                  </div>
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{ebook.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{ebook.subtitle}</p>
                  <Link to={`/shop/${ebook.id}`} className="w-full">
                    <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold">
                      Voir détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg flex items-center">
              Voir tous nos ebooks
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
