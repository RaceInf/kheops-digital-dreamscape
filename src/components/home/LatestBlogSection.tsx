
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from "@/lib/utils";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LatestBlogSection = () => {
  // Get the latest 3 blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  return (
    <section className="section-padding bg-kheops-lightGray" id="blog">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            Nos <span className="text-kheops-salmon">Derniers</span> Articles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Restez informé des dernières tendances et stratégies en marketing digital
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-kheops-gold/80 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <div className="mb-2 text-sm text-gray-500">
                    {formatDate(post.date)}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-kheops-salmon transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-kheops-salmon font-semibold hover:text-kheops-gold transition-colors"
                  >
                    Lire la suite →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild
              className="bg-kheops-salmon hover:bg-kheops-gold transition-colors px-8"
            >
              <Link to="/blog">Voir tous les articles</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
