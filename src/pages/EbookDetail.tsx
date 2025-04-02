
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import EbookImageGallery from '@/components/shop/EbookImageGallery';
import EbookTableOfContents from '@/components/shop/EbookTableOfContents';
import EbookFAQ from '@/components/shop/EbookFAQ';
import EbookAuthor from '@/components/shop/EbookAuthor';
import RelatedEbooks from '@/components/shop/RelatedEbooks';
import PriceDisplay from '@/components/shop/PriceDisplay';
import { ebooks } from '@/data/ebooks';
import { Book, Calendar, Languages, File, ChevronLeft, PanelLeftOpen, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import { formatDate } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EbookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    // Find the ebook corresponding to the ID
    const foundEbook = ebooks.find(e => e.id === id);
    setEbook(foundEbook || null);
    setActiveImageIndex(0); // Reset image index on ebook change
    setActiveTab('description'); // Reset to description tab
    
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
  
  // Prepare all images (main + additional)
  const allImages = [ebook.imageUrl, ...(ebook.images || [])].filter(Boolean);
  
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link to="/shop" className="inline-flex items-center text-kheops-salmon hover:text-kheops-gold transition-colors bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md">
              <ChevronLeft size={20} />
              <span>Retour à la boutique</span>
            </Link>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10 p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-5 lg:col-span-4"
                >
                  <div className="relative">
                    <EbookImageGallery 
                      mainImage={ebook.imageUrl} 
                      additionalImages={ebook.images}
                      title={ebook.title}
                      activeIndex={activeImageIndex}
                      onImageChange={setActiveImageIndex}
                    />
                    
                    {/* Price display moved to the details column for better mobile experience */}
                  </div>
                </motion.div>
                
                {/* Details Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:col-span-7 lg:col-span-8"
                >
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{ebook.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{ebook.subtitle}</p>
                  
                  {/* Price Display (responsive, appears here on all devices) */}
                  <div className="mb-6">
                    <PriceDisplay 
                      price={ebook.price} 
                      originalPrice={ebook.originalPrice} 
                      isOnSale={ebook.isOnSale}
                      size="lg"
                    />
                  </div>
                  
                  {/* Author section if available */}
                  {ebook.author && (
                    <EbookAuthor 
                      author={ebook.author} 
                      className="mb-6 hover:shadow-md transition-shadow"
                    />
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex items-center gap-2 text-gray-600 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Calendar size={18} className="text-kheops-gold" />
                      <span>Publié le: {formatDate(ebook.publishedDate)}</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex items-center gap-2 text-gray-600 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Book size={18} className="text-kheops-gold" />
                      <span>{ebook.pages} pages</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="flex items-center gap-2 text-gray-600 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Languages size={18} className="text-kheops-gold" />
                      <span>{ebook.language}</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="flex items-center gap-2 text-gray-600 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <File size={18} className="text-kheops-gold" />
                      <span>{ebook.format.join(", ")}</span>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="mt-6"
                  >
                    <WhatsAppButton 
                      productName={ebook.title}
                      className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg shadow-md"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Tabs Content */}
            <div className="p-6 md:p-10">
              <Tabs 
                defaultValue="description" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="w-full justify-start mb-6 bg-gray-100 p-1 overflow-x-auto flex-nowrap">
                  <TabsTrigger 
                    value="description" 
                    className="data-[state=active]:bg-white data-[state=active]:text-kheops-gold"
                    onClick={() => setActiveTab('description')}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Description
                  </TabsTrigger>
                  
                  {ebook.tableOfContents && (
                    <TabsTrigger 
                      value="contents" 
                      className="data-[state=active]:bg-white data-[state=active]:text-kheops-gold"
                      onClick={() => setActiveTab('contents')}
                    >
                      <PanelLeftOpen className="mr-2 h-4 w-4" />
                      Table des matières
                    </TabsTrigger>
                  )}
                  
                  {ebook.faq && (
                    <TabsTrigger 
                      value="faq" 
                      className="data-[state=active]:bg-white data-[state=active]:text-kheops-gold"
                      onClick={() => setActiveTab('faq')}
                    >
                      <Award className="mr-2 h-4 w-4" />
                      FAQ
                    </TabsTrigger>
                  )}
                </TabsList>
                
                <AnimatePresence mode="wait">
                  <TabsContent value="description" className="mt-0">
                    <motion.div
                      key="description"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-8">
                        <div className="prose prose-gray max-w-none">
                          {ebook.fullDescription.split('\n\n').map((paragraph, index) => (
                            <motion.p 
                              key={index} 
                              className="mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              {paragraph}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                      
                      <motion.div 
                        className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <h2 className="text-xl font-bold mb-4">Ce que vous allez apprendre</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {ebook.features.map((feature, index) => (
                            <motion.div 
                              key={index} 
                              className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                              whileHover={{ scale: 1.01, x: 3 }}
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
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                  
                  {ebook.tableOfContents && (
                    <TabsContent value="contents" className="mt-0">
                      <motion.div
                        key="contents"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <EbookTableOfContents items={ebook.tableOfContents} />
                      </motion.div>
                    </TabsContent>
                  )}
                  
                  {ebook.faq && (
                    <TabsContent value="faq" className="mt-0">
                      <motion.div
                        key="faq"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <EbookFAQ items={ebook.faq} />
                      </motion.div>
                    </TabsContent>
                  )}
                </AnimatePresence>
              </Tabs>
            </div>
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
