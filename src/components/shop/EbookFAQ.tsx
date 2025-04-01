
import React from 'react';
import { FAQItem } from '@/types';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface EbookFAQProps {
  items: FAQItem[];
}

const EbookFAQ = ({ items }: EbookFAQProps) => {
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
        <Info className="text-kheops-gold h-5 w-5" />
        <h3 className="text-xl font-bold">Questions fréquemment posées</h3>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`} 
            className="border-b border-gray-200 last:border-0"
          >
            <AccordionTrigger 
              className="text-left hover:text-kheops-gold py-4 font-medium text-base"
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent 
              className="p-4 bg-gray-50 rounded-lg text-gray-600 my-2"
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default EbookFAQ;
