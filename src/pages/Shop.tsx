
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EbookCard from '@/components/shop/EbookCard';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import { ebooks } from '@/data/ebooks';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Book, ChevronRight } from 'lucide-react';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const itemsPerPage = 6;
  
  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEbooks = ebooks.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate the number of pages
  const totalPages = Math.ceil(ebooks.length / itemsPerPage);
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  useEffect(() => {
    // Set page title
    document.title = "Boutique - KHEOPS SET DIGITAL";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set loaded state after a small delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-white to-kheops-lightGray/30">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-kheops-gold/10 mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-kheops-salmon/10 mix-blend-multiply blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-kheops-gold/10 text-kheops-gold rounded-full text-sm font-medium tracking-wide">
                RESSOURCES DIGITALES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">
              Notre Boutique d'Ebooks
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne.
            </p>
            <div className="flex justify-center mb-12">
              <WhatsAppButton className="bg-green-600 hover:bg-green-700 animate-soft-pulse shadow-lg" />
            </div>
          </motion.div>
          
          {/* Breadcrumb */}
          <motion.div 
            className="flex items-center justify-center text-sm text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/" className="hover:text-kheops-gold transition-colors">Accueil</Link>
            <ChevronRight className="mx-2" size={14} />
            <span className="text-gray-800 font-medium">Boutique</span>
          </motion.div>
        </div>
      </section>
      
      {/* Products section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 md:p-8">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
              >
                {currentEbooks.length > 0 ? (
                  currentEbooks.map((ebook) => (
                    <motion.div
                      key={ebook.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <EbookCard 
                        ebook={ebook} 
                        truncateTitle={true}
                      />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-3 p-12 text-center"
                  >
                    <Book size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Aucun ebook trouvé</h3>
                    <p className="text-gray-500">Revenez bientôt pour découvrir nos nouveaux ebooks</p>
                  </motion.div>
                )}
              </motion.div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12"
                >
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            className="cursor-pointer hover:bg-kheops-gold/10 hover:text-kheops-gold transition-colors"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                          />
                        </PaginationItem>
                      )}
                      
                      {pageNumbers.map(number => (
                        <PaginationItem key={number}>
                          <PaginationLink 
                            isActive={currentPage === number}
                            className={`cursor-pointer ${currentPage === number ? 'bg-kheops-gold border-kheops-gold text-white hover:bg-kheops-gold hover:text-white' : ''}`}
                            onClick={() => setCurrentPage(number)}
                          >
                            {number}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext 
                            className="cursor-pointer hover:bg-kheops-gold/10 hover:text-kheops-gold transition-colors"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Featured or recommended section */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-kheops-salmon/10 text-kheops-salmon rounded-full text-sm font-medium tracking-wide mb-4">
                RECOMMANDATIONS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos Meilleures Ventes</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-kheops-gold to-kheops-salmon mx-auto rounded-full mb-3"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Les ebooks les plus populaires auprès de notre communauté</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.slice(0, 3).map((ebook, index) => (
                <motion.div
                  key={`featured-${ebook.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="h-full"
                >
                  <EbookCard ebook={ebook} truncateTitle={true} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Shop;
