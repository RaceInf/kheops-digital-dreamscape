
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ShopSection from "@/components/home/ShopSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import AnimatedBackground from "@/components/ui/animated-background";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "KHEOPS SET DIGITAL - Agence de Communication Digitale";
  }, []);

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ShopSection />
        <BlogSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
