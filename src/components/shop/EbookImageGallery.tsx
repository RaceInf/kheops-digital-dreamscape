
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface EbookImageGalleryProps {
  mainImage: string;
  title: string;
}

const EbookImageGallery = ({ mainImage, title }: EbookImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <>
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-kheops-gold/20 bg-gray-100 cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300" 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={mainImage} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <ZoomIn className="text-white" size={40} />
        </div>
        
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-4xl font-bold rotate-[-30deg] pointer-events-none">
          APERÇU
        </div>
      </div>

      {/* Fullscreen Image Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <Button 
            variant="ghost" 
            className="absolute top-2 right-2 text-white z-50 rounded-full p-2 h-auto" 
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </Button>
          
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img 
              src={mainImage} 
              alt={title} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EbookImageGallery;
