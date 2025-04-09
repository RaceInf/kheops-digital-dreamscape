
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ChevronRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogPosts';
import { formatDate } from '@/lib/utils';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Extract unique categories
  const categories = ['Tous', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    // Filter posts based on search term and active category
    const result = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Tous' || post.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(result);
    
    // Set page title and scroll to top
    window.scrollTo(0, 0);
  }, [searchTerm, activeCategory]);

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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <>
      <Helmet>
        <title>Blog - Actualités et conseils en communication digitale | KHEOPS SET DIGITAL</title>
        <meta name="description" content="Découvrez les dernières actualités et conseils en communication digitale, marketing et technologie sur le blog de KHEOPS SET DIGITAL." />
        <meta name="keywords" content="blog, marketing digital, communication digitale, SEO, conseils digitaux, réseaux sociaux, Cameroun" />
        <meta property="og:title" content="Blog - Actualités et conseils en communication digitale" />
        <meta property="og:description" content="Découvrez les dernières actualités et conseils en communication digitale, marketing et technologie sur le blog de KHEOPS SET DIGITAL." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-kheops-lightGray to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Notre <span className="text-kheops-gold">Blog</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-24 h-1 bg-gradient-to-r from-kheops-gold to-kheops-salmon mx-auto rounded-full mb-6"
              ></motion.div>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Actualités, conseils et tendances en communication digitale au Cameroun et en Afrique
              </motion.p>
              
              {/* Search Form */}
              <motion.form 
                onSubmit={handleSearch}
                className="relative max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-kheops-gold focus:border-kheops-gold transition-all shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </motion.form>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 flex-grow">
          <div className="container mx-auto px-4">
            {/* Categories Filter */}
            <motion.div 
              className="mb-10 overflow-x-auto scrollbar-hide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex space-x-2 pb-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-kheops-gold hover:bg-kheops-salmon"
                        : "hover:text-kheops-gold hover:border-kheops-gold"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Results info */}
            <div className="flex flex-wrap justify-between items-center mb-8">
              <motion.div 
                className="text-gray-600" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <span className="font-medium">{filteredPosts.length}</span> articles trouvés
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 mt-2 sm:mt-0" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Filter size={16} className="text-gray-500" />
                <span className="text-gray-600 text-sm">Filtres:</span>
                <Badge variant="outline" className="bg-white">
                  {activeCategory}
                </Badge>
                {searchTerm && (
                  <Badge variant="outline" className="bg-white">
                    "{searchTerm}"
                  </Badge>
                )}
              </motion.div>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredPosts.map((post) => (
                  <motion.article 
                    key={post.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                    variants={itemVariants}
                  >
                    <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-kheops-gold/10 text-kheops-gold rounded-full">
                          {post.category}
                        </span>
                        <div className="text-gray-500 text-sm flex items-center">
                          <Calendar size={14} className="mr-1" /> 
                          {formatDate(post.date)}
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`} className="block mb-3">
                        <h3 className="text-xl font-bold leading-tight hover:text-kheops-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <img 
                            src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?auto=format&fit=crop&q=80&w=100" 
                            alt={post.author} 
                            className="w-8 h-8 rounded-full object-cover mr-2" 
                          />
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          <span>5 min</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold mb-2">Aucun article trouvé</h3>
                <p className="text-gray-600 mb-8">Essayez de modifier vos critères de recherche ou de revenir à tous les articles.</p>
                <Button
                  onClick={() => {setSearchTerm(''); setActiveCategory('Tous');}}
                  className="bg-kheops-gold hover:bg-kheops-salmon"
                >
                  Voir tous les articles
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-kheops-lightGray">
          <motion.div 
            className="container mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Restez informé</h3>
                  <p className="text-gray-600 mb-6">
                    Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils en communication digitale.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Votre email"
                      className="flex-grow"
                      required
                    />
                    <Button className="bg-kheops-gold hover:bg-kheops-salmon whitespace-nowrap">
                      S'inscrire
                    </Button>
                  </form>
                </div>
                <div className="hidden md:block text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400" 
                    alt="Newsletter" 
                    className="mx-auto w-full max-w-xs rounded-lg" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
