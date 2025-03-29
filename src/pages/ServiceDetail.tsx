
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/shop/WhatsAppButton";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface ServiceInfo {
  id: string;
  title: string;
  icon: JSX.Element;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  image: string;
}

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Define all services here
  const services: Record<string, ServiceInfo> = {
    "community-management": {
      id: "community-management",
      title: "Community Management",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>,
      shortDescription: "Stratégies ciblées pour renforcer votre présence sur les réseaux sociaux et engager votre audience de manière authentique.",
      longDescription: "Le community management est au cœur de votre stratégie digitale. Chez KHEOPS SET DIGITAL, nous créons et gérons votre présence en ligne pour établir une relation forte avec votre communauté. Notre approche personnalisée stimule l'engagement, renforce votre image de marque et transforme vos abonnés en clients fidèles.",
      benefits: [
        "Augmentation de la visibilité de votre marque",
        "Création d'une communauté engagée et fidèle",
        "Gestion professionnelle de votre réputation en ligne",
        "Analyse régulière des performances pour optimiser la stratégie"
      ],
      features: [
        "Audit et analyse de votre présence actuelle sur les réseaux sociaux",
        "Définition d'une stratégie éditoriale sur mesure",
        "Création et planification de contenus engageants",
        "Animation quotidienne de vos réseaux sociaux",
        "Modération et interaction avec votre communauté",
        "Veille concurrentielle et benchmarking",
        "Reporting mensuel détaillé"
      ],
      process: [
        {
          title: "Analyse",
          description: "Nous étudions votre marque, vos objectifs, votre cible et votre positionnement actuel sur les réseaux sociaux."
        },
        {
          title: "Stratégie",
          description: "Nous élaborons une stratégie éditoriale alignée avec vos objectifs commerciaux et votre identité de marque."
        },
        {
          title: "Création",
          description: "Nous produisons des contenus de qualité adaptés à chaque plateforme pour maximiser l'engagement."
        },
        {
          title: "Animation",
          description: "Nous gérons vos comptes au quotidien en créant une véritable relation avec votre communauté."
        }
      ],
      faqs: [
        {
          question: "Sur quels réseaux sociaux intervenez-vous ?",
          answer: "Nous intervenons sur tous les réseaux sociaux pertinents pour votre activité : Facebook, Instagram, LinkedIn, Twitter, TikTok, Pinterest, et YouTube."
        },
        {
          question: "Quelle est la fréquence de publication recommandée ?",
          answer: "La fréquence optimale dépend de votre secteur et de vos objectifs, mais nous recommandons généralement 3 à 5 publications par semaine pour maintenir une présence active."
        },
        {
          question: "Comment mesurez-vous les résultats ?",
          answer: "Nous utilisons des outils d'analyse performants pour suivre l'évolution de votre communauté, l'engagement, la portée et la conversion. Un rapport mensuel détaillé vous est remis."
        }
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
    },
    "creation-sites-web": {
      id: "creation-sites-web",
      title: "Création de Sites Web",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
      shortDescription: "Sites vitrines et e-commerce modernes, responsives et optimisés pour convertir les visiteurs en clients.",
      longDescription: "Un site web performant est essentiel pour établir votre présence en ligne et développer votre activité. Chez KHEOPS SET DIGITAL, nous concevons des sites web sur mesure qui reflètent l'identité de votre marque, optimisés pour les moteurs de recherche et conçus pour offrir une expérience utilisateur exceptionnelle. Qu'il s'agisse d'un site vitrine élégant ou d'une boutique e-commerce complète, nous créons des plateformes web qui convertissent les visiteurs en clients.",
      benefits: [
        "Site web professionnel reflétant l'identité de votre marque",
        "Expérience utilisateur optimisée pour maximiser les conversions",
        "Compatibilité parfaite sur tous les appareils (responsive design)",
        "Référencement naturel optimisé pour améliorer votre visibilité"
      ],
      features: [
        "Design sur mesure adapté à votre identité visuelle",
        "Intégration de CMS pour une gestion autonome du contenu",
        "Optimisation pour les moteurs de recherche (SEO)",
        "Compatible tous appareils (desktop, tablette, mobile)",
        "Intégration d'outils d'analyse et de suivi",
        "Modules e-commerce sécurisés (si applicable)",
        "Maintenance et support technique"
      ],
      process: [
        {
          title: "Briefing",
          description: "Nous définissons ensemble vos objectifs, vos besoins et vos attentes pour votre site web."
        },
        {
          title: "Conception",
          description: "Nous élaborons une maquette graphique pour visualiser l'apparence de votre futur site."
        },
        {
          title: "Développement",
          description: "Nous développons votre site avec les technologies adaptées à vos besoins spécifiques."
        },
        {
          title: "Tests et optimisation",
          description: "Nous testons votre site sur différents appareils et optimisons ses performances."
        }
      ],
      faqs: [
        {
          question: "Combien de temps faut-il pour créer un site web ?",
          answer: "Le délai varie selon la complexité du projet, mais comptez généralement 4 à 8 semaines pour un site vitrine et 8 à 12 semaines pour un site e-commerce."
        },
        {
          question: "Puis-je modifier moi-même le contenu de mon site ?",
          answer: "Oui, nous intégrons des systèmes de gestion de contenu (CMS) qui vous permettent de mettre à jour facilement votre site sans connaissances techniques."
        },
        {
          question: "Le site sera-t-il optimisé pour le référencement ?",
          answer: "Absolument. Nous appliquons les meilleures pratiques SEO dès la conception pour favoriser votre positionnement dans les résultats de recherche."
        }
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
    },
    "identite-visuelle": {
      id: "identite-visuelle",
      title: "Identité Visuelle",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
      shortDescription: "Logos, chartes graphiques et supports visuels qui reflètent l'unicité de votre marque et marquent les esprits.",
      longDescription: "Votre identité visuelle est le visage de votre entreprise. Elle doit refléter votre personnalité, vos valeurs et se démarquer dans un marché compétitif. Chez KHEOPS SET DIGITAL, nous concevons des identités visuelles mémorables qui racontent votre histoire et créent une connexion émotionnelle avec votre public. Du logo aux supports de communication, nous créons un univers graphique cohérent qui renforce votre image de marque à chaque point de contact.",
      benefits: [
        "Différenciation forte face à la concurrence",
        "Cohérence visuelle sur tous vos supports de communication",
        "Renforcement de la mémorisation de votre marque",
        "Image professionnelle inspirant confiance"
      ],
      features: [
        "Création de logo unique et mémorable",
        "Développement d'une charte graphique complète",
        "Définition de la palette de couleurs et typographies",
        "Création de modèles pour vos supports de communication",
        "Design d'éléments graphiques personnalisés",
        "Adaptation de votre identité à tous les formats",
        "Guide d'utilisation de votre identité visuelle"
      ],
      process: [
        {
          title: "Découverte",
          description: "Nous explorons votre univers, vos valeurs et vos objectifs pour comprendre l'essence de votre marque."
        },
        {
          title: "Recherche",
          description: "Nous étudions votre secteur, votre concurrence et les tendances pour positionner votre identité."
        },
        {
          title: "Création",
          description: "Nous développons plusieurs concepts créatifs avant d'affiner la direction choisie."
        },
        {
          title: "Finalisation",
          description: "Nous peaufinons tous les éléments et préparons votre kit d'identité visuelle complet."
        }
      ],
      faqs: [
        {
          question: "Ai-je besoin d'une identité visuelle complète ou juste d'un logo ?",
          answer: "Bien qu'un logo soit un bon point de départ, une identité visuelle complète assure la cohérence de votre marque sur tous les supports et renforce sa reconnaissance."
        },
        {
          question: "Comment se déroule le processus de création de logo ?",
          answer: "Après un briefing détaillé, nous développons plusieurs concepts que nous vous présentons. Suite à vos retours, nous affinons la proposition choisie jusqu'à obtenir le résultat final."
        },
        {
          question: "Que contient une charte graphique complète ?",
          answer: "Elle inclut généralement votre logo et ses variantes, votre palette de couleurs, vos typographies, vos éléments graphiques, et des directives d'utilisation pour divers supports."
        }
      ],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
    },
    "strategie-digitale": {
      id: "strategie-digitale",
      title: "Stratégie Digitale",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>,
      shortDescription: "Élaboration de feuilles de route digitales complètes pour atteindre vos objectifs commerciaux.",
      longDescription: "Une stratégie digitale efficace est le fondement de votre succès en ligne. Chez KHEOPS SET DIGITAL, nous développons des plans d'action personnalisés qui alignent vos activités numériques avec vos objectifs commerciaux. De l'analyse de votre écosystème digital à la mise en œuvre d'actions cohérentes, nous vous guidons pour maximiser votre impact en ligne et obtenir des résultats concrets.",
      benefits: [
        "Vision claire et cohérente de votre présence digitale",
        "Optimisation de votre investissement marketing",
        "Augmentation mesurable de votre visibilité en ligne",
        "Amélioration continue basée sur l'analyse de données"
      ],
      features: [
        "Audit complet de votre présence digitale actuelle",
        "Analyse de votre marché et de votre concurrence",
        "Définition d'objectifs SMART et d'indicateurs de performance",
        "Élaboration d'un plan d'action personnalisé",
        "Recommandations sur les canaux et tactiques à privilégier",
        "Planification budgétaire et calendrier d'actions",
        "Suivi et optimisation continue"
      ],
      process: [
        {
          title: "Diagnostic",
          description: "Nous analysons votre présence digitale actuelle, votre positionnement et les opportunités de votre marché."
        },
        {
          title: "Élaboration",
          description: "Nous définissons une stratégie adaptée à vos objectifs et au comportement de votre cible."
        },
        {
          title: "Déploiement",
          description: "Nous mettons en œuvre les actions définies selon le calendrier établi."
        },
        {
          title: "Mesure",
          description: "Nous suivons les performances, analysons les résultats et ajustons la stratégie en conséquence."
        }
      ],
      faqs: [
        {
          question: "Pourquoi ai-je besoin d'une stratégie digitale ?",
          answer: "Une stratégie digitale donne une direction claire à vos actions en ligne, évite les dépenses inutiles et maximise l'impact de vos efforts marketing pour atteindre vos objectifs commerciaux."
        },
        {
          question: "Quelle est la durée typique d'une stratégie digitale ?",
          answer: "Nous recommandons généralement une vision à 12 mois, avec des révisions trimestrielles pour s'adapter aux évolutions du marché et aux résultats obtenus."
        },
        {
          question: "Comment mesure-t-on l'efficacité de la stratégie ?",
          answer: "Nous définissons des KPIs (indicateurs clés de performance) spécifiques à vos objectifs et utilisons des outils d'analyse pour suivre votre progression et mesurer le ROI."
        }
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
    "social-media-marketing": {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11h.01"></path><path d="M7 11h.01"></path><path d="M12 18c3.5 0 6-2 6-5v-1a2 2 0 1 0 0-4h-1V6a3 3 0 0 0-3-3c-1.66 0-3 1-3.24 2.5C8.44 5.84 6.88 7 6 7H5a2 2 0 1 0 0 4v1c0 3 2.5 5 6 5Z"></path><path d="M5 8v5c0 1 0 5 7 5s7-4 7-5V8"></path></svg>,
      shortDescription: "Campagnes publicitaires ciblées sur les réseaux sociaux pour augmenter votre visibilité et vos conversions.",
      longDescription: "Le Social Media Marketing va au-delà de la simple présence sur les réseaux sociaux. Chez KHEOPS SET DIGITAL, nous concevons et gérons des campagnes publicitaires hautement ciblées qui atteignent votre audience idéale au moment opportun. Notre expertise en publicité sur les réseaux sociaux vous permet d'augmenter votre visibilité, d'attirer du trafic qualifié et de générer des conversions mesurables, tout en optimisant votre budget publicitaire.",
      benefits: [
        "Ciblage précis de votre audience idéale",
        "Augmentation rapide de votre visibilité",
        "Génération de leads et conversions mesurables",
        "Optimisation continue pour maximiser votre ROI"
      ],
      features: [
        "Définition précise des personas et segments cibles",
        "Création de campagnes sur mesure pour chaque plateforme",
        "Conception de visuels et messages publicitaires impactants",
        "Paramétrage avancé du ciblage publicitaire",
        "Tests A/B pour optimiser les performances",
        "Suivi en temps réel et ajustements stratégiques",
        "Analyse détaillée des résultats et reporting"
      ],
      process: [
        {
          title: "Stratégie",
          description: "Nous définissons les objectifs, cibles et messages clés de vos campagnes publicitaires."
        },
        {
          title: "Création",
          description: "Nous développons des annonces créatives et persuasives adaptées à chaque plateforme."
        },
        {
          title: "Diffusion",
          description: "Nous lançons vos campagnes avec un ciblage précis et une optimisation budgétaire."
        },
        {
          title: "Optimisation",
          description: "Nous analysons les performances en temps réel et ajustons les paramètres pour maximiser les résultats."
        }
      ],
      faqs: [
        {
          question: "Sur quelles plateformes proposez-vous des campagnes publicitaires ?",
          answer: "Nous gérons des campagnes sur Facebook, Instagram, LinkedIn, Twitter, TikTok, Pinterest et YouTube, en fonction de votre audience cible et de vos objectifs."
        },
        {
          question: "Quel budget minimum recommandez-vous pour les publicités sur les réseaux sociaux ?",
          answer: "Le budget minimum dépend de vos objectifs, mais nous recommandons généralement de commencer avec au moins 500€ par mois pour obtenir des résultats significatifs."
        },
        {
          question: "Comment mesurez-vous le succès des campagnes ?",
          answer: "Nous mesurons le succès en fonction des objectifs définis : impressions, clics, engagement, leads, conversions, ou retour sur investissement (ROI)."
        }
      ],
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop"
    },
    "referencement-seo": {
      id: "referencement-seo",
      title: "Référencement SEO",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>,
      shortDescription: "Optimisation de votre visibilité sur les moteurs de recherche pour attirer un trafic qualifié sur votre site.",
      longDescription: "Le référencement naturel (SEO) est essentiel pour être visible auprès de prospects qui recherchent activement vos produits ou services. Chez KHEOPS SET DIGITAL, nous mettons en œuvre des stratégies SEO éprouvées pour améliorer votre positionnement dans les résultats des moteurs de recherche. Notre approche combine optimisation technique, stratégie de contenu et acquisition de liens pour générer un trafic qualifié et durable vers votre site web.",
      benefits: [
        "Visibilité accrue auprès d'une audience qualifiée",
        "Trafic organique durable et croissant",
        "Crédibilité et confiance renforcées",
        "Meilleur retour sur investissement à long terme"
      ],
      features: [
        "Audit SEO complet de votre site web",
        "Recherche et analyse de mots-clés stratégiques",
        "Optimisation on-page (structure, balises, contenu)",
        "Optimisation technique (vitesse, mobile, structure)",
        "Stratégie de contenu optimisé pour le SEO",
        "Acquisition de backlinks de qualité",
        "Suivi de positionnement et rapports mensuels"
      ],
      process: [
        {
          title: "Audit",
          description: "Nous analysons votre site actuel, vos mots-clés et votre positionnement par rapport à la concurrence."
        },
        {
          title: "Stratégie",
          description: "Nous élaborons un plan d'action SEO personnalisé basé sur les opportunités identifiées."
        },
        {
          title: "Optimisation",
          description: "Nous mettons en œuvre les améliorations techniques, structurelles et de contenu."
        },
        {
          title: "Suivi",
          description: "Nous surveillons vos positions, analysons les résultats et ajustons la stratégie en fonction."
        }
      ],
      faqs: [
        {
          question: "Combien de temps faut-il pour voir des résultats en SEO ?",
          answer: "Le SEO est un travail de fond qui demande du temps. Les premiers résultats sont généralement visibles après 3 à 6 mois, mais les effets les plus significatifs se produisent sur 6 à 12 mois."
        },
        {
          question: "Garantissez-vous la première position sur Google ?",
          answer: "Aucun professionnel sérieux ne peut garantir une position spécifique, car les algorithmes des moteurs de recherche évoluent constamment. Nous garantissons cependant l'application des meilleures pratiques et une amélioration progressive de votre visibilité."
        },
        {
          question: "Quelle est la différence entre SEO et SEA ?",
          answer: "Le SEO (référencement naturel) vise à améliorer votre positionnement dans les résultats de recherche organiques, tandis que le SEA (Search Engine Advertising) concerne les annonces payantes. Le SEO offre des résultats durables à long terme, tandis que le SEA génère du trafic immédiat mais s'arrête dès que vous cessez de payer."
        }
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
    }
  };

  // Get the current service 
  const currentService = serviceId ? services[serviceId] : null;

  useEffect(() => {
    // Redirect if service doesn't exist
    if (serviceId && !services[serviceId]) {
      navigate('/services');
      return;
    }

    // Update page title
    if (currentService) {
      document.title = `${currentService.title} | KHEOPS SET DIGITAL`;
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [serviceId, navigate, currentService]);

  if (!currentService) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-kheops-lightGray pt-32 pb-20 overflow-hidden">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div>
              <h1 className="mb-6">
                {currentService.title}
              </h1>
              <p className="text-gray-700 text-lg mb-10">
                {currentService.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-kheops-gold hover:bg-kheops-salmon text-white px-8 py-6 rounded-md transition-all duration-300 text-lg"
                  onClick={() => window.location.href = '#contactez-nous'}
                >
                  Demander un devis
                </Button>
                <WhatsAppButton className="bg-green-600 hover:bg-green-700 px-8 py-6 rounded-md text-lg" />
              </div>
            </div>
            <div>
              <img 
                src={currentService.image} 
                alt={currentService.title} 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </motion.div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-kheops-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-kheops-salmon opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Les <span className="text-kheops-gold">Avantages</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Découvrez pourquoi notre service de {currentService.title} est la solution idéale pour votre entreprise.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {currentService.benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-kheops-lightGray p-8 rounded-lg">
                <div className="w-12 h-12 bg-kheops-gold text-white rounded-full flex items-center justify-center mb-4">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-kheops-gold/10 to-kheops-salmon/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Nos <span className="text-kheops-gold">Services</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Une approche complète et personnalisée pour répondre à tous vos besoins.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {currentService.features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-kheops-gold text-white rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <p className="text-lg">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Notre <span className="text-kheops-gold">Processus</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Une méthodologie éprouvée pour assurer le succès de vos projets de {currentService.title.toLowerCase()}.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gray-200"></div>
            
            {/* Process steps */}
            {currentService.process.map((step, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-kheops-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">{index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-kheops-lightGray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Questions <span className="text-kheops-gold">Fréquentes</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Tout ce que vous devez savoir sur notre service de {currentService.title.toLowerCase()}.
            </p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {currentService.faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contactez-nous" className="py-16 bg-gradient-to-r from-kheops-gold to-kheops-salmon text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">Prêt à transformer votre présence digitale ?</h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Contactez-nous dès aujourd'hui pour discuter de votre projet de {currentService.title.toLowerCase()} et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-kheops-gold hover:bg-gray-100 font-medium px-8 py-6 text-lg"
              >
                Demander un devis
              </Button>
              <WhatsAppButton className="bg-green-600 hover:bg-green-700 border-2 border-white px-8 py-6 text-lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
