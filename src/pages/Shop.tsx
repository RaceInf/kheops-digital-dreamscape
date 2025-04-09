
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EbookCard from '@/components/shop/EbookCard';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import { ebooks } from '@/data/ebooks';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Book } from 'lucide-react';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-kheops-gold/5 to-white">
      <Navbar />
      
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent">
              Notre Boutique d'Ebooks
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne.
            </p>
            <div className="flex justify-center mb-12">
              <WhatsAppButton className="bg-green-600 hover:bg-green-700 animate-soft-pulse" />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {currentEbooks.length > 0 ? (
                  currentEbooks.map((ebook, index) => (
                    <motion.div
                      key={ebook.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.4 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
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
                            className="cursor-pointer"
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
          </div>
          
          {/* Featured or recommended section */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Nos Meilleures Ventes</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-kheops-gold to-kheops-salmon mx-auto rounded-full mb-3"></div>
              <p className="text-gray-600">Les ebooks les plus populaires auprès de notre communauté</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebooks.slice(0, 3).map((ebook, index) => (
                <motion.div
                  key={`featured-${ebook.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
