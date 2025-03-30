
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const LegalNotice = () => {
  useEffect(() => {
    // Set page title
    document.title = "Mentions Légales | KHEOPS SET DIGITAL";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-gradient-to-b from-white to-kheops-lightGray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Mentions <span className="text-kheops-salmon">Légales</span>
            </h1>
            
            <Separator className="my-6 bg-kheops-gold/30" />
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">Informations générales</h2>
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
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">Direction de la publication</h2>
                <p>
                  Le site kheops-set.com est dirigé par Mme/M. [Nom du dirigeant], en sa qualité de [Fonction].
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">Hébergement</h2>
                <p>
                  Le site kheops-set.com est hébergé par la société [Nom de l'hébergeur], dont le siège social est situé [Adresse de l'hébergeur].
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">Propriété intellectuelle</h2>
                <p className="mb-4">
                  L'ensemble du contenu de ce site (structure, textes, logos, images, photographies, vidéos, sons, etc.) est la propriété exclusive de KHEOPS SET DIGITAL ou de ses partenaires.
                </p>
                <p className="mb-4">
                  Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, par quelque procédé que ce soit, sans l'autorisation expresse écrite de KHEOPS SET DIGITAL, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">Liens hypertextes</h2>
                <p className="mb-4">
                  Le site kheops-set.com peut contenir des liens hypertextes vers d'autres sites internet ou applications. KHEOPS SET DIGITAL n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">Droit applicable et juridiction compétente</h2>
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
  );
};

export default LegalNotice;
