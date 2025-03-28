
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/ContactSection";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = "Contact - KHEOPS SET DIGITAL";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      
      <section className="pt-32 pb-12 bg-kheops-lightGray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez <span className="text-kheops-gold">Nous</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande de devis.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
