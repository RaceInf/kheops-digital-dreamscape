
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { FileText, Building, User, Server, Copyright, Link as LinkIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

const LegalNotice = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mentions Légales | KHEOPS SET DIGITAL</title>
        <meta name="description" content="Consultez les mentions légales de KHEOPS SET DIGITAL, informations sur l'entreprise, propriété intellectuelle et droits d'auteur." />
        <meta name="keywords" content="mentions légales, KHEOPS SET DIGITAL, entreprise, propriété intellectuelle, droits" />
        <link rel="canonical" href="https://kheops-set-digital.com/mentions-legales" />
      </Helmet>
      
      <main className="min-h-screen w-full">
        <Navbar />
        
        <div className="pt-32 pb-20 bg-gradient-to-b from-white to-kheops-lightGray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Mentions <span className="text-kheops-salmon">Légales</span>
              </h1>
              
              <Separator className="my-6 bg-kheops-gold/30" />
              
              <div className="space-y-8 text-gray-700">
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Building className="text-kheops-gold mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Informations générales</h2>
                  </div>
                  <p className="mb-4">
                    Le site kheops-set.com est édité par la société KHEOPS SET DIGITAL, entreprise
                    spécialisée dans la communication digitale et le marketing.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li><strong>Raison sociale :</strong> KHEOPS SET DIGITAL</li>
                    <li><strong>Forme juridique :</strong> SARL</li>
                    <li><strong>Capital social :</strong> 10 000 000 FCFA</li>
                    <li><strong>Siège social :</strong> 123 Avenue du Digital, Dakar, Sénégal</li>
                    <li><strong>RCCM :</strong> SN-DKR-2020-B-12345</li>
                    <li><strong>N° NINEA :</strong> 12345678901</li>
                    <li><strong>Téléphone :</strong> +221 XX XXX XX XX</li>
                    <li><strong>Email :</strong> contact@kheops-set.com</li>
                  </ul>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <User className="text-kheops-gold mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Direction de la publication</h2>
                  </div>
                  <p>
                    Le site kheops-set.com est dirigé par Mme/M. [Nom du dirigeant], en sa qualité de [Fonction].
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Server className="text-kheops-gold mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Hébergement</h2>
                  </div>
                  <p>
                    Le site kheops-set.com est hébergé par la société [Nom de l'hébergeur], dont le siège social est situé [Adresse de l'hébergeur].
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Copyright className="text-kheops-gold mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
                  </div>
                  <p className="mb-4">
                    L'ensemble du contenu de ce site (structure, textes, logos, images, photographies, vidéos, sons, etc.) est la propriété exclusive de KHEOPS SET DIGITAL ou de ses partenaires.
                  </p>
                  <p className="mb-4">
                    Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, par quelque procédé que ce soit, sans l'autorisation expresse écrite de KHEOPS SET DIGITAL, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <LinkIcon className="text-kheops-gold mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Liens hypertextes</h2>
                  </div>
                  <p className="mb-4">
                    Le site kheops-set.com peut contenir des liens hypertextes vers d'autres sites internet ou applications. KHEOPS SET DIGITAL n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <FileText className="text-kheops-gold mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Droit applicable et juridiction compétente</h2>
                  </div>
                  <p>
                    Les présentes mentions légales sont soumises à la loi sénégalaise. En cas de litige, les tribunaux sénégalais seront seuls compétents.
                  </p>
                </section>
              </div>
              
              <Separator className="my-8 bg-kheops-gold/30" />
              
              <p className="text-sm text-gray-500 text-center">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </main>
    </>
  );
};

export default LegalNotice;
