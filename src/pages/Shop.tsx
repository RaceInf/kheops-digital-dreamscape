
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EbookCard from '@/components/shop/EbookCard';
import { ebooks } from '@/data/ebooks';
import { Helmet } from 'react-helmet-async';
import { Book } from 'lucide-react';

const Shop = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Bibliothèque Digitale - KHEOPS SET DIGITAL";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Helmet>
        <title>Bibliothèque Digitale - KHEOPS SET DIGITAL</title>
        <meta name="description" content="Découvrez notre sélection d'ebooks pour développer vos compétences digitales et faire croître votre business en ligne." />
        <meta name="keywords" content="ebook, marketing digital, communication digitale, stratégie digitale, formation" />
        <link rel="canonical" href="https://kheops-set-digital.com/shop" />
      </Helmet>
      
      <main className="min-h-screen w-full bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight text-gray-900">
                Bibliothèque Digitale
              </h1>
              <div className="w-20 h-1 bg-kheops-gold mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
                Des ressources soigneusement sélectionnées pour développer vos compétences 
                et faire croître votre activité en ligne.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
            >
              {ebooks.slice(0, 2).map((ebook) => (
                <motion.div 
                  key={ebook.id}
                  variants={itemVariants}
                  className="flex"
                >
                  <EbookCard ebook={ebook} truncateTitle={false} />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Empty state (just in case) */}
            {ebooks.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Book size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun ebook disponible</h3>
                <p className="text-gray-500">Revenez bientôt pour découvrir nos nouveaux ebooks</p>
              </motion.div>
            )}
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                Vous avez besoin d'accompagnement personnalisé ?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Notre équipe de consultants est prête à vous accompagner dans votre stratégie digitale.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-kheops-gold text-white rounded-lg shadow-lg hover:bg-kheops-salmon transition-all duration-300 font-medium"
              >
                Nous contacter
              </a>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Shop;
