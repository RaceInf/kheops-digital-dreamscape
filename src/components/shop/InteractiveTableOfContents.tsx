
import React, { useState } from 'react';
import { TableOfContentsItem } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface InteractiveTableOfContentsProps {
  items: TableOfContentsItem[];
}

const InteractiveTableOfContents = ({ items }: InteractiveTableOfContentsProps) => {
  const [openChapters, setOpenChapters] = useState<string[]>([]);

  // Organisez les éléments en chapitres et sous-chapitres
  const chapters = items.filter(item => item.level === 1);
  
  // Fonction pour obtenir les sous-chapitres d'un chapitre donné
  const getSubchapters = (chapterId: string) => {
    const chapterIndex = items.findIndex(item => item.id === chapterId);
    if (chapterIndex === -1) return [];
    
    const subchapters = [];
    let i = chapterIndex + 1;
    
    // Collecter tous les sous-chapitres jusqu'au prochain chapitre principal ou la fin
    while (i < items.length && items[i].level > 1) {
      subchapters.push(items[i]);
      i++;
    }
    
    return subchapters;
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md border border-gray-100"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="text-kheops-gold h-5 w-5" />
          <h3 className="text-xl font-bold">Table des matières</h3>
          <Badge className="ml-auto bg-kheops-salmon">{chapters.length} chapitres</Badge>
        </div>
        <p className="text-gray-500 text-sm">Cliquez sur un chapitre pour voir son contenu</p>
      </div>
      
      <div className="p-4 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50">
        <Accordion type="multiple" className="space-y-4">
          {chapters.map((chapter) => {
            const subchapters = getSubchapters(chapter.id);
            return (
              <AccordionItem 
                key={chapter.id} 
                value={chapter.id}
                className="border rounded-lg overflow-hidden shadow-sm bg-gradient-to-r from-kheops-gold/5 to-kheops-salmon/5 hover:from-kheops-gold/10 hover:to-kheops-salmon/10 transition-colors"
              >
                <AccordionTrigger className="px-4 py-3 text-left font-semibold hover:no-underline focus:no-underline">
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-kheops-gold mr-2 shrink-0 transition-transform duration-200 [&[data-state=open]>svg]:rotate-90" />
                    <span className="text-lg">{chapter.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="pl-7 space-y-3 mt-2">
                    {subchapters.map((subchapter) => (
                      <motion.div
                        key={subchapter.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 rounded-md bg-white border border-gray-100 shadow-sm hover:shadow transition-shadow"
                      >
                        <p className="text-gray-700">{subchapter.title}</p>
                      </motion.div>
                    ))}
                    {subchapters.length === 0 && (
                      <p className="text-gray-500 italic text-sm">Aucun sous-chapitre disponible</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default InteractiveTableOfContents;
