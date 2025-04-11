
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Layout, PenTool, Target, Share2, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  expanded: boolean;
  onClick: () => void;
}

const ServiceCard = ({ id, icon, title, description, expanded, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className={`cursor-pointer overflow-hidden transition-all duration-500 ${
        expanded ? 'bg-white shadow-xl' : 'bg-kheops-lightGray hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div 
          className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-colors duration-300 relative ${
            expanded ? 'bg-kheops-gold text-white' : 'bg-white text-kheops-gold'
          }`}
        >
          {/* Add subtle gradient overlay when expanded */}
          {expanded && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kheops-gold to-kheops-salmon opacity-100"></div>
          )}
          {/* Icon with proper z-index to display above gradient */}
          <div className="relative z-10">
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className={expanded ? 'opacity-100 h-auto' : 'opacity-60 h-16 overflow-hidden'}>
          {description}
        </CardDescription>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <ul className="mb-4 space-y-2">
              <li className="flex items-start">
                <span className="text-kheops-gold mr-2">✓</span>
                <span>Analyse stratégique personnalisée</span>
              </li>
              <li className="flex items-start">
                <span className="text-kheops-gold mr-2">✓</span>
                <span>Solutions sur mesure pour vos besoins</span>
              </li>
              <li className="flex items-start">
                <span className="text-kheops-gold mr-2">✓</span>
                <span>Accompagnement expert à chaque étape</span>
              </li>
            </ul>
            <Link to={`/services/${id}`}>
              <Button className="bg-kheops-salmon hover:bg-kheops-gold text-white mt-2">
                En savoir plus
              </Button>
            </Link>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      id: "community-management",
      icon: <MessageSquare size={28} />,
      title: "Community Management",
      description: "Stratégies ciblées pour renforcer votre présence sur les réseaux sociaux et engager votre audience de manière authentique."
    },
    {
      id: "creation-sites-web",
      icon: <Layout size={28} />,
      title: "Création de Sites Web",
      description: "Sites vitrines et e-commerce modernes, responsives et optimisés pour convertir les visiteurs en clients."
    },
    {
      id: "identite-visuelle",
      icon: <PenTool size={28} />,
      title: "Identité Visuelle",
      description: "Logos, chartes graphiques et supports visuels qui reflètent l'unicité de votre marque et marquent les esprits."
    },
    {
      id: "strategie-digitale",
      icon: <Target size={28} />,
      title: "Stratégie Digitale",
      description: "Élaboration de feuilles de route digitales complètes pour atteindre vos objectifs commerciaux."
    },
    {
      id: "social-media-marketing",
      icon: <Share2 size={28} />,
      title: "Social Media Marketing",
      description: "Campagnes publicitaires ciblées sur les réseaux sociaux pour augmenter votre visibilité et vos conversions."
    },
    {
      id: "referencement-seo",
      icon: <Search size={28} />,
      title: "Référencement SEO",
      description: "Optimisation de votre visibilité sur les moteurs de recherche pour attirer un trafic qualifié sur votre site."
    }
  ];

  const handleCardClick = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nos <span className="text-kheops-gold">Services</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Des solutions digitales complètes pour développer votre activité et maximiser votre impact en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              expanded={expandedCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md font-medium transition-all duration-300 text-lg">
              Tous nos services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
