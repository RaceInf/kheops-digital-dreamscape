
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface EbookImageGalleryProps {
  mainImage: string;
  additionalImages?: string[];
  title: string;
}

const EbookImageGallery = ({ mainImage, additionalImages = [], title }: EbookImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [mainImage, ...additionalImages];
  const isMobile = useIsMobile();
  
  const handleOpenGallery = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-kheops-gold/20 bg-gray-100 cursor-pointer group" 
           onClick={() => handleOpenGallery(0)}>
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
      
      {/* Thumbnail gallery for additional images */}
      {additionalImages && additionalImages.length > 0 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {allImages.map((img, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                index === currentImageIndex && isOpen ? 'border-kheops-gold' : 'border-transparent'
              }`}
              onClick={() => handleOpenGallery(index)}
            >
              <img 
                src={img} 
                alt={`${title} - image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Gallery Dialog */}
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
            <Carousel className="w-full max-w-4xl">
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center">
                    <img 
                      src={image} 
                      alt={`${title} - image ${index + 1}`} 
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className={`${isMobile ? "-left-2" : "-left-12"} bg-white/10 hover:bg-white/20 text-white`} />
              <CarouselNext className={`${isMobile ? "-right-2" : "-right-12"} bg-white/10 hover:bg-white/20 text-white`} />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EbookImageGallery;
