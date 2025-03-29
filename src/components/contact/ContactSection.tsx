
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
          {/* Cercle décoratif */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-kheops-salmon/10 hidden lg:block"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-kheops-gold/10 hidden lg:block"></div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-2"
          >
            <ContactForm />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:order-1"
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
