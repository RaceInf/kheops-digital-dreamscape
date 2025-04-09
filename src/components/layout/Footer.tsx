
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

const newsletterSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
});

const Footer = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmitNewsletter = (values: z.infer<typeof newsletterSchema>) => {
    // En production, vous enverriez ces données à votre API
    console.log("Inscription newsletter:", values.email);
    
    toast({
      title: "Inscription réussie!",
      description: `Vous êtes maintenant inscrit à notre newsletter.`,
      duration: 5000,
    });
    
    form.reset();
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="relative mb-16 p-8 lg:p-12 rounded-2xl overflow-hidden bg-gradient-to-r from-kheops-gold/20 to-kheops-salmon/20">
          <div className="absolute inset-0 bg-gray-800/70 backdrop-blur-sm"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Restez informé de nos actualités</h3>
              <p className="text-gray-300 mb-6 lg:pr-10">
                Abonnez-vous à notre newsletter pour recevoir nos dernières actualités, conseils et offres exclusives.
              </p>
            </div>
            
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitNewsletter)} className="space-y-4">
                  <div className="flex gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="Votre adresse email"
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="bg-kheops-salmon hover:bg-kheops-gold text-white"
                    >
                      S'inscrire
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">
                    En vous inscrivant, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-6 border-b border-gray-700 pb-2">
              <span className="text-kheops-gold">KHEOPS</span> 
              <span className="text-kheops-salmon">SET</span> 
              <span>DIGITAL</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Votre partenaire en stratégie digitale et communication visuelle au Cameroun. 
              Nous transformons vos idées en expériences mémorables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kheops-gold transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kheops-gold transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kheops-gold transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kheops-gold transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-6 border-b border-gray-700 pb-2">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-gold rounded-full mr-2"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-gold rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-gold rounded-full mr-2"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-gold rounded-full mr-2"></span>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-gold rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-6 border-b border-gray-700 pb-2">Nos services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/community-management" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-salmon rounded-full mr-2"></span>
                  Community Management
                </a>
              </li>
              <li>
                <a href="/services/creation-sites-web" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-salmon rounded-full mr-2"></span>
                  Création de sites web
                </a>
              </li>
              <li>
                <a href="/services/identite-visuelle" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-salmon rounded-full mr-2"></span>
                  Identité visuelle
                </a>
              </li>
              <li>
                <a href="/services/strategie-digitale" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-salmon rounded-full mr-2"></span>
                  Stratégie digitale
                </a>
              </li>
              <li>
                <a href="/services/referencement-seo" className="text-gray-300 hover:text-kheops-salmon transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-kheops-salmon rounded-full mr-2"></span>
                  SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-xl font-bold mb-6 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-kheops-gold mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Avenue du Digital<br />
                  Yaoundé, Cameroun
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-kheops-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300">+237 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-kheops-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300">contact@kheops-set.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KHEOPS SET DIGITAL. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-400 flex justify-center md:justify-end space-x-6">
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
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-kheops-gold hover:bg-kheops-salmon text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
