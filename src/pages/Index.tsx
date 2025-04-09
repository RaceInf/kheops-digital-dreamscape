
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ShopSection from "@/components/home/ShopSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Set document title
    document.title = "KHEOPS SET DIGITAL - Agence de Communication Digitale au Cameroun";
  }, []);

  return (
    <>
      <Helmet>
        <title>KHEOPS SET DIGITAL - Agence de Communication Digitale au Cameroun</title>
        <meta name="description" content="KHEOPS SET DIGITAL, votre partenaire en communication digitale et stratégie marketing au Cameroun. Propulsez votre marque vers de nouveaux sommets." />
        <meta name="keywords" content="communication digitale, marketing digital, Cameroun, agence web, conception site web, stratégie digitale, community management" />
        <meta property="og:title" content="KHEOPS SET DIGITAL - Agence de Communication Digitale au Cameroun" />
        <meta property="og:description" content="KHEOPS SET DIGITAL, votre partenaire en communication digitale et stratégie marketing au Cameroun. Propulsez votre marque vers de nouveaux sommets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kheops-set.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kheopssetdigital" />
        <meta name="twitter:creator" content="@kheopssetdigital" />
        <meta name="twitter:title" content="KHEOPS SET DIGITAL - Agence de Communication Digitale au Cameroun" />
        <meta name="twitter:description" content="Votre partenaire en communication digitale et stratégie marketing au Cameroun." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" />
        <link rel="canonical" href="https://kheops-set.com" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
    </>
  );
};

export default Index;
