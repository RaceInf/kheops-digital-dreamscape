
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const WhatsAppButton = ({ productName, className = "", variant = "default" }: WhatsAppButtonProps) => {
  const phoneNumber = "237620113107"; // Numéro au format international
  
  const message = productName 
    ? `Bonjour, je suis intéressé(e) par votre ebook "${productName}". Pouvez-vous me donner plus d'informations pour l'achat ?` 
    : "Bonjour, je suis intéressé(e) par vos ebooks. Pouvez-vous me donner plus d'informations ?";
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative overflow-hidden rounded-lg"
    >
      <Button 
        variant={variant}
        className={`gap-2 w-full font-medium ${className}`}
        onClick={() => window.open(whatsappLink, '_blank')}
      >
        <MessageCircle size={18} className="text-white" />
        Commander
      </Button>
      
      {/* Ripple effect overlay */}
      <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        <span className="ripple-effect"></span>
      </span>
    </motion.div>
  );
};

export default WhatsAppButton;
