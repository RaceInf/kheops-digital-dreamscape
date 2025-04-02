
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
    
    // Check for dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen w-full relative overflow-hidden dark:bg-gray-900 dark:text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="scroll-smooth">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ShopSection />
          <BlogSection />
          <TestimonialsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;
