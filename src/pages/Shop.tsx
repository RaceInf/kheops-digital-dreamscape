
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EbookCard from '@/components/shop/EbookCard';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import { ebooks } from '@/data/ebooks';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Grid2X2, LayoutList } from 'lucide-react';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const itemsPerPage = 6;
  
  // Calculer les indices de début et de fin pour la pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEbooks = ebooks.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculer le nombre total de pages
  const totalPages = Math.ceil(ebooks.length / itemsPerPage);
  
  // Générer les numéros de page
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
    <main className="min-h-screen w-full">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-kheops-gold/10 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="text-kheops-gold">Boutique</span> d'Ebooks
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne.
            </p>
            <div className="flex justify-center">
              <WhatsAppButton className="bg-green-600 hover:bg-green-700" />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Nos Ebooks</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-kheops-gold/20' : 'bg-gray-100'}`}
              >
                <Grid2X2 size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-kheops-gold/20' : 'bg-gray-100'}`}
              >
                <LayoutList size={20} />
              </button>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEbooks.map((ebook) => (
                <EbookCard key={ebook.id} ebook={ebook} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {currentEbooks.map((ebook) => (
                <div key={ebook.id} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:border-kheops-gold transition-colors">
                  <div className="w-full md:w-1/4 aspect-[3/2] md:aspect-square overflow-hidden rounded-lg bg-gray-100">
                    {ebook.imageUrl ? (
                      <img src={ebook.imageUrl} alt={ebook.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                        <Book size={48} className="text-kheops-gold/50" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{ebook.title}</h3>
                        <span className="bg-kheops-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                          {ebook.price.toLocaleString()} FCFA
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{ebook.subtitle}</p>
                      <p className="text-gray-600 mb-4">{ebook.description}</p>
                    </div>
                    <div className="mt-auto flex gap-3">
                      <Link to={`/shop/${ebook.id}`} className="flex-1">
                        <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold">
                          Voir détails
                        </Button>
                      </Link>
                      <WhatsAppButton 
                        productName={ebook.title}
                        variant="outline"
                        className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      className="cursor-pointer"
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
                      className="cursor-pointer"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Shop;
