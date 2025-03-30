
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    position: "Directrice Marketing",
    company: "LuxeStyle",
    content: "KHEOPS SET DIGITAL a complètement transformé notre stratégie digitale. Leur expertise en community management a permis d'augmenter notre engagement sur les réseaux sociaux de plus de 200% en seulement trois mois.",
    rating: 5
  },
  {
    id: 2,
    name: "Jean Dupont",
    position: "CEO",
    company: "TechInnovate",
    content: "Le site web créé par l'équipe de KHEOPS SET DIGITAL a dépassé toutes nos attentes. Notre taux de conversion a augmenté de 45% et les retours de nos clients sont unanimement positifs quant à l'expérience utilisateur.",
    rating: 5
  },
  {
    id: 3,
    name: "Marie Lefèvre",
    position: "Fondatrice",
    company: "Eco Solutions",
    content: "Grâce à leur stratégie de référencement SEO, nous avons vu notre trafic organique multiplié par trois en six mois. KHEOPS SET DIGITAL a su comprendre nos besoins et adapter leurs solutions à notre secteur d'activité.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Ce que disent nos <span className="text-kheops-gold">Clients</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Découvrez pourquoi nos clients nous font confiance pour leurs projets digitaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-kheops-gold/10 rounded-full flex items-center justify-center">
                <Quote size={20} className="text-kheops-gold" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-kheops-gold/20 flex items-center justify-center text-kheops-gold font-bold mr-4">
                  {testimonial.imageUrl ? (
                    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    testimonial.name.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
