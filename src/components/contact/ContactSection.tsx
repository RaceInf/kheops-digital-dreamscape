
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section className="section-padding bg-kheops-lightGray" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contactez <span className="text-kheops-gold">Nous</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Une question, un projet ? N'hésitez pas à nous contacter. Notre équipe vous répondra dans les meilleurs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
