
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
  Calendar, 
  User, 
  Tag, 
  MessageSquare, 
  Bookmark, 
  ChevronRight,
  Eye,
  Heart
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
  const [isLiked, setIsLiked] = useState(false);
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

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast({
        title: "Merci !",
        description: "Vous avez aimé cet article",
        duration: 2000,
      });
    }
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

  // Create sections from content for a more structured display
  const createContentSections = () => {
    const paragraphs = post.content.split('<p>');
    
    // Skip the first empty element
    paragraphs.shift();
    
    const sections = [];
    let currentSection = { title: 'Introduction', content: [], image: null };
    
    // Demo images for sections - in a real app, these would come from the CMS
    const sectionImages = [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format'
    ];
    
    paragraphs.forEach((p, index) => {
      // Clean up paragraph
      const cleanP = p.replace('</p>', '').trim();
      
      // Check if this looks like a section title (shorter text that ends with a period)
      if (cleanP.length < 100 && cleanP.endsWith('.') && index > 0 && index % 3 === 0) {
        // Save previous section if it has content
        if (currentSection.content.length > 0) {
          sections.push({...currentSection});
        }
        
        // Start new section
        const imageIndex = Math.min(Math.floor(index / 3), sectionImages.length - 1);
        currentSection = { 
          title: cleanP, 
          content: [], 
          image: sectionImages[imageIndex]
        };
      } else {
        // Add to current section
        currentSection.content.push(cleanP);
      }
    });
    
    // Add the last section
    if (currentSection.content.length > 0) {
      sections.push(currentSection);
    }
    
    return sections;
  };

  const contentSections = createContentSections();

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          <div className="mb-8">
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
          
            {/* Featured image with overlay */}
            <div className="relative mb-8 rounded-xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[50vh] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <Badge variant="outline" className="bg-kheops-gold/80 text-white border-none w-fit mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                  {post.title}
                </h1>
              </div>
            </div>
          
            {/* Author and meta info */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-kheops-gold/20">
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
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye size={14} />
                  {Math.floor(Math.random() * 900) + 100} vues
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
                  {estimatedReadingTime} de lecture
                </span>
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={handleLike} 
                        className={`rounded-full ${isLiked ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white'}`}
                      >
                        <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isLiked ? 'Vous aimez cet article' : 'Aimer cet article'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
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
          
          {/* Excerpt/introduction */}
          <div className="mb-12 bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10 p-6 rounded-xl">
            <p className="text-lg italic text-gray-700">{post.excerpt}</p>
          </div>
          
          {/* Content sections with images */}
          <div className="prose prose-lg max-w-none mb-12 space-y-16">
            {contentSections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-kheops-gold/30 pb-2 inline-block">
                  {section.title}
                </h2>
                
                {/* Alternate image position based on section index */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-2/3 space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700">{paragraph}</p>
                    ))}
                  </div>
                  
                  {section.image && (
                    <div className="md:w-1/3">
                      <img 
                        src={section.image} 
                        alt={section.title} 
                        className="rounded-lg shadow-md object-cover w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Tags list */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Tags</h3>
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
          </div>
          
          {/* Author box with gradient background */}
          <div className="mb-16 bg-gradient-to-r from-kheops-gold/20 to-kheops-salmon/20 rounded-xl overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row p-8">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <Avatar className="h-32 w-32 border-4 border-white/50 shadow-xl">
                  <AvatarImage src={`https://i.pravatar.cc/200?u=${post.author}`} alt={post.author} />
                  <AvatarFallback className="bg-kheops-gold/70 text-white text-4xl">
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4">À propos de {post.author}</h3>
                <p className="text-gray-700 mb-6 italic">
                  "Expert en marketing digital chez KHEOPS SET DIGITAL avec plus de 10 ans d'expérience dans le domaine. 
                  Spécialisé dans les stratégies de croissance pour les entreprises africaines."
                </p>
                <Button variant="outline" className="bg-white/70 border-kheops-salmon text-kheops-salmon hover:bg-kheops-salmon/10">
                  Voir tous ses articles
                </Button>
              </div>
            </div>
          </div>
          
          {/* Comments section */}
          <div className="mb-16 bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <MessageSquare size={24} className="text-kheops-gold" />
              Commentaires
            </h3>
            
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Connectez-vous pour laisser un commentaire</p>
              <Button className="bg-kheops-salmon hover:bg-kheops-salmon/90">Se connecter</Button>
            </div>
          </div>
          
          {/* Popular articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Articles similaires
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <motion.div
                    key={relatedPost.id}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border-none shadow-lg h-full flex flex-col">
                      <Link to={`/blog/${relatedPost.id}`} className="block relative h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <span className="text-white p-4 font-medium">Lire l'article</span>
                        </div>
                      </Link>
                      
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <Badge variant="outline" className="w-fit mb-2 bg-kheops-gold/10 text-kheops-gold border-kheops-gold/20">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-bold text-xl mb-3 hover:text-kheops-salmon transition-colors line-clamp-2">
                          <Link to={`/blog/${relatedPost.id}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={`https://i.pravatar.cc/100?u=${relatedPost.author}`} alt={relatedPost.author} />
                            <AvatarFallback>{relatedPost.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-gray-600">{relatedPost.author}</span>
                          <span className="text-xs text-gray-400 ml-auto">{formatDate(relatedPost.date)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Newsletter signup */}
          <div className="mt-24 bg-gradient-to-r from-kheops-gold/10 via-white to-kheops-salmon/10 rounded-2xl overflow-hidden shadow-lg relative">
            <div className="px-8 py-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Restez informé</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, conseils et actualités directement dans votre boîte mail.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-kheops-gold"
                />
                <Button className="bg-kheops-salmon hover:bg-kheops-salmon/90 text-white px-6">
                  S'inscrire
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                En vous inscrivant, vous acceptez de recevoir nos emails et confirmez avoir lu notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default BlogPostPage;
