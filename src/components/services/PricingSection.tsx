
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Pricing plans data
const pricingPlans = [
  {
    name: "Starter",
    price: "490€",
    period: "/mois",
    description: "L'essentiel pour démarrer votre présence en ligne",
    features: [
      "Gestion de 2 réseaux sociaux",
      "8 publications par mois",
      "Modération des commentaires",
      "Rapport mensuel simplifié"
    ],
    highlighted: false,
    buttonText: "Choisir ce forfait"
  },
  {
    name: "Pro",
    price: "890€",
    period: "/mois",
    description: "La solution complète pour développer votre audience",
    features: [
      "Gestion de 3 réseaux sociaux",
      "16 publications par mois",
      "Création de visuels personnalisés",
      "Modération et réponses aux messages",
      "Veille concurrentielle",
      "Rapport mensuel détaillé"
    ],
    highlighted: true,
    buttonText: "Recommandé"
  },
  {
    name: "Premium",
    price: "1490€",
    period: "/mois",
    description: "Une stratégie sur mesure pour maximiser votre impact",
    features: [
      "Gestion de 4 réseaux sociaux",
      "30 publications par mois",
      "Création de contenus avancés (vidéos, animations)",
      "Community management proactif",
      "Stratégie éditoriale personnalisée",
      "Réunion mensuelle de suivi",
      "Rapport d'analyse approfondi"
    ],
    highlighted: false,
    buttonText: "Choisir ce forfait"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-kheops-lightGray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Forfaits <span className="text-kheops-gold">Community Management</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Des formules adaptées à vos besoins pour gérer efficacement votre présence sur les réseaux sociaux.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white">
              <TabsTrigger value="monthly" className="data-[state=active]:bg-kheops-gold data-[state=active]:text-white">Mensuel</TabsTrigger>
              <TabsTrigger value="quarterly" className="data-[state=active]:bg-kheops-gold data-[state=active]:text-white">Trimestriel (-10%)</TabsTrigger>
              <TabsTrigger value="yearly" className="data-[state=active]:bg-kheops-gold data-[state=active]:text-white">Annuel (-15%)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {pricingPlans.map((plan, index) => (
                <motion.div key={index} variants={fadeIn} className="flex">
                  <Card className={`flex flex-col w-full transition-all duration-300 hover:shadow-lg ${
                    plan.highlighted ? 'border-2 border-kheops-gold relative shadow-md' : 'border border-gray-200'
                  }`}>
                    {plan.highlighted && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-kheops-gold text-white text-sm font-bold py-1 px-4 rounded-full">
                        Populaire
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-4 mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                      <CardDescription className="text-gray-600">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-kheops-gold mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${
                          plan.highlighted 
                            ? 'bg-kheops-gold hover:bg-kheops-salmon text-white' 
                            : 'bg-white text-kheops-gold hover:bg-kheops-gold hover:text-white border border-kheops-gold'
                        } transition-all duration-300 mt-auto`}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="quarterly" className="mt-0">
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Nos forfaits trimestriels vous permettent d'économiser 10% sur le prix mensuel.</p>
              <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-all duration-300">
                Contacter un conseiller
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="mt-0">
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Nos forfaits annuels vous permettent d'économiser 15% sur le prix mensuel.</p>
              <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white transition-all duration-300">
                Contacter un conseiller
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
