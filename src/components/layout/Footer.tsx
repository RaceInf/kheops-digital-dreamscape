
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kheops-lightGray pt-16 pb-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="font-poppins text-xl font-bold mb-4">
                <span className="text-kheops-gold">KHEOPS</span> 
                <span className="text-kheops-salmon">SET</span> 
                <span>DIGITAL</span>
              </h3>
            </Link>
            <p className="text-gray-600">
              Votre partenaire en stratégie digitale au Cameroun. Nous transformons vos idées en expériences mémorables et impactantes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:bg-white hover:shadow-md transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:bg-white hover:shadow-md transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:bg-white hover:shadow-md transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:bg-white hover:shadow-md transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/community-management" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Community Management
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Identité visuelle
                </Link>
              </li>
              <li>
                <Link to="/services/digital-strategy" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  Stratégie digitale
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-kheops-gold mt-1 mr-3 flex-shrink-0" />
                <address className="text-gray-600 not-italic">
                  123 Avenue Digitale<br />
                  Yaoundé, Cameroun
                </address>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-kheops-gold mr-3 flex-shrink-0" />
                <a href="tel:+237600000000" className="text-gray-600 hover:text-kheops-salmon transition-colors">+237 600 000 000</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-kheops-gold mr-3 flex-shrink-0" />
                <a href="mailto:contact@kheops-set.com" className="text-gray-600 hover:text-kheops-salmon transition-colors">contact@kheops-set.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} KHEOPS SET DIGITAL. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-600 flex justify-center md:justify-end space-x-4">
            <Link to="/mentions-legales" className="hover:text-kheops-salmon transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-kheops-salmon transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/conditions-generales-de-vente" className="hover:text-kheops-salmon transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
