
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WhatsApp } from 'lucide-react';

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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button 
        variant={variant}
        className={`gap-2 ${className}`}
        onClick={() => window.open(whatsappLink, '_blank')}
      >
        <WhatsApp size={20} />
        Commander par WhatsApp
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;
