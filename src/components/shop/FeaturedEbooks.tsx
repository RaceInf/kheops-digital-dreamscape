
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import EbookCard from '@/components/shop/EbookCard';

interface FeaturedEbooksProps {
  ebooks: Ebook[];
}

const FeaturedEbooks = ({ ebooks }: FeaturedEbooksProps) => {
  if (ebooks.length === 0) return null;
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-kheops-gold/10 text-kheops-gold text-sm font-medium mb-4">
            <Sparkles size={16} className="mr-2" />
            Éditions Spéciales
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Ebooks à la Une</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-kheops-gold to-kheops-salmon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos ebooks les plus populaires, soigneusement sélectionnés pour enrichir vos connaissances en marketing digital
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={`featured-${ebook.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              <EbookCard ebook={ebook} truncateTitle={false} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="ghost" 
            className="group text-kheops-gold hover:text-kheops-salmon hover:bg-transparent"
            asChild
          >
            <Link to="#catalog">
              Voir tous nos ebooks
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-kheops-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-kheops-salmon/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FeaturedEbooks;
