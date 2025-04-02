
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import EbookImageGallery from '@/components/shop/EbookImageGallery';
import InteractiveTableOfContents from '@/components/shop/InteractiveTableOfContents';
import EbookFAQ from '@/components/shop/EbookFAQ';
import EbookAuthor from '@/components/shop/EbookAuthor';
import RelatedEbooks from '@/components/shop/RelatedEbooks';
import { ebooks } from '@/data/ebooks';
import { Book, Calendar, Languages, File, ChevronLeft, PanelLeftOpen, Award, FileText, Download, Shield, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import { formatDate } from '@/lib/utils';
import { formatPrice } from '@/lib/currency';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const EbookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    // Find the ebook corresponding to the ID
    const foundEbook = ebooks.find(e => e.id === id);
    setEbook(foundEbook || null);
    
    // Reset active image index
    setActiveImageIndex(0);
    
    // Set page title
    document.title = foundEbook ? `${foundEbook.title} - KHEOPS SET DIGITAL` : "Ebook - KHEOPS SET DIGITAL";
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!ebook) {
    return (
      <main className="min-h-screen w-full">
        <Navbar />
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Ebook non trouvé</h1>
          <p className="mb-8">Désolé, l'ebook que vous recherchez n'existe pas.</p>
          <Link to="/shop">
            <Button>Retourner à la boutique</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
  
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/shop" className="inline-flex items-center text-kheops-salmon hover:text-kheops-gold transition-colors bg-white px-4 py-2 rounded-md shadow-sm">
              <ChevronLeft size={20} className="mr-1" />
              <span>Retour à la boutique</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Column - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 bg-white rounded-xl shadow-md overflow-hidden p-6"
            >
              <div className="relative mb-6">
                <EbookImageGallery 
                  mainImage={ebook.imageUrl} 
                  additionalImages={ebook.images || []}
                  title={ebook.title}
                  activeIndex={activeImageIndex}
                  onImageChange={setActiveImageIndex}
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-kheops-gold to-kheops-salmon text-white px-5 py-2.5 rounded-full text-lg font-bold shadow-lg"
                >
                  {formatPrice(ebook.price)}
                </motion.div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <WhatsAppButton 
                  productName={ebook.title}
                  className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg shadow-md"
                />
                
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-kheops-gold" />
                    Garanties
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Paiement sécurisé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Livraison instantanée par email</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Satisfaction garantie ou remboursé pendant 14 jours</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <Download className="w-5 h-5 mr-2 text-kheops-gold" />
                    Livraison
                  </h3>
                  <p className="text-sm text-gray-600">
                    Après votre achat, vous recevrez un email contenant un lien de téléchargement
                    pour accéder à votre ebook dans les formats suivants: {ebook.format.join(', ')}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8 mb-8">
                <Badge className="bg-kheops-salmon mb-4">{ebook.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{ebook.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{ebook.subtitle}</p>
                
                {/* Author section if available */}
                {ebook.author && <EbookAuthor author={ebook.author} className="mb-6" />}
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <Calendar size={18} className="text-kheops-gold" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Date</span>
                      <span className="text-sm">{formatDate(ebook.publishedDate)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <Book size={18} className="text-kheops-gold" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Pages</span>
                      <span className="text-sm">{ebook.pages}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <Languages size={18} className="text-kheops-gold" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Langue</span>
                      <span className="text-sm">{ebook.language}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <File size={18} className="text-kheops-gold" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Format</span>
                      <span className="text-sm">{ebook.format.join(", ")}</span>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none mb-6">
                  <p className="text-lg text-gray-700 bg-gray-50 p-4 rounded-lg border-l-4 border-kheops-gold italic">
                    {ebook.description}
                  </p>
                </div>
                
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-kheops-gold" />
                    Ce que vous allez apprendre
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ebook.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="text-kheops-gold mt-1 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Content Tabs */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full flex bg-gray-100/70 p-1 border-b">
                <TabsTrigger value="description" className="flex-1 data-[state=active]:bg-white">
                  <FileText className="mr-2 h-4 w-4" />
                  Description complète
                </TabsTrigger>
                
                {ebook.tableOfContents && (
                  <TabsTrigger value="contents" className="flex-1 data-[state=active]:bg-white">
                    <PanelLeftOpen className="mr-2 h-4 w-4" />
                    Table des matières
                  </TabsTrigger>
                )}
                
                {ebook.faq && (
                  <TabsTrigger value="faq" className="flex-1 data-[state=active]:bg-white">
                    <Award className="mr-2 h-4 w-4" />
                    FAQ
                  </TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="description" className="p-6 md:p-8">
                <div className="prose prose-gray max-w-none">
                  {ebook.fullDescription.split('\n\n').map((paragraph, index) => (
                    <motion.p 
                      key={index} 
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </TabsContent>
              
              {ebook.tableOfContents && (
                <TabsContent value="contents" className="p-6 md:p-8">
                  <InteractiveTableOfContents items={ebook.tableOfContents} />
                </TabsContent>
              )}
              
              {ebook.faq && (
                <TabsContent value="faq" className="p-6 md:p-8">
                  <EbookFAQ items={ebook.faq} />
                </TabsContent>
              )}
            </Tabs>
          </div>
          
          {/* Call to action */}
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10 rounded-xl p-8 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à améliorer vos compétences ?</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Téléchargez maintenant "{ebook.title}" et commencez votre parcours vers la maîtrise du {ebook.category}.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="text-2xl font-bold">{formatPrice(ebook.price)}</div>
                <WhatsAppButton 
                  productName={ebook.title}
                  className="bg-green-600 hover:bg-green-700 py-3 px-8 text-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Related ebooks section */}
          <div className="mt-12">
            <RelatedEbooks 
              currentEbookId={ebook.id}
              currentCategory={ebook.category}
              ebooks={ebooks}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default EbookDetail;
