
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ShopSection from "@/components/home/ShopSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "KHEOPS SET DIGITAL - Agence de Communication Digitale";
  }, []);

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ShopSection />
      <TestimonialsSection />
      <LatestBlogSection />
      <Footer />
    </main>
  );
};

export default Index;
