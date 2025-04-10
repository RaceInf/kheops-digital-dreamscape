
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ShopSection from "@/components/home/ShopSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>KHEOPS SET DIGITAL - Agence de Communication Digitale</title>
        <meta name="description" content="Transformez votre présence digitale avec KHEOPS SET DIGITAL, une agence de communication spécialisée dans la stratégie digitale, le web design et le community management." />
        <meta name="keywords" content="agence communication digitale, marketing digital, création site web, community management, stratégie digitale, référencement SEO" />
      </Helmet>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-full overflow-x-hidden"
      >
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ShopSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </motion.main>
    </>
  );
};

export default Index;
