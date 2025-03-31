
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { TableOfContentsItem } from '@/types';
import { ChevronDown, ChevronRight, Book } from 'lucide-react';

interface EbookTableOfContentsProps {
  items: TableOfContentsItem[];
}

const EbookTableOfContents = ({ items }: EbookTableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border rounded-lg overflow-hidden mb-6"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="flex items-center gap-2 font-medium">
          <Book size={18} className="text-kheops-gold" />
          <span>Table des matières ({items.length} chapitres)</span>
        </div>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4">
        <ol className="list-decimal list-inside space-y-2">
          {items.map((item) => (
            <li 
              key={item.id} 
              className={`${
                item.level === 1 ? 'font-semibold' : 'ml-6 text-sm'
              }`}
              style={{
                marginLeft: `${(item.level - 1) * 1.5}rem`
              }}
            >
              <a 
                href={`#${item.id}`} 
                className="hover:text-kheops-gold transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default EbookTableOfContents;
