
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, WhatsappIcon } from 'lucide-react';

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
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden"
    >
      <Button 
        variant={variant}
        className={`gap-2 ${className}`}
        onClick={() => window.open(whatsappLink, '_blank')}
      >
        <MessageCircle size={20} />
        Commander par WhatsApp
      </Button>
      <motion.div 
        className="absolute inset-0 bg-white/20 rounded-md"
        initial={{ scale: 0, opacity: 0.8 }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

export default WhatsAppButton;
