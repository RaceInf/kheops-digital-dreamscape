
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
import { Book, Calendar, Languages, File, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Ebook } from '@/types';
import { formatDate } from '@/lib/utils';

const EbookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  
  useEffect(() => {
    // Trouver l'ebook correspondant à l'ID
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
    <main className="min-h-screen w-full">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/shop" className="flex items-center text-kheops-salmon hover:text-kheops-gold transition-colors">
              <ChevronLeft size={20} />
              <span>Retour à la boutique</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="sticky top-32">
                <EbookImageGallery 
                  mainImage={ebook.imageUrl} 
                  additionalImages={ebook.images} 
                  title={ebook.title}
                />
                <div className="absolute top-4 right-4 bg-kheops-gold text-white px-4 py-2 rounded-full text-lg font-bold">
                  {ebook.price.toLocaleString()} FCFA
                </div>
              </div>
            </motion.div>
            
            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{ebook.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{ebook.subtitle}</p>
              
              {/* Author section if available */}
              {ebook.author && <EbookAuthor author={ebook.author} />}
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span>Publié le: {formatDate(ebook.publishedDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Book size={18} />
                  <span>{ebook.pages} pages</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Languages size={18} />
                  <span>{ebook.language}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <File size={18} />
                  <span>{ebook.format.join(", ")}</span>
                </div>
              </div>
              
              {/* Table of contents if available */}
              {ebook.tableOfContents && (
                <EbookTableOfContents items={ebook.tableOfContents} />
              )}
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <div className="prose prose-gray max-w-none">
                  {ebook.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Ce que vous allez apprendre</h2>
                <ul className="space-y-3">
                  {ebook.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="text-kheops-gold mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* FAQ section if available */}
              {ebook.faq && <EbookFAQ items={ebook.faq} />}
              
              <div className="mt-10">
                <WhatsAppButton 
                  productName={ebook.title}
                  className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Related ebooks section */}
          <RelatedEbooks 
            currentEbookId={ebook.id}
            currentCategory={ebook.category}
            ebooks={ebooks}
          />
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default EbookDetail;
