
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Find the post with the matching ID
    const currentPost = blogPosts.find(post => post.id === id) || null;
    setPost(currentPost);
    
    // Set page title
    if (currentPost) {
      document.title = `${currentPost.title} | KHEOPS SET DIGITAL`;
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.id !== id && p.category === currentPost.category)
        .slice(0, 3);
      setRelatedPosts(related);
    } else {
      document.title = "Article non trouvé | KHEOPS SET DIGITAL";
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <main className="min-h-screen w-full">
        <Navbar />
        <div className="pt-32 pb-20 container-custom">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
            <p className="mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
            <Button asChild>
              <Link to="/blog">Retour au blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      
      <article className="pt-32 pb-20 bg-gradient-to-b from-white to-kheops-lightGray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Button 
              variant="ghost" 
              size="sm" 
              asChild 
              className="mb-6 hover:bg-transparent hover:text-kheops-salmon"
            >
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Retour au blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-kheops-gold/20 text-kheops-gold px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {formatDate(post.date)}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center text-gray-600 font-semibold mr-3">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">Par {post.author}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8 rounded-lg overflow-hidden h-64 md:h-96">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <Separator className="mb-8" />
                <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <Link to={`/blog/${relatedPost.id}`}>
                          <div className="mb-3 h-40 rounded overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-semibold mb-2 hover:text-kheops-salmon line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-500">
                          {formatDate(relatedPost.date)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default BlogPostPage;
