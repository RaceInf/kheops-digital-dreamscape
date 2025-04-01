
import React from 'react';
import { TableOfContentsItem } from '@/types';
import { ChevronRight } from 'lucide-react';

interface EbookTableOfContentsProps {
  items: TableOfContentsItem[];
}

const EbookTableOfContents = ({ items }: EbookTableOfContentsProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <p className="text-gray-600">Ce livre contient <span className="font-semibold">{items.length} chapitres</span></p>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id}
            className={`
              p-4 rounded-lg transition-all duration-200 hover:bg-kheops-gold/10
              ${item.level === 1 ? 'bg-gray-50' : 'ml-8 bg-gray-50/50'}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default EbookTableOfContents;
