
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-mobile";

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
  },
  {
    id: 4,
    name: "Thomas Richard",
    position: "Directeur Commercial",
    company: "GlobExport",
    content: "Nous avons fait appel à KHEOPS SET DIGITAL pour notre refonte de marque et le résultat est impressionnant. Notre nouvelle identité visuelle a été unanimement saluée par nos clients et partenaires.",
    rating: 5
  },
  {
    id: 5,
    name: "Emma Nguyen",
    position: "Responsable E-commerce",
    company: "ModeFuture",
    content: "L'optimisation de notre boutique en ligne par KHEOPS SET DIGITAL a conduit à une augmentation de 60% de nos ventes en ligne. Leur approche stratégique et leur compréhension de notre marché ont fait toute la différence.",
    rating: 5
  },
  {
    id: 6,
    name: "Laurent Moreau",
    position: "Directeur Général",
    company: "Innovatech",
    content: "La campagne publicitaire conçue par KHEOPS SET DIGITAL a généré un ROI exceptionnel. Leur créativité, couplée à une exécution technique impeccable, nous a permis d'atteindre des segments de marché auparavant inaccessibles.",
    rating: 5
  },
  {
    id: 7,
    name: "Sarah Cohen",
    position: "Fondatrice & CEO",
    company: "GreenStart",
    content: "L'accompagnement de KHEOPS SET DIGITAL dans notre transition digitale a été crucial pour notre startup. Leur vision stratégique et leur expertise technique ont accéléré notre développement de façon spectaculaire.",
    rating: 4
  },
  {
    id: 8,
    name: "Alexandre Dubois",
    position: "Directeur Marketing Digital",
    company: "MediaGroup",
    content: "KHEOPS SET DIGITAL a révolutionné notre approche du marketing de contenu. Nos taux d'engagement ont explosé et notre marque est maintenant perçue comme un leader d'opinion dans notre secteur.",
    rating: 5
  },
  {
    id: 9,
    name: "Camille Roux",
    position: "Directrice Communication",
    company: "BioSanté",
    content: "Notre présence sur les réseaux sociaux était quasi inexistante avant notre collaboration avec KHEOPS SET DIGITAL. Aujourd'hui, nous avons une communauté engagée et en croissance constante.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / (isMobile ? 1 : 3)));
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, isMobile]);

  // Number of testimonials to show per slide based on screen size
  const itemsPerView = isMobile ? 1 : 3;
  
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Ce que disent nos <span className="text-kheops-gold">Clients</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Découvrez pourquoi nos clients nous font confiance pour leurs projets digitaux.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, slideIndex) => (
                <CarouselItem 
                  key={`slide-${slideIndex}`}
                  className={`pl-4 md:basis-1/3`}
                >
                  <div className="grid grid-cols-1 gap-6 h-full">
                    {testimonials.slice(
                      slideIndex * itemsPerView, 
                      Math.min((slideIndex + 1) * itemsPerView, testimonials.length)
                    ).map((testimonial) => (
                      <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2 translate-y-0" />
              <CarouselNext className="relative static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg relative h-full"
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
      
      <p className="text-gray-600 mb-6 italic line-clamp-4">{testimonial.content}</p>
      
      <div className="flex items-center mt-auto">
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
  );
};

export default TestimonialsSection;
