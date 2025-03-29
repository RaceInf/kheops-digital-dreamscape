
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/services/HeroSection";
import ExpertiseSection from "@/components/services/ExpertiseSection";
import PricingSection from "@/components/services/PricingSection";
import ProcessSection from "@/components/services/ProcessSection";
import CtaSection from "@/components/services/CtaSection";

const Services = () => {
  useEffect(() => {
    document.title = "Nos Services | KHEOPS SET DIGITAL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <PricingSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Services;
