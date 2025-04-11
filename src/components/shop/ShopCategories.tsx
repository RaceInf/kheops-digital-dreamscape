
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShopCategoriesProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const ShopCategories = ({ categories, activeCategory, onSelectCategory }: ShopCategoriesProps) => {
  return (
    <div className="mb-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent pb-2 hidden md:block">
      <div className="flex space-x-1 min-w-max">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium capitalize whitespace-nowrap transition-all",
              activeCategory === category
                ? "bg-kheops-gold text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {category === 'all' ? 'Toutes les catégories' : category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
