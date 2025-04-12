
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Book, Check, ChevronDown, FileText, MessageCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { ebooks } from '@/data/ebooks';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: "Comment puis-je accéder à mes e-books après l'achat ?",
    answer: "Dès que votre paiement est confirmé, vous recevrez un email avec un lien de téléchargement sécurisé. Vos e-books seront disponibles en quelques clics, prêts à être dévorés !"
  },
  {
    question: "Dans quels formats sont disponibles les e-books ?",
    answer: "Nos e-books sont disponibles en PDF et certains en format EPUB pour une lecture optimale sur tous vos appareils."
  },
  {
    question: "Les e-books sont-ils compatibles avec tous les appareils ?",
    answer: "Absolument ! Nos e-books sont au format PDF, compatible avec les smartphones, tablettes, ordinateurs et liseuses. Vous pouvez les consulter où et quand vous voulez."
  },
  {
    question: "Puis-je partager mes e-books avec d'autres personnes ?",
    answer: "Nos e-books sont destinés à un usage personnel. Si vous souhaitez les partager, nous vous invitons à encourager vos proches à se les procurer directement. Cela nous aide à continuer à créer du contenu de qualité !"
  },
  {
    question: "Comment puis-vous garantir la qualité de vos e-books ?",
    answer: "Nos e-books sont rédigés par des experts passionnés, relus et optimisés pour vous offrir une valeur exceptionnelle. Ils sont conçus pour être pratiques, inspirants et faciles à appliquer. La qualité, c'est notre signature."
  },
  {
    question: "Que faire si je n'arrive pas à télécharger mes e-books ?",
    answer: "Aucun souci ! Contactez-nous via WhatsApp ou par email, et nous vous enverrons rapidement une solution pour accéder à vos e-books. Votre confort est notre priorité."
  }
];

const Shop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>E-books & Ressources - KHEOPS SET DIGITAL</title>
        <meta name="description" content="Développez vos compétences avec nos guides et ressources premium - KHEOPS SET DIGITAL" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pb-12">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 border-b border-gray-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                E-books & <span className="text-gradient">Ressources</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Développez vos compétences avec nos guides et ressources premium
                pour maîtriser les stratégies digitales qui transforment votre business
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <WhatsAppButton 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full" 
                  variant="default"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Ebooks Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Nos <span className="text-gradient">Publications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.map((ebook) => (
                <motion.div
                  key={ebook.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-kheops-gold/10 transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={ebook.imageUrl || '/placeholder.svg'} 
                      alt={ebook.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 border-none">
                        {ebook.format ? ebook.format[0] : 'PDF'}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{ebook.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{ebook.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-kheops-gold" />
                        <span className="text-gray-300">{ebook.pages} pages</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {(ebook.features || []).slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-kheops-gold flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        {ebook.isOnSale && ebook.originalPrice ? (
                          <span className="text-gray-400 line-through">{(ebook.originalPrice / 100).toFixed(2)}€</span>
                        ) : null}
                        <span className="text-2xl font-bold text-kheops-gold ml-2">{(ebook.price / 100).toFixed(2)}€</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Prix HT
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Link 
                        to={`/shop/${ebook.id}`}
                        className="block text-center bg-kheops-gold hover:bg-kheops-salmon text-gray-900 font-medium py-3 rounded-lg transition-colors"
                      >
                        En savoir plus
                      </Link>
                      
                      <WhatsAppButton 
                        productName={ebook.title} 
                        className="w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white" 
                        variant="outline"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Questions Fréquentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Collapsible key={index} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden">
                  <CollapsibleTrigger className="flex items-center justify-between p-6 w-full text-left">
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-kheops-gold transition-transform ui-open:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
      
      <style jsx>{`
        .text-gradient {
          @apply bg-clip-text text-transparent bg-gradient-to-r from-kheops-gold to-kheops-salmon;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.1) 1px, transparent 0);
          background-size: 40px 40px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .transform {
            transform: none !important;
          }
          .transition-all,
          .transition-transform,
          .transition-colors {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Shop;
