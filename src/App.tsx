
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import EbookDetail from "./pages/EbookDetail";
import NotFound from "./pages/NotFound";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfSale from "./pages/TermsOfSale";
import BackToTop from "./components/ui/back-to-top";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Helmet>
          <html lang="fr" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="KHEOPS SET DIGITAL - Agence de communication digitale au Cameroun. Experts en stratégie web, création de sites, identité visuelle et marketing digital." />
          <meta name="keywords" content="agence digitale, communication, web, Cameroun, Douala, marketing digital" />
          <meta name="author" content="KHEOPS SET DIGITAL" />
          <meta name="theme-color" content="#EDC070" />
        </Helmet>
        
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BackToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<EbookDetail />} />
                {/* Legal pages */}
                <Route path="/mentions-legales" element={<LegalNotice />} />
                <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
                <Route path="/conditions-generales-de-vente" element={<TermsOfSale />} />
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
