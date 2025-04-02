
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import { formatPrice } from '@/lib/currency';

interface EbookCardProps {
  ebook: Ebook;
  truncateTitle?: boolean;
}

const EbookCard = ({ ebook, truncateTitle = false }: EbookCardProps) => {
  // Function to truncate title to specified length
  const formatTitle = (title: string, maxLength = 30) => {
    if (truncateTitle && title.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-kheops-gold transition-colors">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
          {ebook.imageUrl ? (
            <img 
              src={ebook.imageUrl} 
              alt={ebook.title} 
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-kheops-gold/10">
              <Book size={64} className="text-kheops-gold/50" />
            </div>
          )}
          <div className="absolute top-2 right-2 bg-kheops-gold text-white px-3 py-1 rounded-full text-sm font-bold">
            {formatPrice(ebook.price)}
          </div>
        </div>
        
        <CardContent className="flex-grow pt-4">
          <h3 className="text-lg font-bold line-clamp-2">{formatTitle(ebook.title)}</h3>
          <p className="text-sm text-gray-500 mb-2">{ebook.subtitle}</p>
          <p className="text-sm line-clamp-3 text-gray-600">{ebook.description}</p>
        </CardContent>
        
        <CardFooter className="pt-0 pb-4 flex items-center justify-between">
          <Link to={`/shop/${ebook.id}`} className="w-full">
            <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold">
              Voir détails
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EbookCard;
