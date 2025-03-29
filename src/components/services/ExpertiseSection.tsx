
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Megaphone, Globe, PenTool, BarChart, Users, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Service data
const services = [
  {
    icon: <Megaphone size={28} />,
    title: "Community Management",
    description: "Stratégies ciblées pour renforcer votre présence sur les réseaux sociaux et engager votre audience de manière authentique.",
    features: [
      "Publication de contenus quotidiens sur vos réseaux sociaux",
      "Interaction avec votre communauté et modération des commentaires",
      "Veille concurrentielle et analyse des tendances",
      "Rapports de performance mensuels détaillés"
    ],
    serviceId: "community-management"
  },
  {
    icon: <Globe size={28} />,
    title: "Création de Sites Web",
    description: "Sites vitrines et e-commerce modernes, responsives et optimisés pour convertir les visiteurs en clients.",
    features: [
      "Design sur mesure adapté à votre identité visuelle",
      "Optimisation pour tous les appareils (desktop, tablette, mobile)",
      "Intégration d'outils d'analyse et de suivi",
      "Maintenance et support technique"
    ],
    serviceId: "creation-sites-web"
  },
  {
    icon: <PenTool size={28} />,
    title: "Identité Visuelle",
    description: "Logos, chartes graphiques et supports visuels qui reflètent l'unicité de votre marque et marquent les esprits.",
    features: [
      "Création de logo et déclinaisons",
      "Définition d'une charte graphique complète",
      "Conception de supports imprimés (cartes de visite, plaquettes...)",
      "Kit de communication digitale (bannières, signatures mail...)"
    ],
    serviceId: "identite-visuelle"
  },
  {
    icon: <BarChart size={28} />,
    title: "Stratégie Digitale",
    description: "Élaboration de feuilles de route digitales complètes pour atteindre vos objectifs commerciaux.",
    features: [
      "Audit de votre présence en ligne actuelle",
      "Définition des objectifs et KPIs",
      "Plan d'action personnalisé sur 6 à 12 mois",
      "Accompagnement dans la mise en œuvre"
    ],
    serviceId: "strategie-digitale"
  },
  {
    icon: <Users size={28} />,
    title: "Social Media Marketing",
    description: "Campagnes publicitaires ciblées sur les réseaux sociaux pour augmenter votre visibilité et vos conversions.",
    features: [
      "Création et gestion de campagnes publicitaires",
      "Ciblage précis des audiences pertinentes",
      "Optimisation des budgets et enchères",
      "Tests A/B et amélioration continue"
    ],
    serviceId: "social-media-marketing"
  },
  {
    icon: <Search size={28} />,
    title: "Référencement SEO",
    description: "Optimisation de votre visibilité sur les moteurs de recherche pour attirer un trafic qualifié sur votre site.",
    features: [
      "Audit SEO complet de votre site",
      "Optimisation on-page (balises, contenus, structure)",
      "Stratégie de création de contenu",
      "Suivi de positionnement et rapports mensuels"
    ],
    serviceId: "referencement-seo"
  }
];

const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nos <span className="text-kheops-gold">Expertises</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Des solutions digitales complètes pour développer votre activité et maximiser votre impact en ligne.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg border border-gray-100">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-kheops-gold bg-opacity-10 text-kheops-gold">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-kheops-gold mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.serviceId}`}>
                    <Button className="mt-6 bg-white text-kheops-gold hover:bg-kheops-gold hover:text-white border border-kheops-gold transition-all duration-300">
                      En savoir plus
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
