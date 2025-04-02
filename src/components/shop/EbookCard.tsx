
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import PriceDisplay from './PriceDisplay';
import { useIsMobile } from '@/hooks/use-mobile';

interface EbookCardProps {
  ebook: Ebook;
  truncateTitle?: boolean;
}

const EbookCard = ({ ebook, truncateTitle = false }: EbookCardProps) => {
  const isMobile = useIsMobile();
  
  // Function to truncate title to specified length
  const formatTitle = (title: string, maxLength = isMobile ? 25 : 30) => {
    if (truncateTitle && title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-kheops-gold transition-colors dark:bg-gray-800 dark:border-gray-700">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
          {ebook.imageUrl ? (
            <img 
              src={ebook.imageUrl} 
              alt={ebook.title} 
              className="object-cover w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-kheops-gold/10 dark:bg-kheops-gold/5">
              <Book size={64} className="text-kheops-gold/50" />
            </div>
          )}
          
          {/* Price Tag */}
          <div className="absolute top-2 right-2 bg-kheops-gold/90 dark:bg-kheops-gold/80 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
            <PriceDisplay 
              price={ebook.price} 
              originalPrice={ebook.originalPrice} 
              isOnSale={ebook.isOnSale}
              size="sm"
            />
          </div>
          
          {/* Promo Badge */}
          {ebook.isOnSale && ebook.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-md transform rotate-[-5deg]">
              PROMO
            </div>
          )}
        </div>
        
        <CardContent className="flex-grow pt-3 sm:pt-4 px-3 sm:px-4">
          <h3 className="text-base sm:text-lg font-bold line-clamp-2">{formatTitle(ebook.title)}</h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{ebook.subtitle}</p>
          <p className="text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 text-gray-600 dark:text-gray-300">{ebook.description}</p>
        </CardContent>
        
        <CardFooter className="pt-0 pb-3 sm:pb-4 px-3 sm:px-4 flex items-center justify-between">
          <Link to={`/shop/${ebook.id}`} className="w-full">
            <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold transition-colors text-white better-tap-target touch-button">
              Voir détails
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EbookCard;
