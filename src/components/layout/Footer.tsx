
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-kheops-lightGray pt-16 pb-8 border-t border-gray-200 overflow-hidden">
      <div className="container-custom">
        <div className="relative">
          {/* Newsletter Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="rounded-2xl bg-gradient-to-r from-kheops-gold/90 to-kheops-salmon/90 p-8 md:p-12 mb-16 shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-20 w-48 h-48 bg-black/5 rounded-full blur-2xl"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Restons connectés</h2>
                <p className="text-white/90 md:text-lg mb-4">
                  Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et conseils en matière de communication digitale.
                </p>
                <div className="hidden md:flex items-center space-x-4 mt-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-all">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-all">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-all">
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-2.5 rounded-full transition-all">
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
              <div>
                <form className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-bold mb-3 text-gray-800">S'abonner à la newsletter</h3>
                  <div className="flex flex-col space-y-3">
                    <Input
                      type="text"
                      placeholder="Votre nom"
                      className="border-gray-300 focus:border-kheops-gold"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Votre email"
                      className="border-gray-300 focus:border-kheops-gold"
                      required
                    />
                    <Button 
                      className="w-full bg-kheops-gold hover:bg-kheops-salmon transition-colors"
                      type="submit"
                    >
                      S'abonner
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-4"
            >
              <Link to="/" className="inline-block">
                <h3 className="font-poppins text-2xl font-bold mb-4">
                  <span className="text-kheops-gold">KHEOPS</span> 
                  <span className="text-kheops-salmon">SET</span> 
                  <span>DIGITAL</span>
                </h3>
              </Link>
              <p className="text-gray-600">
                Votre partenaire en stratégie digitale au Cameroun. Nous transformons vos idées en expériences mémorables et impactantes pour une visibilité maximale.
              </p>
              <div className="flex space-x-3 pt-2 md:hidden">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:shadow-md transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:shadow-md transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:shadow-md transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-kheops-gold hover:shadow-md transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="font-poppins text-xl font-bold mb-5">Navigation</h3>
              <div className="grid grid-cols-2">
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                      Accueil
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                      Services
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                      Boutique
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link to="/blog" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                      Blog
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                      À propos
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                      Contact
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="font-poppins text-xl font-bold mb-5">Nos services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/community-management" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                    Community Management
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-development" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                    Création de sites web
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/branding" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                    Identité visuelle
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-strategy" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                    Stratégie digitale
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo" className="text-gray-600 hover:text-kheops-salmon transition-colors inline-flex items-center group">
                    Référencement SEO
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="font-poppins text-xl font-bold mb-5">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-kheops-gold/10 p-2 rounded-full mr-3 mt-0.5">
                    <MapPin size={16} className="text-kheops-gold" />
                  </div>
                  <address className="text-gray-600 not-italic">
                    123 Avenue Digitale<br />
                    Yaoundé, Cameroun
                  </address>
                </li>
                <li className="flex items-center">
                  <div className="bg-kheops-gold/10 p-2 rounded-full mr-3">
                    <Phone size={16} className="text-kheops-gold" />
                  </div>
                  <a href="tel:+237600000000" className="text-gray-600 hover:text-kheops-salmon transition-colors">+237 600 000 000</a>
                </li>
                <li className="flex items-center">
                  <div className="bg-kheops-gold/10 p-2 rounded-full mr-3">
                    <Mail size={16} className="text-kheops-gold" />
                  </div>
                  <a href="mailto:contact@kheops-set.com" className="text-gray-600 hover:text-kheops-salmon transition-colors">contact@kheops-set.com</a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} KHEOPS SET DIGITAL. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0 text-sm text-gray-600 flex flex-wrap justify-center md:justify-end gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
