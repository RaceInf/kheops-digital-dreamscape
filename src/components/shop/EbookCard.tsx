
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Ebook } from '@/types';
import PriceDisplay from './PriceDisplay';
import WhatsAppButton from './WhatsAppButton';

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

  const truncateDescription = (text: string, lines = 3) => {
    return text;
  };

  return (
    <Card className="w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-full">
      {/* Book Cover */}
      <div className="relative w-full md:w-2/5 aspect-[3/4] bg-gray-100">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {ebook.imageUrl ? (
            <img 
              src={ebook.imageUrl} 
              alt={ebook.title} 
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              <Book size={64} className="text-gray-400" />
            </div>
          )}
        </motion.div>
        
        {/* Promo Badge */}
        {ebook.isOnSale && ebook.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            PROMO
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col justify-between w-full md:w-3/5 p-6">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 line-clamp-2">
            {formatTitle(ebook.title)}
          </h3>
          
          <p className="text-sm text-kheops-salmon font-medium mb-4">{ebook.subtitle}</p>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {ebook.description}
          </p>
        </div>
        
        <div>
          {/* Price */}
          <div className="mb-6">
            <PriceDisplay 
              price={ebook.price} 
              originalPrice={ebook.originalPrice} 
              isOnSale={ebook.isOnSale}
              size="md"
              className="justify-start"
            />
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/shop/${ebook.id}`} className="flex-1">
              <button className="w-full py-3 px-6 border border-kheops-gold text-kheops-gold rounded-lg font-semibold hover:bg-kheops-gold hover:text-white transition-colors duration-300">
                Voir détails
              </button>
            </Link>
            
            <div className="flex-1">
              <WhatsAppButton 
                productName={ebook.title}
                className="w-full bg-green-600 hover:bg-green-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EbookCard;
