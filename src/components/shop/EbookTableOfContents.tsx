
import React from 'react';
import { TableOfContentsItem } from '@/types';
import { ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface EbookTableOfContentsProps {
  items: TableOfContentsItem[];
}

const EbookTableOfContents = ({ items }: EbookTableOfContentsProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="text-kheops-gold h-5 w-5" />
        <h3 className="text-xl font-bold">Table des matières</h3>
        <Badge className="ml-auto bg-kheops-salmon">{items.length} chapitres</Badge>
      </div>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`
              p-3 rounded-lg transition-all duration-200 
              ${item.level === 1 
                ? 'bg-gradient-to-r from-kheops-gold/5 to-kheops-salmon/5 hover:from-kheops-gold/10 hover:to-kheops-salmon/10 border border-kheops-gold/10' 
                : 'ml-8 bg-gray-50/50 hover:bg-gray-100 border border-transparent'}
            `}
          >
            <div className="flex items-center">
              {item.level === 1 && (
                <ChevronRight className="h-5 w-5 text-kheops-gold mr-2 shrink-0" />
              )}
              <a 
                href={`#${item.id}`} 
                className={`
                  hover:text-kheops-gold transition-colors
                  ${item.level === 1 ? 'font-semibold text-lg' : 'text-md'}
                `}
              >
                {item.title}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EbookTableOfContents;
