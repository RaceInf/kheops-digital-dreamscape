
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const HeroSection = () => {
  return (
    <section className="relative bg-kheops-lightGray pt-32 pb-20 overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="mb-6">
            Nos <span className="text-kheops-gold">Services</span>
          </h1>
          <p className="text-gray-700 text-lg mb-10">
            Des solutions digitales sur mesure pour répondre à tous vos besoins en communication, 
            de la stratégie à la mise en œuvre opérationnelle.
          </p>
          <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md transition-all duration-300 text-lg">
            Demander un devis personnalisé
          </Button>
        </motion.div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-kheops-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-kheops-salmon opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
