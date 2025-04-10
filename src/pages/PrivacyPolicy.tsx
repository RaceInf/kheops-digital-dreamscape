
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Eye, FileText, Clock, Globe, User, Database, AlertTriangle, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | KHEOPS SET DIGITAL</title>
        <meta name="description" content="Découvrez notre politique de confidentialité et comment KHEOPS SET DIGITAL protège vos données personnelles dans le respect des réglementations en vigueur." />
        <meta name="keywords" content="politique de confidentialité, protection des données, données personnelles, RGPD, vie privée" />
        <link rel="canonical" href="https://kheops-set-digital.com/politique-de-confidentialite" />
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
                Politique de <span className="text-kheops-salmon">Confidentialité</span>
              </h1>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <p className="text-gray-700">
                  Chez KHEOPS SET DIGITAL, nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
                >
                  <Shield className="text-kheops-gold mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Protection</h3>
                  <p className="text-sm text-gray-600">Nous protégeons vos données selon les normes les plus strictes</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
                >
                  <Lock className="text-kheops-gold mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Sécurité</h3>
                  <p className="text-sm text-gray-600">Vos informations sont stockées de manière sécurisée</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center"
                >
                  <Eye className="text-kheops-gold mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Transparence</h3>
                  <p className="text-sm text-gray-600">Nous sommes transparents sur l'utilisation de vos données</p>
                </motion.div>
              </div>
              
              <Separator className="my-8 bg-kheops-gold/30" />
              
              <div className="space-y-8 text-gray-700">
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <FileText className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Collecte des données</h2>
                  </div>
                  <p className="mb-4">
                    Nous collectons les données personnelles que vous nous fournissez directement, comme:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Nom, prénom, adresse e-mail, numéro de téléphone</li>
                    <li>Informations de facturation et de paiement</li>
                    <li>Préférences de communication</li>
                    <li>Toute autre information que vous choisissez de nous fournir</li>
                  </ul>
                  <p>
                    Nous collectons également automatiquement certaines informations lorsque vous visitez notre site web, notamment via les cookies et technologies similaires.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Globe className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Utilisation des données</h2>
                  </div>
                  <p className="mb-4">
                    Nous utilisons vos données personnelles pour:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir, exploiter et maintenir nos services</li>
                    <li>Traiter et gérer vos achats et demandes</li>
                    <li>Vous contacter concernant votre compte ou vos transactions</li>
                    <li>Personnaliser votre expérience utilisateur</li>
                    <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                    <li>Améliorer nos services et développer de nouvelles fonctionnalités</li>
                    <li>Détecter et prévenir les fraudes</li>
                  </ul>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Clock className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Conservation des données</h2>
                  </div>
                  <p>
                    Nous conservons vos données personnelles aussi longtemps que nécessaire pour vous fournir nos services ou pour d'autres finalités essentielles, comme le respect de nos obligations légales, la résolution des litiges et l'application de nos accords.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <User className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Vos droits</h2>
                  </div>
                  <p className="mb-4">
                    Conformément aux lois applicables sur la protection des données, vous disposez des droits suivants:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification des données inexactes</li>
                    <li>Droit à l'effacement de vos données</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                    <li>Droit d'opposition au traitement</li>
                  </ul>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Database className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Cookies et technologies similaires</h2>
                  </div>
                  <p className="mb-4">
                    Notre site utilise des cookies et technologies similaires pour améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu. Vous pouvez gérer vos préférences concernant les cookies via les paramètres de votre navigateur.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Sécurité des données</h2>
                  </div>
                  <p className="mb-4">
                    Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <RefreshCw className="text-kheops-salmon mr-3" size={24} />
                    <h2 className="text-2xl font-semibold">Modifications de la politique</h2>
                  </div>
                  <p>
                    Nous pouvons mettre à jour cette politique de confidentialité périodiquement. La version la plus récente sera toujours disponible sur notre site web, avec la date de dernière mise à jour.
                  </p>
                </section>
                
                <section className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Nous contacter</h2>
                  <p className="mb-4">
                    Pour toute question concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter à <a href="mailto:privacy@kheops-set.com" className="text-kheops-gold hover:underline">privacy@kheops-set.com</a>.
                  </p>
                  <div className="mt-6 p-4 bg-kheops-lightGray rounded-lg border border-gray-200">
                    <p className="text-sm">
                      Si vous souhaitez exercer vos droits ou déposer une réclamation, veuillez visiter notre <Link to="/contact" className="text-kheops-gold hover:underline">page de contact</Link> ou nous contacter directement par email.
                    </p>
                  </div>
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

export default PrivacyPolicy;
