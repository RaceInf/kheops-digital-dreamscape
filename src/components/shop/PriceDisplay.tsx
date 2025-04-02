
import React from 'react';
import { motion } from 'framer-motion';
import { formatPrice, calculateDiscountPercentage } from '@/lib/currencyUtils';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  showCurrency?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PriceDisplay = ({ 
  price, 
  originalPrice, 
  isOnSale = false, 
  showCurrency = true,
  size = 'md',
  className = '' 
}: PriceDisplayProps) => {
  const hasDiscount = isOnSale && originalPrice && originalPrice > price;
  const discountPercentage = hasDiscount ? calculateDiscountPercentage(originalPrice, price) : 0;
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {hasDiscount ? (
        <>
          <motion.div 
            className={`font-bold ${sizeClasses[size]} text-kheops-gold`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formatPrice(price)}
          </motion.div>
          
          <motion.div 
            className="text-gray-500 line-through text-sm"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {formatPrice(originalPrice)}
          </motion.div>
          
          <motion.div
            className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded-md text-xs font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            -{discountPercentage}%
          </motion.div>
        </>
      ) : (
        <motion.div 
          className={`font-bold ${sizeClasses[size]} text-kheops-gold`}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {formatPrice(price)}
        </motion.div>
      )}
    </div>
  );
};

export default PriceDisplay;
