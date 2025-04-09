
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Ebook } from '@/types';
import PriceDisplay from './PriceDisplay';

interface EbookCardProps {
  ebook: Ebook;
  truncateTitle?: boolean;
}

const EbookCard = ({ ebook, truncateTitle = false }: EbookCardProps) => {
  const [rerenderFlag, setRerenderFlag] = useState(false);

  // Function to truncate title to specified length
  const formatTitle = (title: string, maxLength = 30) => {
    if (truncateTitle && title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };

  // Force re-render when currency changes
  useEffect(() => {
    const handleCurrencyChange = () => {
      setRerenderFlag(prev => !prev);
    };

    window.addEventListener('currency-changed', handleCurrencyChange);
    return () => {
      window.removeEventListener('currency-changed', handleCurrencyChange);
    };
  }, []);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border border-gray-100 hover:border-kheops-gold hover:shadow-lg transition-all duration-300 rounded-xl">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50 rounded-t-xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {ebook.imageUrl ? (
              <img 
                src={ebook.imageUrl} 
                alt={ebook.title} 
                className="object-cover w-full h-full transition-transform duration-300"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-kheops-gold/20 to-kheops-salmon/10">
                <Book size={64} className="text-kheops-gold/50" />
              </div>
            )}
          </motion.div>
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-white text-kheops-gold border-none shadow-sm">
              {ebook.category}
            </Badge>
          </div>
          
          {/* Promo Badge */}
          {ebook.isOnSale && ebook.originalPrice && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md transform rotate-[-5deg]">
              PROMO
            </div>
          )}
        </div>
        
        <CardContent className="flex-grow pt-4">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-lg font-bold line-clamp-2 group-hover:text-kheops-gold transition-colors duration-300">
              {formatTitle(ebook.title)}
            </h3>
            
            {/* Small rating indicator */}
            <div className="flex items-center gap-0.5">
              <Star size={14} className="fill-kheops-gold text-kheops-gold" />
              <span className="text-xs text-gray-500">4.8</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2 line-clamp-1">{ebook.subtitle}</p>
          
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-gray-50 text-gray-600 border-none">
              {ebook.pages} pages
            </Badge>
            <Badge variant="outline" className="bg-gray-50 text-gray-600 border-none">
              {ebook.language}
            </Badge>
          </div>
          
          <p className="text-sm line-clamp-2 text-gray-600 mb-2">{ebook.description}</p>
          
          {/* Price display */}
          <div className="mt-auto mb-3 pt-3">
            <PriceDisplay 
              price={ebook.price} 
              originalPrice={ebook.originalPrice} 
              isOnSale={ebook.isOnSale}
              size="sm"
              className="justify-center"
            />
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 pb-4">
          <Link to={`/shop/${ebook.id}`} className="w-full">
            <Button className="w-full bg-gradient-to-r from-kheops-gold to-kheops-salmon hover:from-kheops-salmon hover:to-kheops-gold text-white transition-all duration-300 shadow-sm hover:shadow-md">
              Voir détails
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EbookCard;
