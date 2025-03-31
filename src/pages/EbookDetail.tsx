
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import ImageLightbox from '@/components/shop/ImageLightbox';
import { ebooks } from '@/data/ebooks';
import { Ebook } from '@/types';
import { formatDate } from '@/lib/utils';
import { 
  Book, 
  Calendar, 
  Languages, 
  File, 
  ChevronLeft, 
  ZoomIn, 
  ChevronDown, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EbookCard from '@/components/shop/EbookCard';

const EbookDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [relatedEbooks, setRelatedEbooks] = useState<Ebook[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [tocVisible, setTocVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Trouver l'ebook correspondant au slug
    const foundEbook = ebooks.find(e => e.slug === slug);
    
    if (foundEbook) {
      setEbook(foundEbook);
      
      // Set page title
      document.title = `${foundEbook.title} - KHEOPS SET DIGITAL`;
      
      // Find related ebooks (same category, exclude current)
      const related = ebooks
        .filter(e => e.category === foundEbook.category && e.id !== foundEbook.id)
        .slice(0, 3);
      setRelatedEbooks(related);
    } else {
      // If ebook not found, check if it might be an old ID-based URL
      const ebookByOldId = ebooks.find(e => e.id === slug);
      if (ebookByOldId) {
        // Redirect to new slug-based URL
        navigate(`/shop/${ebookByOldId.slug}`, { replace: true });
        return;
      }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  const scrollToSection = (anchor: string) => {
    if (contentRef.current) {
      const element = document.getElementById(anchor);
      if (element) {
        const yOffset = -100; // Adjust based on header height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };
  
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
              <div className="sticky top-32 aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-kheops-gold/20 bg-gray-100 shadow-lg">
                <div className="relative h-full w-full cursor-pointer group" onClick={() => setIsLightboxOpen(true)}>
                  {ebook.imageUrl ? (
                    <>
                      <img 
                        src={ebook.imageUrl} 
                        alt={ebook.title} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                        <div className="bg-white/80 p-3 rounded-full">
                          <ZoomIn size={24} className="text-gray-900" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                        <div className="text-white/10 text-8xl font-bold rotate-[-30deg]">
                          EXEMPLE
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                      <Book size={100} className="text-kheops-gold/50" />
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-kheops-gold text-white px-4 py-2 rounded-full text-lg font-bold">
                  {ebook.price.toLocaleString()} FCFA
                </div>
              </div>
              
              {/* Image lightbox */}
              <ImageLightbox 
                imageUrl={ebook.imageUrl} 
                alt={ebook.title}
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
              />
            </motion.div>
            
            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{ebook.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{ebook.subtitle}</p>
              
              {/* Author information */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <img 
                  src={ebook.author.avatar} 
                  alt={ebook.author.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-kheops-gold/30"
                />
                <div>
                  <h3 className="font-bold text-lg">{ebook.author.name}</h3>
                  <p className="text-gray-600 italic">{ebook.author.title}</p>
                </div>
              </div>
              
              {/* Book details */}
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
              
              {/* Table of Contents Toggle */}
              <div className="mb-8 border rounded-lg overflow-hidden">
                <button
                  onClick={() => setTocVisible(!tocVisible)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 text-left font-medium hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Book size={18} />
                    <span>Voir le sommaire ({ebook.tableOfContents.length} chapitres)</span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${tocVisible ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {tocVisible && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <ol className="mt-4 pl-8 list-decimal space-y-2">
                        {ebook.tableOfContents.map((item, index) => (
                          <li key={index}>
                            <button
                              onClick={() => scrollToSection(item.anchor)}
                              className="text-kheops-salmon hover:text-kheops-gold hover:underline transition-colors text-left"
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="mt-10">
                <WhatsAppButton 
                  productName={ebook.title}
                  className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Content Section with Tabs */}
          <div className="mt-16" ref={contentRef}>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start mb-6 bg-transparent border-b">
                <TabsTrigger value="description" className="data-[state=active]:border-b-2 data-[state=active]:border-kheops-gold rounded-none">
                  Description
                </TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:border-b-2 data-[state=active]:border-kheops-gold rounded-none">
                  FAQ
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <div className="prose prose-gray max-w-none">
                  {ebook.tableOfContents.map((section, index) => (
                    <div key={index} id={section.anchor} className="mb-12 scroll-mt-32">
                      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">
                        {section.title}
                      </h2>
                      <p className="mb-4">
                        {/* Content would come from the actual ebook sections - using the full description for demo */}
                        {ebook.fullDescription.split('\n\n')[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-6">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {ebook.faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                        <AccordionTrigger className="text-lg py-4 hover:no-underline hover:text-kheops-gold">
                          <div className="flex items-center gap-2 text-left">
                            <span className="text-kheops-salmon">❔</span> 
                            {item.question}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pl-7">
                          <p>{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  
                  <div className="mt-8 flex justify-center">
                    <Link to="/contact">
                      <Button className="flex items-center gap-2">
                        <MessageCircle size={18} /> 
                        <span>Poser une question</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* You might also like section */}
          {relatedEbooks.length > 0 && (
            <section className="mt-16 pt-12 border-t">
              <h2 className="text-2xl font-bold mb-8">Vous aimerez aussi</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedEbooks.map((relatedEbook) => (
                  <EbookCard key={relatedEbook.id} ebook={relatedEbook} />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default EbookDetail;
