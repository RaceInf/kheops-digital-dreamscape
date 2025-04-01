
import React from 'react';
import { FAQItem } from '@/types';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

interface EbookFAQProps {
  items: FAQItem[];
}

const EbookFAQ = ({ items }: EbookFAQProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="text-gray-600 mb-6">Questions fréquemment posées à propos de ce livre</p>
      
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200 last:border-0">
            <AccordionTrigger className="text-left hover:text-kheops-gold py-4 font-medium text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-gray-50 rounded-lg text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default EbookFAQ;
