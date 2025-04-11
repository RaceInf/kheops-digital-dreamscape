
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EbookCard from '@/components/shop/EbookCard';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import ShopCategories from '@/components/shop/ShopCategories';
import ShopHero from '@/components/shop/ShopHero';
import FeaturedEbooks from '@/components/shop/FeaturedEbooks';
import { ebooks } from '@/data/ebooks';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Book, Search, Filter, X, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const itemsPerPage = 6;

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(ebooks.map(ebook => ebook.category.toLowerCase())))];
  
  // Filter ebooks by search and category
  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = 
      searchTerm === '' || 
      ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ebook.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ebook.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || ebook.category.toLowerCase() === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort ebooks
  const sortedEbooks = [...filteredEbooks].sort((a, b) => {
    switch(sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      default:
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    }
  });
  
  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEbooks = sortedEbooks.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate the number of pages
  const totalPages = Math.ceil(sortedEbooks.length / itemsPerPage);
  
  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Get featured ebooks - take the ones that are on sale
  const featuredEbooks = ebooks.filter(ebook => ebook.isOnSale).slice(0, 3);
  
  useEffect(() => {
    // Set page title for SEO
    document.title = "Boutique d'Ebooks - KHEOPS SET DIGITAL";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Listen for scroll to show back-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Reset pagination when filters change
    setCurrentPage(1);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchTerm, categoryFilter, sortOption]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Recherche effectuée",
      description: searchTerm ? `Résultats pour: "${searchTerm}"` : "Affichage de tous les ebooks",
    });
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('all');
    setSortOption('newest');
    toast({
      description: "Filtres réinitialisés",
    });
  };

  return (
    <>
      <Helmet>
        <title>Boutique d'Ebooks - KHEOPS SET DIGITAL</title>
        <meta name="description" content="Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne." />
        <meta name="keywords" content="ebook, marketing digital, communication digitale, stratégie digitale, formation" />
        <link rel="canonical" href="https://kheops-set-digital.com/shop" />
      </Helmet>
      
      <main className="min-h-screen w-full bg-gradient-to-b from-white via-gray-50 to-white">
        <Navbar />
        
        <ShopHero />
        
        {/* Featured Ebooks Section */}
        <FeaturedEbooks ebooks={featuredEbooks} />
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-10"
            >
              <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-6">
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Notre Catalogue d'Ebooks
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {filteredEbooks.length} {filteredEbooks.length > 1 ? 'ebooks disponibles' : 'ebook disponible'}
                    </p>
                  </div>
                  
                  <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                    <form onSubmit={handleSearchSubmit} className="relative flex-grow">
                      <Input
                        type="text"
                        placeholder="Rechercher un ebook..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pr-10 border-gray-200 focus:border-kheops-gold"
                      />
                      <Button 
                        type="submit"
                        size="icon"
                        variant="ghost"
                        className="absolute right-0 top-0 h-full text-gray-400 hover:text-kheops-gold"
                      >
                        <Search size={18} />
                      </Button>
                    </form>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="border-gray-200 text-gray-600 hover:text-kheops-gold"
                        onClick={() => setShowFilters(!showFilters)}
                      >
                        <Filter size={18} className="mr-2" />
                        Filtres
                      </Button>
                    </div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 border-t border-gray-100">
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex-grow min-w-[200px] max-w-xs">
                            <p className="text-sm font-medium mb-1 text-gray-700">Catégorie</p>
                            <Select 
                              value={categoryFilter} 
                              onValueChange={setCategoryFilter}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Toutes les catégories" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem 
                                    key={category} 
                                    value={category}
                                    className="capitalize"
                                  >
                                    {category === 'all' ? 'Toutes les catégories' : category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="flex-grow min-w-[200px] max-w-xs">
                            <p className="text-sm font-medium mb-1 text-gray-700">Trier par</p>
                            <Select 
                              value={sortOption} 
                              onValueChange={setSortOption}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Plus récent" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="newest">Plus récent</SelectItem>
                                <SelectItem value="price-asc">Prix croissant</SelectItem>
                                <SelectItem value="price-desc">Prix décroissant</SelectItem>
                                <SelectItem value="title-asc">Titre (A-Z)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="ml-auto">
                            <Button 
                              variant="ghost" 
                              className="text-gray-500 hover:text-kheops-gold"
                              onClick={resetFilters}
                            >
                              <X size={16} className="mr-2" />
                              Réinitialiser
                            </Button>
                          </div>
                        </div>
                        
                        {categoryFilter !== 'all' && (
                          <div className="mt-4 flex gap-2 flex-wrap">
                            <p className="text-sm text-gray-500">Filtres actifs:</p>
                            <Badge 
                              variant="secondary"
                              className="bg-kheops-gold/10 text-kheops-gold hover:bg-kheops-gold/20 capitalize"
                            >
                              {categoryFilter}
                              <X 
                                size={14} 
                                className="ml-1 cursor-pointer" 
                                onClick={() => setCategoryFilter('all')}
                              />
                            </Badge>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-6 md:p-8">
                {/* Category navigation desktop */}
                <ShopCategories 
                  categories={categories} 
                  activeCategory={categoryFilter}
                  onSelectCategory={setCategoryFilter}
                />
                
                {/* Ebooks Grid */}
                {currentEbooks.length > 0 ? (
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
                    {currentEbooks.map((ebook) => (
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100">
                      <Book size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Aucun ebook trouvé</h3>
                    <p className="text-gray-500 mb-6">Aucun résultat ne correspond à votre recherche</p>
                    <Button 
                      variant="outline" 
                      className="border-gray-300"
                      onClick={resetFilters}
                    >
                      Réinitialiser les filtres
                    </Button>
                  </motion.div>
                )}
                
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
                              className={`cursor-pointer ${currentPage === number ? 'bg-kheops-gold text-white hover:bg-kheops-gold/90' : ''}`}
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
            
            {/* Call to action section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-kheops-gold to-kheops-salmon rounded-xl overflow-hidden shadow-lg"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous cherchez une expertise sur mesure?</h2>
                  <p className="mb-6 max-w-2xl opacity-90">Notre équipe de professionnels est prête à vous accompagner dans vos projets de communication digitale</p>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="bg-white text-kheops-salmon hover:bg-gray-100 font-medium shadow-md">
                      Contactez-nous
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block h-full">
                  <div className="h-full w-full bg-[url('/placeholder.svg')] bg-cover bg-center opacity-25"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* WhatsApp floating button */}
        <div className="fixed bottom-8 right-8 z-40">
          <WhatsAppButton className="bg-green-600 hover:bg-green-700 shadow-lg" />
        </div>
        
        {/* Back to top button */}
        <AnimatePresence>
          {isScrolled && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-8 z-40 bg-kheops-gold text-white p-3 rounded-full shadow-lg hover:bg-kheops-salmon transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <Footer />
      </main>
    </>
  );
};

export default Shop;
