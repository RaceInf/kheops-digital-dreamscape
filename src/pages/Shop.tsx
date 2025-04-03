
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EbookCard from '@/components/shop/EbookCard';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import { ebooks } from '@/data/ebooks';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Grid2X2, LayoutList, Book, Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 6;
  
  // Extract unique categories
  const categories = Array.from(new Set(ebooks.map(ebook => ebook.category)));
  
  // Filter ebooks based on search query and category
  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = searchQuery === '' || 
      ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ebook.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || ebook.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEbooks = filteredEbooks.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate the number of pages
  const totalPages = Math.ceil(filteredEbooks.length / itemsPerPage);
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);
  
  useEffect(() => {
    // Set page title
    document.title = "Boutique - KHEOPS SET DIGITAL";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory(null);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white via-kheops-gold/5 to-white">
      <Navbar />
      
      <section className="pt-32 pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-kheops-gold to-kheops-salmon bg-clip-text text-transparent animate-gradient-animation">
              Notre Boutique d'Ebooks
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne.
            </p>
            <div className="flex justify-center mb-6">
              <WhatsAppButton className="bg-green-600 hover:bg-green-700 animate-soft-pulse" />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-16">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10">
                <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-gray-200 rounded-md w-full"
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile filter toggle */}
                  <div className="md:hidden w-full">
                    <Button 
                      variant="outline" 
                      className="w-full flex justify-between items-center"
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                      <span>Filtrer par catégorie</span>
                      <SlidersHorizontal size={16} />
                    </Button>
                  </div>
                  
                  {/* Desktop categories */}
                  <div className="hidden md:block">
                    <TabsList className="bg-white/50 p-1">
                      <TabsTrigger 
                        value="all" 
                        onClick={() => setActiveCategory(null)}
                        className={`${!activeCategory ? 'bg-kheops-gold/20 text-kheops-gold' : ''}`}
                      >
                        Tous
                      </TabsTrigger>
                      {categories.map(category => (
                        <TabsTrigger 
                          key={category} 
                          value={category}
                          onClick={() => setActiveCategory(category)}
                          className={`${activeCategory === category ? 'bg-kheops-gold/20 text-kheops-gold' : ''}`}
                        >
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-auto">
                  {(searchQuery || activeCategory) && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Effacer les filtres
                    </Button>
                  )}
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-md">
                    <button 
                      onClick={() => setViewMode('grid')} 
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                      aria-label="Vue en grille"
                    >
                      <Grid2X2 size={18} />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')} 
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                      aria-label="Vue en liste"
                    >
                      <LayoutList size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile category filter */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden px-4 pb-4"
                  >
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Button 
                        variant={activeCategory === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(null)}
                        className={`${!activeCategory ? 'bg-kheops-gold hover:bg-kheops-salmon' : ''}`}
                      >
                        Tous
                      </Button>
                      {categories.map(category => (
                        <Button 
                          key={category}
                          variant={activeCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveCategory(category)}
                          className={`${activeCategory === category ? 'bg-kheops-gold hover:bg-kheops-salmon' : ''}`}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <TabsContent value="all" className="p-0">
                {/* Results info */}
                <div className="px-6 py-3 border-b border-gray-100 flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {filteredEbooks.length} ebook{filteredEbooks.length !== 1 ? 's' : ''} trouvé{filteredEbooks.length !== 1 ? 's' : ''}
                  </span>
                  {activeCategory && (
                    <Badge variant="outline" className="bg-kheops-gold/10 text-kheops-gold border-kheops-gold/30">
                      {activeCategory}
                    </Badge>
                  )}
                </div>
                
                {/* No results message */}
                {filteredEbooks.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-12 text-center"
                  >
                    <Book size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Aucun ebook trouvé</h3>
                    <p className="text-gray-500 mb-4">Essayez de modifier vos critères de recherche</p>
                    <Button onClick={clearFilters}>Réinitialiser les filtres</Button>
                  </motion.div>
                )}
                
                {/* Ebooks grid */}
                {filteredEbooks.length > 0 && (
                  <div className="p-6">
                    {viewMode === 'grid' ? (
                      <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                        {currentEbooks.map((ebook, index) => (
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
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="space-y-6"
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
                        {currentEbooks.map((ebook) => (
                          <motion.div 
                            key={ebook.id}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row gap-4 p-4 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-gray-50 border border-gray-100 group"
                          >
                            <div className="w-full md:w-1/4 lg:w-1/5 aspect-[3/2] md:aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:shadow-md transition-all duration-300">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                              >
                                {ebook.imageUrl ? (
                                  <img src={ebook.imageUrl} alt={ebook.title} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                                    <Book size={48} className="text-kheops-gold/50" />
                                  </div>
                                )}
                              </motion.div>
                              {ebook.isOnSale && ebook.originalPrice && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md transform rotate-[-5deg]">
                                  PROMO
                                </div>
                              )}
                            </div>
                            <div className="flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h3 className="text-xl font-bold group-hover:text-kheops-gold transition-colors duration-300">{ebook.title}</h3>
                                  <span className="bg-gradient-to-r from-kheops-gold to-kheops-salmon text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                                    {ebook.price.toLocaleString()} FCFA
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-2">{ebook.subtitle}</p>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="outline" className="bg-kheops-gold/10 text-kheops-gold border-none">
                                    {ebook.category}
                                  </Badge>
                                  <Badge variant="outline" className="bg-gray-100 text-gray-600 border-none">
                                    {ebook.pages} pages
                                  </Badge>
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-2">{ebook.description}</p>
                              </div>
                              <div className="mt-auto flex gap-3">
                                <Link to={`/shop/${ebook.id}`} className="flex-1">
                                  <Button className="w-full bg-kheops-salmon hover:bg-kheops-gold transition-colors">
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
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Pagination className="mt-12">
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
                )}
              </TabsContent>
              
              {/* These TabsContent elements are not actually rendered, they just trigger state changes */}
              {categories.map(category => (
                <TabsContent key={category} value={category} className="p-0" />
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Shop;
