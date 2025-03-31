
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { FAQItem } from '@/types';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageSquare } from 'lucide-react';

interface EbookFAQProps {
  items: FAQItem[];
}

const EbookFAQ = ({ items }: EbookFAQProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <HelpCircle size={20} className="text-kheops-gold" />
        Questions fréquentes
      </h2>
      
      <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
            <AccordionTrigger className="px-4 hover:bg-gray-50 font-medium text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-4 flex justify-end">
        <Link 
          to="/contact" 
          className="inline-flex items-center text-sm text-kheops-gold hover:text-kheops-salmon transition-colors"
        >
          <MessageSquare size={16} className="mr-1" />
          Poser une autre question
        </Link>
      </div>
    </div>
  );
};

export default EbookFAQ;
