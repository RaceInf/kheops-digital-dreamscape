
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowLeft, 
  Share2, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  MessageSquare, 
  Bookmark, 
  ChevronRight,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [estimatedReadingTime, setEstimatedReadingTime] = useState("5 min");
  const { toast } = useToast();
  
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
      
      // Calculate reading time (rough estimate)
      const wordCount = currentPost.content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
      setEstimatedReadingTime(`${readingTime} min`);
    } else {
      document.title = "Article non trouvé | KHEOPS SET DIGITAL";
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Lien copié",
        description: "Le lien de l'article a été copié dans le presse-papier",
        duration: 3000,
      });
    }
  };
  
  const handleBookmark = () => {
    toast({
      title: "Article sauvegardé",
      description: "L'article a été ajouté à vos favoris",
      duration: 3000,
    });
  };

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
      
      <article className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1200px] mx-auto">
            {/* Main content - 8 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
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
              
              {/* Article header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-kheops-gold/20 text-kheops-gold border-kheops-gold/30 hover:bg-kheops-gold/30">
                    {post.category}
                  </Badge>
                  
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 hover:bg-gray-200 transition-colors">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-kheops-gold/20">
                      <AvatarImage src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                      <AvatarFallback className="bg-kheops-gold/20 text-kheops-gold">
                        {post.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-gray-500">Expert Kheops</p>
                    </div>
                  </div>
                  
                  <Separator orientation="vertical" className="hidden md:block h-6" />
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {estimatedReadingTime} de lecture
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Eye size={14} />
                      {Math.floor(Math.random() * 900) + 100} vues
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Featured image */}
              <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              {/* Article content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Article footer */}
              <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">
                    Partagez cet article avec vos amis
                  </div>
                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handleShare} 
                            className="rounded-full bg-white"
                          >
                            <Share2 size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Partager l'article</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handleBookmark} 
                            className="rounded-full bg-white"
                          >
                            <Bookmark size={16} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Sauvegarder l'article</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              
              {/* Author box */}
              <div className="mb-10 p-6 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                  <Avatar className="h-20 w-20 border-2 border-kheops-gold/20">
                    <AvatarImage src={`https://i.pravatar.cc/200?u=${post.author}`} alt={post.author} />
                    <AvatarFallback className="bg-kheops-gold/20 text-kheops-gold text-xl">
                      {post.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">À propos de {post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Expert en marketing digital chez KHEOPS SET DIGITAL avec plus de 10 ans d'expérience dans le domaine. 
                      Spécialisé dans les stratégies de croissance pour les entreprises africaines.
                    </p>
                    <Button variant="outline" size="sm" className="text-kheops-salmon border-kheops-salmon hover:bg-kheops-salmon/10">
                      Voir tous ses articles
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Comments section placeholder */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare size={24} />
                  Commentaires
                </h3>
                
                <div className="p-8 bg-gray-50 rounded-lg text-center">
                  <p className="text-gray-500 mb-4">Connectez-vous pour laisser un commentaire</p>
                  <Button>Se connecter</Button>
                </div>
              </div>
              
              {/* Related articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    Articles similaires
                    <Badge className="ml-2 bg-kheops-salmon">{relatedPosts.length}</Badge>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.id} className="group overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300">
                        <Link to={`/blog/${relatedPost.id}`} className="block">
                          <div className="relative h-40 overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge variant="outline" className="bg-kheops-gold/80 text-white border-none">
                                {relatedPost.category}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-500 mb-2">
                              {formatDate(relatedPost.date)}
                            </p>
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-kheops-salmon transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center text-kheops-salmon text-sm font-medium">
                              Lire la suite
                              <ChevronRight size={16} className="ml-1" />
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            
            {/* Sidebar - 4 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 space-y-8"
            >
              {/* Table of contents */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-32">
                <h3 className="text-xl font-bold mb-4">Sommaire</h3>
                <nav className="space-y-2">
                  {["Introduction", "Pourquoi c'est important", "Les stratégies efficaces", "Études de cas", "Outils recommandés", "Conclusion"].map((section, index) => (
                    <a 
                      href={`#section-${index+1}`} 
                      key={index}
                      className="block py-2 px-3 text-gray-600 hover:bg-gray-50 hover:text-kheops-salmon rounded-md transition-colors"
                    >
                      {section}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Popular posts */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Articles populaires</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((popularPost) => (
                    <div key={popularPost.id} className="flex gap-3 group">
                      <Link to={`/blog/${popularPost.id}`} className="shrink-0 w-20 h-20 overflow-hidden rounded">
                        <img 
                          src={popularPost.image} 
                          alt={popularPost.title}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link 
                          to={`/blog/${popularPost.id}`}
                          className="font-medium line-clamp-2 group-hover:text-kheops-salmon transition-colors"
                        >
                          {popularPost.title}
                        </Link>
                        <span className="text-xs text-gray-500 mt-1">
                          {formatDate(popularPost.date)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Catégories</h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map(post => post.category))).map((category, index) => (
                    <Link 
                      key={index}
                      to={`/blog?category=${category}`}
                      className="flex justify-between items-center py-2 px-3 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <div className="flex items-center">
                        <Tag size={16} className="text-kheops-gold mr-2" />
                        <span>{category}</span>
                      </div>
                      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.category === category).length}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Tags cloud */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Tags populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-gray-100 hover:bg-kheops-gold/10 hover:text-kheops-gold cursor-pointer transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* CTA banner */}
              <div className="bg-gradient-to-r from-kheops-gold/20 to-kheops-salmon/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Vous aimez nos articles?</h3>
                <p className="text-gray-700 mb-4">
                  Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils.
                </p>
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kheops-gold"
                  />
                  <Button className="w-full bg-kheops-salmon hover:bg-kheops-salmon/90">
                    S'inscrire
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default BlogPostPage;
