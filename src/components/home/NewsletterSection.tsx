
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide",
        variant: "destructive",
      });
      return;
    }
    
    // Simuler l'envoi du formulaire
    toast({
      title: "Inscription réussie!",
      description: "Vous êtes maintenant inscrit à notre newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-kheops-salmon/10 to-kheops-gold/10">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6">Restez <span className="text-kheops-gold">Connecté</span></h2>
          <p className="text-gray-600 mb-8 text-lg">
            Abonnez-vous à notre newsletter pour recevoir nos dernières actualités, articles de blog et offres spéciales directement dans votre boîte de réception.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow py-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-kheops-salmon hover:bg-kheops-gold text-white transition-colors duration-300 py-6"
            >
              <Send className="mr-2 h-4 w-4" /> S'abonner
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            En vous inscrivant, vous acceptez notre politique de confidentialité. Vous pouvez vous désinscrire à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
