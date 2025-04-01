
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, ChevronRight, Clock, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

const POSTS_PER_PAGE = 6; // Reduced for better readability

// Form schema for newsletter
const newsletterSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
});

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts by category if needed
  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory)
    : blogPosts;
    
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Get popular posts (using most recent for demo)
  const popularPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  // Newsletter form
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const onSubmitNewsletter = (values: z.infer<typeof newsletterSchema>) => {
    console.log("Newsletter subscription:", values.email);
    // In a real application, you would send this to your backend
    
    toast({
      title: "Inscription réussie!",
      description: `Vous êtes inscrit à notre newsletter avec l'email: ${values.email}`,
      duration: 5000,
    });
    
    form.reset();
  };
  
  useEffect(() => {
    // Set page title
    document.title = "Blog | KHEOPS SET DIGITAL";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
    // Reset to page 1 when category changes
    if (activeCategory) {
      setCurrentPage(1);
    }
  }, [currentPage, activeCategory]);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    let pages = [];
    
    if (totalPages <= 5) {
      // If total pages is less than or equal to 5, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of page range around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Add ellipsis if there's a gap after page 1
      if (startPage > 2) {
        pages.push("ellipsis1");
      }
      
      // Add pages in range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if there's a gap before last page
      if (endPage < totalPages - 1) {
        pages.push("ellipsis2");
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10 py-16 mb-12"
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Notre <span className="text-kheops-salmon">Blog</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Découvrez nos dernières actualités, conseils et analyses sur le marketing digital, 
                l'innovation technologique et les tendances du marché.
              </p>
              
              <div className="mt-8 relative max-w-lg mx-auto">
                <Input 
                  type="text" 
                  placeholder="Rechercher un article..." 
                  className="pr-10 h-12 rounded-full bg-white shadow-sm" 
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="w-full lg:w-2/3">
              {/* Category filters - horizontal scrollable on mobile */}
              <div className="flex flex-nowrap overflow-x-auto lg:flex-wrap pb-4 mb-8 gap-2 scrollbar-none">
                <Button 
                  variant={activeCategory === null ? "default" : "outline"}
                  className={`rounded-full whitespace-nowrap ${activeCategory === null ? 'bg-kheops-salmon text-white hover:bg-kheops-salmon/90' : ''}`}
                  onClick={() => setActiveCategory(null)}
                >
                  Tous les articles
                </Button>
                
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={`rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-kheops-salmon text-white hover:bg-kheops-salmon/90' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Blog posts grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-none shadow">
                      <Link to={`/blog/${post.id}`} className="block relative h-48 w-full overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-kheops-gold/90 text-white text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </div>
                      </Link>
                      
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Clock size={14} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <CardTitle className="text-xl mb-2 line-clamp-2 hover:text-kheops-salmon transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardFooter className="pt-2 mt-auto flex justify-between items-center">
                        <div className="text-sm text-gray-600 italic">
                          Par <span className="font-medium">{post.author}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-sm font-medium text-kheops-salmon hover:underline flex items-center"
                        >
                          Lire la suite
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* Empty state when no posts */}
              {currentPosts.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-600">Aucun article trouvé</h3>
                  <p className="text-gray-500 mt-2">
                    Aucun article n'a été trouvé pour cette catégorie.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setActiveCategory(null)}
                  >
                    Voir tous les articles
                  </Button>
                </div>
              )}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => paginate(currentPage - 1)}
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    )}
                    
                    {getPageNumbers().map((page, index) => (
                      typeof page === "number" ? (
                        <PaginationItem key={index}>
                          <PaginationLink
                            isActive={page === currentPage}
                            onClick={() => paginate(page)}
                            className={`cursor-pointer ${page === currentPage ? 'bg-kheops-salmon text-white hover:bg-kheops-salmon/90' : ''}`}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => paginate(currentPage + 1)}
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              {/* About section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">À propos</h3>
                <p className="text-gray-600 mb-4">
                  Bienvenue sur le blog de KHEOPS SET DIGITAL, votre source d'informations 
                  sur le marketing digital, l'innovation et les tendances du marché.
                </p>
                <Link to="/about" className="text-kheops-salmon hover:underline flex items-center">
                  En savoir plus
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
              
              {/* Categories section */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div 
                      key={category}
                      className="flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded cursor-pointer transition-colors"
                      onClick={() => setActiveCategory(category)}
                    >
                      <div className="flex items-center">
                        <Tag size={16} className="text-kheops-gold mr-2" />
                        <span className={activeCategory === category ? "font-medium text-kheops-salmon" : ""}>{category}</span>
                      </div>
                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular posts */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Articles populaires</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-4 group">
                      <Link to={`/blog/${post.id}`} className="shrink-0 w-20 h-20 overflow-hidden rounded">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link 
                          to={`/blog/${post.id}`}
                          className="font-medium line-clamp-2 group-hover:text-kheops-salmon transition-colors"
                        >
                          {post.title}
                        </Link>
                        <span className="text-xs text-gray-500 mt-1">{formatDate(post.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter signup */}
              <div className="bg-gradient-to-r from-kheops-gold/20 to-kheops-salmon/20 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={24} className="text-kheops-salmon" />
                  <h3 className="text-xl font-bold">Newsletter</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Recevez nos derniers articles et conseils directement dans votre boîte mail.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitNewsletter)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Votre adresse email"
                              className="bg-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-kheops-salmon hover:bg-kheops-salmon/90 text-white"
                    >
                      S'inscrire
                    </Button>
                  </form>
                </Form>
                <p className="text-xs text-gray-500 mt-3">
                  En vous inscrivant, vous acceptez notre politique de confidentialité.
                </p>
              </div>
              
              {/* Tags cloud */}
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Tags populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {["Marketing", "SEO", "Digital", "E-commerce", "Réseaux sociaux", "Stratégie", 
                    "Innovation", "Web", "Design", "UX", "Tendances"].map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 hover:bg-kheops-gold/10 hover:text-kheops-gold px-3 py-1 rounded-full text-sm cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Blog;
