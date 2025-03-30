
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  useEffect(() => {
    // Set page title
    document.title = "Blog | KHEOPS SET DIGITAL";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

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
    <main className="min-h-screen w-full">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-gradient-to-b from-white to-kheops-lightGray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Notre <span className="text-kheops-salmon">Blog</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Découvrez nos dernières actualités, conseils et analyses sur le marketing digital, 
                l'innovation technologique et les tendances du marché.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs bg-kheops-gold/20 text-kheops-gold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2 line-clamp-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-kheops-salmon transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/blog/${post.id}`} className="block relative h-48 w-full overflow-hidden rounded-md">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="text-sm text-gray-600">
                        Par <span className="font-medium">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-sm font-medium text-kheops-salmon hover:underline"
                      >
                        Lire la suite
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination>
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
                        className="cursor-pointer"
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
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Blog;
