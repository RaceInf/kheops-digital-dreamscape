
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="bg-kheops-gold hover:bg-kheops-salmon text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
          aria-label="Retour en haut de page"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <h3 className="font-poppins text-xl font-bold mb-4">
              <span className="text-kheops-gold">KHEOPS</span> 
              <span className="text-kheops-salmon">SET</span> 
              <span>DIGITAL</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Votre partenaire en stratégie digitale et communication visuelle. Nous transformons vos idées en expériences mémorables.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-kheops-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-kheops-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-kheops-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-kheops-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-poppins text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-poppins text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/community-management" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Community Management
                </Link>
              </li>
              <li>
                <Link to="/services/creation-sites-web" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link to="/services/identite-visuelle" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Identité visuelle
                </Link>
              </li>
              <li>
                <Link to="/services/strategie-digitale" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  Stratégie digitale
                </Link>
              </li>
              <li>
                <Link to="/services/referencement-seo" className="text-gray-300 hover:text-kheops-salmon transition-colors duration-300">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-poppins text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-kheops-gold mt-1 mr-3 flex-shrink-0" />
                <address className="text-gray-300 not-italic">
                  Boulevard de la liberté<br />
                  Douala, Cameroun
                </address>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-kheops-gold mr-3 flex-shrink-0" />
                <a href="tel:+237612345678" className="text-gray-300 hover:text-white">+237 612 345 678</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-kheops-gold mr-3 flex-shrink-0" />
                <a href="mailto:contact@kheops-set.com" className="text-gray-300 hover:text-white">contact@kheops-set.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KHEOPS SET DIGITAL. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-400 flex justify-center md:justify-end space-x-4">
            <Link to="/mentions-legales" className="hover:text-kheops-salmon transition-colors duration-300">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-kheops-salmon transition-colors duration-300">
              Politique de confidentialité
            </Link>
            <Link to="/conditions-generales-de-vente" className="hover:text-kheops-salmon transition-colors duration-300">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
