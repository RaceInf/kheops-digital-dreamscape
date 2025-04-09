
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kheops-lightGray pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">
              <span className="text-kheops-gold">KHEOPS</span> 
              <span className="text-kheops-salmon">SET</span> 
              <span>DIGITAL</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Votre partenaire en stratégie digitale et communication visuelle. Nous transformons vos idées en expériences mémorables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-kheops-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-kheops-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-kheops-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-kheops-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Community Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Création de sites web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Identité visuelle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  Stratégie digitale
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-kheops-salmon transition-colors">
                  SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-kheops-gold mt-1 mr-3" />
                <span className="text-gray-600">
                  123 Avenue du Digital<br />
                  75000 Paris, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-kheops-gold mr-3" />
                <span className="text-gray-600">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-kheops-gold mr-3" />
                <span className="text-gray-600">contact@kheops-set.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} KHEOPS SET DIGITAL. Tous droits réservés.
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
