
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ShopSection from "@/components/home/ShopSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "KHEOPS SET DIGITAL - Agence de Communication Digitale au Cameroun";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full overflow-x-hidden bg-white"
    >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ShopSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </motion.main>
  );
};

export default Index;
