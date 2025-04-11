
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Check, ArrowRight, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
    
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Inscription réussie!",
      description: "Vous êtes maintenant inscrit à notre newsletter.",
    });
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-kheops-gold/5 via-kheops-salmon/10 to-kheops-gold/5 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 -left-10 w-40 h-40 rounded-full bg-kheops-salmon blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-kheops-gold blur-3xl"></div>
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-kheops-teal blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kheops-gold to-kheops-salmon flex items-center justify-center mb-6 text-white">
                <Mail size={28} />
              </div>
              <motion.h2 
                className="mb-4 text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Restez à la pointe de <span className="text-kheops-gold">l'innovation</span>
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Recevez nos derniers conseils, tendances et promotions exclusives directement dans votre boîte mail.
              </motion.p>
            </div>
            
            <div className="flex-1 w-full">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-50 rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-green-600" size={30} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Merci de vous être inscrit!</h3>
                    <p className="text-green-600">Votre première newsletter arrivera bientôt.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Entrez votre adresse email"
                        className="w-full py-6 pr-36 rounded-lg bg-white shadow-sm border-gray-200 focus:ring-2 focus:ring-kheops-gold focus:border-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <motion.div
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button 
                          type="submit" 
                          className={`text-white transition-all duration-300 ${isHovering ? "bg-kheops-gold px-8" : "bg-kheops-salmon px-6"}`}
                          onMouseEnter={() => setIsHovering(true)}
                          onMouseLeave={() => setIsHovering(false)}
                        >
                          {isHovering ? (
                            <>
                              S'abonner <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" /> S'abonner
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
                      En vous inscrivant, vous acceptez notre politique de confidentialité.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
