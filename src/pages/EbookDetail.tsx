
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import EbookImageGallery from '@/components/shop/EbookImageGallery';
import EbookTableOfContents from '@/components/shop/EbookTableOfContents';
import EbookFAQ from '@/components/shop/EbookFAQ';
import EbookAuthor from '@/components/shop/EbookAuthor';
import RelatedEbooks from '@/components/shop/RelatedEbooks';
import { ebooks } from '@/data/ebooks';
import { Book, Calendar, Languages, File, ChevronLeft, PanelLeftOpen, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import { formatDate } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EbookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  
  useEffect(() => {
    // Find the ebook corresponding to the ID
    const foundEbook = ebooks.find(e => e.id === id);
    setEbook(foundEbook || null);
    
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
              <ChevronLeft size={20} />
              <span>Retour à la boutique</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header Card */}
            <div className="bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10 p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-4"
                >
                  <div className="relative">
                    <EbookImageGallery 
                      mainImage={ebook.imageUrl} 
                      title={ebook.title}
                    />
                    <div className="absolute top-4 right-4 bg-kheops-gold text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                      {ebook.price.toLocaleString()} FCFA
                    </div>
                  </div>
                </motion.div>
                
                {/* Details Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:col-span-8"
                >
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{ebook.title}</h1>
                  <p className="text-xl text-gray-600 mb-6">{ebook.subtitle}</p>
                  
                  {/* Author section if available */}
                  {ebook.author && <EbookAuthor author={ebook.author} />}
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-600 bg-white/50 p-3 rounded-lg">
                      <Calendar size={18} className="text-kheops-gold" />
                      <span>Publié le: {formatDate(ebook.publishedDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-white/50 p-3 rounded-lg">
                      <Book size={18} className="text-kheops-gold" />
                      <span>{ebook.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-white/50 p-3 rounded-lg">
                      <Languages size={18} className="text-kheops-gold" />
                      <span>{ebook.language}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-white/50 p-3 rounded-lg">
                      <File size={18} className="text-kheops-gold" />
                      <span>{ebook.format.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <WhatsAppButton 
                      productName={ebook.title}
                      className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg shadow-md"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Tabs Content */}
            <div className="p-6 md:p-10">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start mb-6 bg-gray-100 p-1">
                  <TabsTrigger value="description" className="data-[state=active]:bg-white">
                    <FileText className="mr-2 h-4 w-4" />
                    Description
                  </TabsTrigger>
                  
                  {ebook.tableOfContents && (
                    <TabsTrigger value="contents" className="data-[state=active]:bg-white">
                      <PanelLeftOpen className="mr-2 h-4 w-4" />
                      Table des matières
                    </TabsTrigger>
                  )}
                  
                  {ebook.faq && (
                    <TabsTrigger value="faq" className="data-[state=active]:bg-white">
                      <Award className="mr-2 h-4 w-4" />
                      FAQ
                    </TabsTrigger>
                  )}
                </TabsList>
                
                <TabsContent value="description" className="mt-0">
                  <div className="mb-8">
                    <div className="prose prose-gray max-w-none">
                      {ebook.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Ce que vous allez apprendre</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {ebook.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm">
                          <div className="text-kheops-gold mt-1 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                {ebook.tableOfContents && (
                  <TabsContent value="contents" className="mt-0">
                    <EbookTableOfContents items={ebook.tableOfContents} />
                  </TabsContent>
                )}
                
                {ebook.faq && (
                  <TabsContent value="faq" className="mt-0">
                    <EbookFAQ items={ebook.faq} />
                  </TabsContent>
                )}
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
