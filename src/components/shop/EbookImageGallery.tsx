
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

interface EbookImageGalleryProps {
  mainImage: string;
  title: string;
  additionalImages?: string[];
  activeIndex?: number;
  onImageChange?: (index: number) => void;
}

const EbookImageGallery = ({ 
  mainImage, 
  title, 
  additionalImages = [],
  activeIndex = 0,
  onImageChange
}: EbookImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const allImages = [mainImage, ...(additionalImages || [])];
  const currentImage = allImages[activeIndex] || mainImage;
  
  const handleImageChange = (index: number) => {
    if (onImageChange) {
      onImageChange(index);
    }
  };
  
  return (
    <>
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-kheops-gold/20 bg-gray-100 cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300" 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={currentImage} 
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

      {/* Thumbnail navigation */}
      {additionalImages && additionalImages.length > 0 && (
        <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
          <motion.div
            className={`w-16 h-16 rounded-md overflow-hidden border-2 cursor-pointer ${activeIndex === 0 ? 'border-kheops-gold' : 'border-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageChange(0)}
          >
            <img src={mainImage} alt={`${title} - image 1`} className="w-full h-full object-cover" />
          </motion.div>
          
          {additionalImages.map((image, index) => (
            <motion.div
              key={index}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 cursor-pointer ${activeIndex === index + 1 ? 'border-kheops-gold' : 'border-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageChange(index + 1)}
            >
              <img src={image} alt={`${title} - image ${index + 2}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      )}

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
              src={currentImage} 
              alt={title} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {allImages.length > 1 && (
              <>
                <Button 
                  variant="outline" 
                  className="absolute left-4 bg-black/50 text-white border-none rounded-full p-2 h-auto"
                  onClick={() => {
                    const newIndex = activeIndex > 0 ? activeIndex - 1 : allImages.length - 1;
                    handleImageChange(newIndex);
                  }}
                >
                  <ChevronLeft size={24} />
                </Button>
                <Button 
                  variant="outline" 
                  className="absolute right-4 bg-black/50 text-white border-none rounded-full p-2 h-auto"
                  onClick={() => {
                    const newIndex = activeIndex < allImages.length - 1 ? activeIndex + 1 : 0;
                    handleImageChange(newIndex);
                  }}
                >
                  <ChevronRight size={24} />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EbookImageGallery;
