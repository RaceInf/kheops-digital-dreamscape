
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  BarChart4, 
  TrendingUp, 
  Clock, 
  Award, 
  Megaphone, 
  Globe, 
  PenTool, 
  BarChart, 
  Search 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shop/WhatsAppButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Define service data
const servicesData = {
  'community-management': {
    title: 'Community Management',
    icon: 'Megaphone',
    heroImage: '/images/services/community-management.jpg',
    description: 'Une gestion professionnelle de vos réseaux sociaux pour développer votre communauté et engager votre audience.',
    overview: `Le Community Management est l'art de gérer et d'animer votre présence sur les réseaux sociaux afin de créer une communauté engagée autour de votre marque. Chez KHEOPS SET DIGITAL, nous proposons une approche stratégique et personnalisée du Community Management, avec pour objectif de transformer vos followers en véritables ambassadeurs de votre marque.`,
    benefits: [
      'Augmentation de votre visibilité sur les réseaux sociaux',
      'Engagement accru de votre audience',
      'Création d'une communauté fidèle autour de votre marque',
      'Humanisation de votre image de marque',
      'Acquisition de nouveaux clients via les plateformes sociales',
      'Veille concurrentielle et identification des tendances'
    ],
    features: [
      {
        title: 'Gestion quotidienne des réseaux sociaux',
        description: 'Nous prenons en charge la gestion complète de vos profils sociaux : publications, interactions avec votre communauté, modération des commentaires, veille et reporting.'
      },
      {
        title: 'Création de contenus engageants',
        description: 'Rédaction et conception de publications adaptées à chaque plateforme, avec une ligne éditoriale cohérente et des visuels professionnels.'
      },
      {
        title: 'Stratégie de contenu personnalisée',
        description: 'Élaboration d'un calendrier éditorial sur mesure en fonction de votre audience, de vos objectifs et des spécificités de votre secteur.'
      },
      {
        title: 'Animation de communauté',
        description: 'Interactions qualitatives avec votre audience pour stimuler l'engagement et créer une relation de proximité avec vos followers.'
      }
    ],
    process: [
      'Audit de votre présence actuelle sur les réseaux sociaux',
      'Définition des objectifs et de la stratégie',
      'Création d'une ligne éditoriale et d'un planning de publication',
      'Mise en œuvre opérationnelle et animation des comptes',
      'Analyse des performances et optimisation continue'
    ],
    faqs: [
      {
        question: 'Sur quels réseaux sociaux intervenez-vous ?',
        answer: 'Nous intervenons sur l'ensemble des plateformes sociales pertinentes pour votre activité : Facebook, Instagram, LinkedIn, Twitter, TikTok, Pinterest, YouTube, etc. Notre recommandation est de se concentrer sur 2 à 3 plateformes stratégiques plutôt que de disperser vos efforts.'
      },
      {
        question: 'Quelle est la fréquence de publication recommandée ?',
        answer: 'La fréquence idéale dépend de votre secteur, de votre audience et des plateformes utilisées. En général, nous recommandons de 3 à 5 publications par semaine sur les plateformes principales. L'important est la régularité et la qualité plutôt que la quantité.'
      },
      {
        question: 'Comment mesurez-vous les résultats ?',
        answer: 'Nous vous fournissons des rapports mensuels détaillés incluant les métriques clés : croissance de l'audience, taux d'engagement, portée des publications, trafic généré vers votre site, conversions, etc. Nous analysons ces données pour ajuster continuellement notre stratégie.'
      },
      {
        question: 'Puis-je garder un droit de regard sur les publications ?',
        answer: 'Absolument ! Nous travaillons en étroite collaboration avec vous. Selon vos préférences, nous pouvons vous soumettre les publications pour validation avant diffusion ou vous proposer un planning mensuel à approuver en amont.'
      }
    ],
    pricing: [
      {
        name: 'Starter',
        price: '490€',
        features: [
          'Gestion de 2 réseaux sociaux',
          '8 publications par mois',
          'Modération des commentaires',
          'Rapport mensuel simplifié'
        ],
        popular: false
      },
      {
        name: 'Pro',
        price: '890€',
        features: [
          'Gestion de 3 réseaux sociaux',
          '16 publications par mois',
          'Création de visuels personnalisés',
          'Modération et réponses aux messages',
          'Veille concurrentielle',
          'Rapport mensuel détaillé'
        ],
        popular: true
      },
      {
        name: 'Premium',
        price: '1490€',
        features: [
          'Gestion de 4 réseaux sociaux',
          '30 publications par mois',
          'Création de contenus avancés (vidéos, animations)',
          'Community management proactif',
          'Stratégie éditoriale personnalisée',
          'Réunion mensuelle de suivi',
          'Rapport d'analyse approfondi'
        ],
        popular: false
      }
    ]
  },
  'creation-sites-web': {
    title: 'Création de Sites Web',
    icon: 'Globe',
    heroImage: '/images/services/web-creation.jpg',
    description: 'Des sites web modernes, sur mesure et optimisés pour convertir vos visiteurs en clients.',
    overview: `La création de sites web est au cœur de toute stratégie digitale efficace. Chez KHEOPS SET DIGITAL, nous concevons des sites web qui vont bien au-delà de la simple vitrine en ligne. Nos sites sont conçus pour offrir une expérience utilisateur exceptionnelle tout en générant des résultats concrets pour votre entreprise.`,
    benefits: [
      'Image professionnelle et crédibilité renforcée',
      'Acquisition de nouveaux clients 24h/24 et 7j/7',
      'Présentation détaillée de vos produits et services',
      'Optimisation de votre conversion en ligne',
      'Élargissement de votre zone de chalandise',
      'Collecte de données précieuses sur vos clients'
    ],
    features: [
      {
        title: 'Design sur mesure et responsive',
        description: 'Création d'un design unique et adapté à votre image de marque, optimisé pour tous les appareils (ordinateurs, tablettes, smartphones).'
      },
      {
        title: 'Développement front-end et back-end',
        description: 'Programmation complète de votre site avec les technologies les plus performantes pour garantir rapidité, sécurité et évolutivité.'
      },
      {
        title: 'Intégration de fonctionnalités avancées',
        description: 'Mise en place de formulaires, systèmes de réservation, chats en direct, e-commerce, paiement en ligne, espaces membres et autres fonctionnalités selon vos besoins.'
      },
      {
        title: 'Optimisation SEO',
        description: 'Structuration technique de votre site pour un référencement optimal sur les moteurs de recherche dès sa mise en ligne.'
      }
    ],
    process: [
      'Analyse des besoins et définition des objectifs du site',
      'Conception de l'arborescence et des wireframes',
      'Création de la charte graphique et du design',
      'Développement et intégration des fonctionnalités',
      'Tests et optimisations',
      'Formation à l'utilisation du site',
      'Mise en ligne et suivi post-lancement'
    ],
    faqs: [
      {
        question: 'Quels types de sites web créez-vous ?',
        answer: 'Nous développons tous types de sites web : sites vitrines, sites institutionnels, sites e-commerce, blogs, sites événementiels, applications web, intranets... Chaque projet est unique et bénéficie d'une approche sur mesure.'
      },
      {
        question: 'Quels sont les délais de création d'un site web ?',
        answer: 'Les délais varient en fonction de la complexité du projet. Un site vitrine simple peut être réalisé en 3 à 4 semaines, tandis qu'un site e-commerce ou une application web complexe peut nécessiter 2 à 3 mois de développement.'
      },
      {
        question: 'Le site sera-t-il optimisé pour les mobiles ?',
        answer: 'Absolument ! Tous nos sites sont conçus en responsive design, c'est-à-dire qu'ils s'adaptent automatiquement à tous les types d'écrans (ordinateurs, tablettes, smartphones). C'est essentiel aujourd'hui puisque plus de 60% des visites web se font sur mobile.'
      },
      {
        question: 'Proposez-vous l'hébergement et la maintenance du site ?',
        answer: 'Oui, nous proposons des solutions d'hébergement sécurisées et performantes ainsi que des forfaits de maintenance pour garantir le bon fonctionnement de votre site dans la durée (mises à jour techniques, sauvegardes, corrections de bugs, évolutions).'
      }
    ],
    pricing: [
      {
        name: 'Site Vitrine',
        price: 'À partir de 2 490€',
        features: [
          'Jusqu'à 10 pages',
          'Design responsive',
          'Formulaire de contact',
          'Intégration des réseaux sociaux',
          'Optimisation SEO de base',
          'Formation à l'administration'
        ],
        popular: false
      },
      {
        name: 'Site Corporate',
        price: 'À partir de 4 990€',
        features: [
          'Jusqu'à 20 pages',
          'Design personnalisé premium',
          'Blog intégré',
          'Formulaires avancés',
          'Espace médias/presse',
          'Optimisation SEO complète',
          'Multilangue'
        ],
        popular: true
      },
      {
        name: 'E-commerce',
        price: 'À partir de 7 990€',
        features: [
          'Catalogue produits illimité',
          'Gestion des stocks',
          'Paiement sécurisé',
          'Comptes clients',
          'Gestion des promotions',
          'Optimisation des fiches produits',
          'Intégration transporteurs',
          'Dashboard analytique'
        ],
        popular: false
      }
    ]
  },
  'identite-visuelle': {
    title: 'Identité Visuelle',
    icon: 'PenTool',
    heroImage: '/images/services/visual-identity.jpg',
    description: 'Une identité visuelle distinctive et cohérente pour démarquer votre marque et marquer les esprits.',
    overview: `L'identité visuelle est la personnalité graphique de votre entreprise, ce qui vous rend reconnaissable en un coup d'œil. Chez KHEOPS SET DIGITAL, nous créons des identités visuelles mémorables qui reflètent l'essence de votre marque et établissent une connexion émotionnelle avec votre audience.`,
    benefits: [
      'Différenciation face à la concurrence',
      'Renforcement de la reconnaissance de marque',
      'Cohérence dans votre communication',
      'Crédibilité et professionnalisme accrus',
      'Mémorisation facilitée de votre marque',
      'Connexion émotionnelle avec votre cible'
    ],
    features: [
      {
        title: 'Création de logo',
        description: 'Conception d'un logo unique, distinctif et mémorable qui incarne les valeurs et le positionnement de votre marque, avec plusieurs propositions créatives.'
      },
      {
        title: 'Charte graphique complète',
        description: 'Élaboration d'un document de référence définissant l'ensemble des règles d'utilisation de votre identité : logo, typographies, couleurs, iconographie, styles photographiques...'
      },
      {
        title: 'Déclinaisons print et digitales',
        description: 'Adaptation de votre identité visuelle sur l'ensemble de vos supports de communication : cartes de visite, papeterie, enseignes, brochures, bannières web, réseaux sociaux...'
      },
      {
        title: 'Brandbook stratégique',
        description: 'Pour les projets plus ambitieux, création d'un guide complet intégrant l'ADN de marque, le positionnement, la personality, le tone of voice et l'ensemble des applications visuelles.'
      }
    ],
    process: [
      'Briefing et analyse de votre marché, concurrence et cible',
      'Recherche et exploration créative',
      'Présentation des pistes créatives pour le logo',
      'Développement de la piste retenue',
      'Finalisation du logo et de ses déclinaisons',
      'Création de la charte graphique complète',
      'Livraison des fichiers sources dans tous les formats nécessaires'
    ],
    faqs: [
      {
        question: 'Combien de propositions de logos recevrai-je ?',
        answer: 'Nous vous présenterons généralement 3 à 5 pistes créatives différentes pour votre logo. Ces propositions seront toutes pertinentes mais exploreront des directions visuelles variées. Après votre feedback, nous développerons et affinerons la piste retenue.'
      },
      {
        question: 'Quels éléments sont inclus dans une charte graphique ?',
        answer: 'Une charte graphique complète comprend : les règles d'utilisation du logo (tailles minimales, espaces de protection, utilisations interdites), la palette de couleurs (avec références CMJN, RVB, Pantone et Hexadécimales), les typographies principales et secondaires, les styles d'images et d'illustrations, et les applications sur différents supports.'
      },
      {
        question: 'Puis-je faire évoluer mon logo actuel plutôt que d'en créer un nouveau ?',
        answer: 'Tout à fait ! Nous proposons également des services de "rebranding" ou rafraîchissement de logo qui permettent de moderniser votre identité visuelle tout en conservant sa reconnaissance. C'est souvent une bonne solution pour les entreprises avec une notoriété établie.'
      },
      {
        question: 'Quels fichiers recevrai-je à la fin du projet ?',
        answer: 'Vous recevrez tous les fichiers sources de votre logo dans différents formats (AI, EPS, PDF, SVG, PNG, JPG) adaptés à toutes les utilisations print et web. Vous recevrez également la charte graphique au format PDF et, selon les prestations, les templates pour vos différents supports de communication.'
      }
    ],
    pricing: [
      {
        name: 'Essentiel',
        price: 'À partir de 890€',
        features: [
          'Création de logo (3 propositions)',
          'Charte graphique simplifiée',
          'Fichiers aux formats web et print',
          'Carte de visite'
        ],
        popular: false
      },
      {
        name: 'Business',
        price: 'À partir de 1 790€',
        features: [
          'Création de logo (5 propositions)',
          'Charte graphique complète',
          'Papeterie complète (carte de visite, papier à en-tête, signature mail)',
          'Templates réseaux sociaux',
          'Supports de communication de base'
        ],
        popular: true
      },
      {
        name: 'Premium',
        price: 'À partir de 3 490€',
        features: [
          'Brand strategy workshop',
          'Création de logo (conceptuel)',
          'Brandbook complet',
          'Suite complète de templates',
          'Illustrations et iconographie sur mesure',
          'Accompagnement stratégique'
        ],
        popular: false
      }
    ]
  },
  'strategie-digitale': {
    title: 'Stratégie Digitale',
    icon: 'BarChart',
    heroImage: '/images/services/digital-strategy.jpg',
    description: 'Une feuille de route digitale adaptée à vos objectifs pour maximiser votre impact en ligne.',
    overview: `La stratégie digitale est la clé d'une présence en ligne efficace et cohérente. Chez KHEOPS SET DIGITAL, nous élaborons des plans d'action digitaux sur mesure qui s'alignent parfaitement avec vos objectifs commerciaux et votre positionnement sur le marché.`,
    benefits: [
      'Vision claire de vos objectifs digitaux',
      'Cohérence de toutes vos actions en ligne',
      'Optimisation de votre budget marketing',
      'Mesure précise de votre ROI',
      'Adaptabilité aux évolutions du marché',
      'Avantage concurrentiel durable'
    ],
    features: [
      {
        title: 'Audit digital complet',
        description: 'Analyse approfondie de votre présence en ligne actuelle, de votre écosystème digital, de vos performances et identification des opportunités d'amélioration.'
      },
      {
        title: 'Plan stratégique sur mesure',
        description: 'Élaboration d'une feuille de route digitale détaillée avec objectifs, KPIs, canaux prioritaires, planning d'actions et budget prévisionnel.'
      },
      {
        title: 'Mix marketing digital optimal',
        description: 'Définition de la combinaison idéale des leviers digitaux pour atteindre vos objectifs : SEO, SEA, réseaux sociaux, content marketing, email, influence...'
      },
      {
        title: 'Accompagnement à la mise en œuvre',
        description: 'Suivi régulier de l'exécution de la stratégie, analyse des résultats et ajustements tactiques pour maximiser les performances.'
      }
    ],
    process: [
      'Atelier de cadrage pour comprendre vos enjeux et objectifs',
      'Audit de votre situation actuelle et de la concurrence',
      'Définition de votre positionnement digital',
      'Élaboration de la stratégie et du plan d'action',
      'Présentation et validation du plan stratégique',
      'Accompagnement à la mise en œuvre',
      'Analyse des résultats et optimisations'
    ],
    faqs: [
      {
        question: 'Pourquoi ai-je besoin d'une stratégie digitale formalisée ?',
        answer: 'Une stratégie digitale formalisée permet d'aligner toutes vos actions en ligne vers des objectifs clairs, d'optimiser votre budget marketing, d'éviter les actions dispersées et sans cohérence, et de mesurer précisément votre retour sur investissement. C'est votre boussole dans l'univers digital.'
      },
      {
        question: 'À quelle fréquence faut-il réviser sa stratégie digitale ?',
        answer: 'Nous recommandons une révision complète de votre stratégie digitale tous les 12 à 18 mois, avec des ajustements tactiques plus fréquents (trimestriels) en fonction des résultats obtenus et des évolutions du marché. Le digital évolue rapidement, votre stratégie doit s'adapter en conséquence.'
      },
      {
        question: 'Comment mesurez-vous le succès d'une stratégie digitale ?',
        answer: 'Le succès se mesure par l'atteinte des KPIs définis en amont, qui peuvent inclure l'acquisition de trafic, le taux de conversion, l'engagement sur les réseaux sociaux, le coût d'acquisition client, mais surtout l'impact sur votre chiffre d'affaires et votre croissance. Nous mettons en place des tableaux de bord adaptés à vos objectifs.'
      },
      {
        question: 'Peut-on mettre en place une stratégie digitale avec un petit budget ?',
        answer: 'Absolument ! Une bonne stratégie digitale s'adapte à tous les budgets. Pour les entreprises avec des ressources limitées, nous priorisons les actions à fort impact et à faible coût, en privilégiant par exemple le content marketing, le SEO ou les réseaux sociaux organiques avant d'aborder les leviers payants.'
      }
    ],
    pricing: [
      {
        name: 'Diagnostic',
        price: 'À partir de 990€',
        features: [
          'Audit de votre présence digitale',
          'Analyse concurrentielle',
          'Recommandations stratégiques',
          'Présentation des conclusions'
        ],
        popular: false
      },
      {
        name: 'Stratégie Complète',
        price: 'À partir de 2 990€',
        features: [
          'Audit digital approfondi',
          'Workshop stratégique',
          'Plan d'action détaillé sur 12 mois',
          'Mix marketing optimisé',
          'KPIs et tableaux de bord',
          'Présentation stratégique'
        ],
        popular: true
      },
      {
        name: 'Direction Digitale',
        price: 'À partir de 1 290€/mois',
        features: [
          'Stratégie digitale complète',
          'Pilotage de la mise en œuvre',
          'Réunions mensuelles de suivi',
          'Ajustement continu du plan',
          'Rapports d'analyse réguliers',
          'Veille et recommandations'
        ],
        popular: false
      }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    icon: 'Users',
    heroImage: '/images/services/social-media-marketing.jpg',
    description: 'Des campagnes publicitaires ciblées sur les réseaux sociaux pour booster votre visibilité et vos conversions.',
    overview: `Le Social Media Marketing va au-delà du simple Community Management en intégrant une dimension publicitaire stratégique. Chez KHEOPS SET DIGITAL, nous concevons et gérons des campagnes publicitaires sur les réseaux sociaux qui ciblent précisément votre audience pour générer des résultats mesurables et maximiser votre ROI.`,
    benefits: [
      'Ciblage ultra-précis de votre audience idéale',
      'Augmentation rapide de votre visibilité',
      'Génération de trafic qualifié vers votre site',
      'Acquisition de prospects et clients à coût maîtrisé',
      'Augmentation mesurable des conversions',
      'Notoriété de marque amplifiée'
    ],
    features: [
      {
        title: 'Stratégie publicitaire sociale',
        description: 'Élaboration d'une stratégie publicitaire sur-mesure en fonction de vos objectifs commerciaux, de votre audience cible et de votre budget.'
      },
      {
        title: 'Création de campagnes multi-formats',
        description: 'Conception de campagnes publicitaires attractives utilisant les formats les plus performants selon les plateformes : carrousels, vidéos, stories, collections...'
      },
      {
        title: 'Ciblage avancé et segmentation',
        description: 'Définition précise des audiences via les critères socio-démographiques, comportementaux, d'intérêts et création d'audiences similaires pour maximiser l'impact.'
      },
      {
        title: 'Optimisation et scaling',
        description: 'Suivi quotidien des performances, tests A/B continus, ajustements des enchères et du ciblage, et scaling des campagnes performantes pour maximiser les résultats.'
      }
    ],
    process: [
      'Audit de votre présence sociale et de vos campagnes précédentes',
      'Définition des objectifs et des KPIs',
      'Identification des personas et segmentation des audiences',
      'Élaboration de la stratégie publicitaire',
      'Création des visuels et rédaction des accroches',
      'Configuration et lancement des campagnes',
      'Monitoring, optimisation et reporting régulier'
    ],
    faqs: [
      {
        question: 'Sur quelles plateformes lancez-vous des campagnes publicitaires ?',
        answer: 'Nous intervenons sur toutes les principales plateformes sociales : Facebook Ads (incluant Instagram), LinkedIn Ads, Twitter Ads, TikTok Ads, Pinterest Ads, Snapchat Ads. Le choix des plateformes dépend de votre secteur d'activité, de vos objectifs et de votre audience cible.'
      },
      {
        question: 'Quel budget est nécessaire pour des campagnes efficaces ?',
        answer: 'Le budget minimum recommandé varie selon les plateformes et vos objectifs. Pour des campagnes test, nous recommandons un minimum de 500€/mois. Pour des campagnes d'acquisition client régulières, un budget de 1 500€ à 3 000€/mois permet généralement d'obtenir des résultats significatifs et d'optimiser efficacement les campagnes.'
      },
      {
        question: 'Comment mesurez-vous les performances des campagnes ?',
        answer: 'Nous suivons de nombreuses métriques selon vos objectifs : impressions, portée, engagement, taux de clics, trafic généré, leads, coût par acquisition, taux de conversion, retour sur investissement publicitaire (ROAS). Vous recevez des rapports détaillés avec analyse et recommandations.'
      },
      {
        question: 'En combien de temps peut-on voir des résultats ?',
        answer: 'Les réseaux sociaux offrent l'avantage de générer des résultats rapidement. Vous verrez des premiers indicateurs dès les premières 48-72h. Toutefois, une période d'apprentissage de 1 à 2 semaines est souvent nécessaire pour que les algorithmes optimisent correctement la diffusion. Les performances s'améliorent généralement avec le temps grâce à l'optimisation continue.'
      }
    ],
    pricing: [
      {
        name: 'Essentiel',
        price: 'À partir de 690€/mois',
        features: [
          'Gestion d'une plateforme publicitaire',
          'Création de 2 campagnes',
          'Budget media en sus',
          'Optimisation hebdomadaire',
          'Rapport mensuel de performance'
        ],
        popular: false
      },
      {
        name: 'Business',
        price: 'À partir de 1 290€/mois',
        features: [
          'Gestion de 2 plateformes publicitaires',
          'Création de 4-6 campagnes',
          'Création de visuels publicitaires',
          'A/B testing',
          'Budget media en sus',
          'Optimisation bi-hebdomadaire',
          'Rapport détaillé bi-mensuel'
        ],
        popular: true
      },
      {
        name: 'Premium',
        price: 'À partir de 2 490€/mois',
        features: [
          'Gestion de 3+ plateformes publicitaires',
          'Stratégie publicitaire avancée',
          'Création de campagnes illimitées',
          'Production de contenus dédiés',
          'Remarketing multi-niveaux',
          'Budget media en sus',
          'Optimisation quotidienne',
          'Rapport détaillé hebdomadaire',
          'Réunion mensuelle de stratégie'
        ],
        popular: false
      }
    ]
  },
  'referencement-seo': {
    title: 'Référencement SEO',
    icon: 'Search',
    heroImage: '/images/services/seo.jpg',
    description: 'Optimization de votre présence sur les moteurs de recherche pour attirer un trafic qualifié et générer des prospects.',
    overview: `Le référencement naturel (SEO) est l'art de positionner votre site web en tête des résultats de recherche pour les requêtes pertinentes de votre audience. Chez KHEOPS SET DIGITAL, nous mettons en œuvre des stratégies SEO durables et conformes aux meilleures pratiques pour améliorer votre visibilité organique et générer un trafic qualifié.`,
    benefits: [
      'Visibilité accrue sur les moteurs de recherche',
      'Trafic qualifié et ciblé vers votre site',
      'Acquisition de clients à faible coût sur le long terme',
      'Crédibilité et autorité renforcées dans votre secteur',
      'Amélioration de l'expérience utilisateur de votre site',
      'Avantage concurrentiel durable'
    ],
    features: [
      {
        title: 'Audit SEO complet',
        description: 'Analyse approfondie de votre site web et de votre présence en ligne pour identifier les forces, faiblesses et opportunités d'amélioration de votre référencement.'
      },
      {
        title: 'Optimisation technique',
        description: 'Correction des problèmes techniques impactant votre indexation et votre crawl : vitesse du site, structure, balisage, mobile-friendly, sécurité, erreurs 404, etc.'
      },
      {
        title: 'Optimisation on-page',
        description: 'Optimisation du contenu et de la structure de vos pages : balises title et meta descriptions, structure des URL, hiérarchie des titres, optimisation des images, maillage interne...'
      },
      {
        title: 'Stratégie de contenu SEO',
        description: 'Recherche de mots-clés stratégiques, création de contenus optimisés, développement d'un blog thématique, enrichissement sémantique et optimisation de la readability.'
      },
      {
        title: 'Netlinking et autorité',
        description: 'Stratégie d'acquisition de backlinks de qualité pour renforcer l'autorité de votre domaine : relations presse digitale, guest blogging, création de contenus link-worthy...'
      }
    ],
    process: [
      'Audit SEO initial et analyse concurrentielle',
      'Définition de la stratégie et des mots-clés cibles',
      'Optimisation technique et on-page du site',
      'Création et optimisation de contenus',
      'Développement de l'autorité et netlinking',
      'Suivi du positionnement et des performances',
      'Ajustements continus et rapports réguliers'
    ],
    faqs: [
      {
        question: 'En combien de temps peut-on voir des résultats en SEO ?',
        answer: 'Le SEO est un investissement à moyen et long terme. Les premiers résultats sont généralement visibles après 3 à 6 mois de travail, mais l'amélioration continue se poursuit bien au-delà. Pour les sites récents ou dans des secteurs très concurrentiels, il faut parfois patienter 6 à 12 mois pour des résultats significatifs.'
      },
      {
        question: 'Quelle est la différence entre SEO et SEA (Google Ads) ?',
        answer: 'Le SEO (Search Engine Optimization) concerne le référencement naturel, organique, non payant. Il s'agit d'optimiser votre site pour qu'il apparaisse naturellement en haut des résultats de recherche. Le SEA (Search Engine Advertising) désigne les annonces payantes diffusées sur les moteurs de recherche. Ces deux approches sont complémentaires dans une stratégie digitale globale.'
      },
      {
        question: 'Comment se déroule concrètement la prestation SEO ?',
        answer: 'Notre prestation SEO commence par un audit approfondi, suivi de la définition d'une stratégie sur mesure. Nous mettons ensuite en œuvre les optimisations techniques, travaillons sur le contenu du site et développons son autorité. Vous recevez des rapports mensuels détaillant l'évolution de votre positionnement et du trafic organique.'
      },
      {
        question: 'Le SEO fonctionne-t-il pour tous les secteurs d'activité ?',
        answer: 'Oui, mais les stratégies et les résultats varient selon les secteurs. Certains domaines très concurrentiels nécessitent des efforts plus importants et une patience accrue. D'autres niches peuvent obtenir des résultats plus rapides. Dans tous les cas, une stratégie SEO bien exécutée apporte des bénéfices durables à toute entreprise ayant une présence en ligne.'
      }
    ],
    pricing: [
      {
        name: 'Audit SEO',
        price: 'À partir de 990€',
        features: [
          'Analyse technique complète',
          'Audit de contenu',
          'Analyse des backlinks',
          'Étude concurrentielle',
          'Recommandations détaillées'
        ],
        popular: false
      },
      {
        name: 'SEO Essentiel',
        price: 'À partir de 890€/mois',
        features: [
          'Optimisations techniques',
          'Optimisation on-page (5 pages/mois)',
          '1 contenu optimisé par mois',
          'Suivi de positionnement',
          'Rapport mensuel'
        ],
        popular: false
      },
      {
        name: 'SEO Performance',
        price: 'À partir de 1 790€/mois',
        features: [
          'Optimisations techniques avancées',
          'Optimisation on-page (10 pages/mois)',
          '2-3 contenus optimisés par mois',
          'Stratégie de netlinking (3-5 backlinks/mois)',
          'Optimisation locale si pertinent',
          'Suivi avancé des KPIs',
          'Rapport détaillé bi-mensuel'
        ],
        popular: true
      },
      {
        name: 'SEO Premium',
        price: 'À partir de 2 990€/mois',
        features: [
          'Stratégie SEO globale',
          'Optimisations techniques expertes',
          'Optimisation on-page complète',
          'Production de contenus premium',
          'Stratégie de netlinking haute autorité',
          'SEO international si pertinent',
          'Intégration avec votre CRM',
          'Dashboards personnalisés',
          'Réunions stratégiques mensuelles'
        ],
        popular: false
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  
  // Fallback if service is not found
  const defaultServiceId = 'community-management';
  const service = servicesData[serviceId as keyof typeof servicesData] || servicesData[defaultServiceId];
  
  useEffect(() => {
    document.title = `${service.title} | KHEOPS SET DIGITAL`;
    window.scrollTo(0, 0);
  }, [service.title]);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderServiceIcon = (iconName: string) => {
    switch(iconName) {
      case 'Megaphone': return <Megaphone size={64} />;
      case 'Globe': return <Globe size={64} />;
      case 'PenTool': return <PenTool size={64} />;
      case 'BarChart': return <BarChart4 size={64} />;
      case 'Users': return <Users size={64} />;
      case 'Search': return <Search size={64} />;
      default: return <Award size={64} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-kheops-gold/10 to-kheops-salmon/10 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Link to="/services" className="inline-flex items-center text-kheops-gold mb-4 hover:underline">
                <ArrowLeft size={16} className="mr-1" />
                Retour aux services
              </Link>
              <h1 className="mb-4">{service.title}</h1>
              <p className="text-gray-700 text-lg mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <WhatsAppButton 
                  productName={service.title}
                  className="bg-kheops-gold hover:bg-kheops-salmon"
                />
                <Button variant="outline" className="border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white">
                  Demander un devis
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/50 rounded-lg blur-lg"></div>
                <div className="relative bg-white p-4 rounded-lg shadow-lg">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                    {/* Default placeholder if image is not available */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-kheops-gold/30 to-kheops-salmon/30">
                      <span className="text-4xl text-kheops-gold/80">
                        {renderServiceIcon(service.icon)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-kheops-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-kheops-salmon opacity-5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container-custom">
          <Tabs defaultValue="overview" onValueChange={setActiveSection} value={activeSection}>
            <TabsList className="justify-start overflow-x-auto w-full sm:w-auto">
              <TabsTrigger value="overview">Aperçu</TabsTrigger>
              <TabsTrigger value="benefits">Avantages</TabsTrigger>
              <TabsTrigger value="features">Fonctionnalités</TabsTrigger>
              <TabsTrigger value="process">Processus</TabsTrigger>
              <TabsTrigger value="pricing">Tarifs</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="overview" value={activeSection} onValueChange={setActiveSection}>
            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h2 className="mb-6">Aperçu du service</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.overview}</p>
                  
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Pourquoi choisir KHEOPS SET DIGITAL ?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-kheops-lightGray p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Award className="text-kheops-gold mr-3" size={24} />
                          <h4 className="font-bold text-lg">Expertise reconnue</h4>
                        </div>
                        <p>Notre équipe combine des années d'expérience et une formation continue aux dernières tendances.</p>
                      </div>
                      <div className="bg-kheops-lightGray p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Users className="text-kheops-gold mr-3" size={24} />
                          <h4 className="font-bold text-lg">Approche personnalisée</h4>
                        </div>
                        <p>Nous créons des solutions sur mesure adaptées à vos besoins spécifiques et à votre secteur.</p>
                      </div>
                      <div className="bg-kheops-lightGray p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <BarChart4 className="text-kheops-gold mr-3" size={24} />
                          <h4 className="font-bold text-lg">Résultats mesurables</h4>
                        </div>
                        <p>Nous nous engageons sur des objectifs concrets et mesurons précisément nos résultats.</p>
                      </div>
                      <div className="bg-kheops-lightGray p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Clock className="text-kheops-gold mr-3" size={24} />
                          <h4 className="font-bold text-lg">Accompagnement continu</h4>
                        </div>
                        <p>Nous restons à vos côtés tout au long du projet pour garantir votre satisfaction.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-6">Prêt à démarrer ?</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <WhatsAppButton productName={service.title} className="bg-kheops-gold hover:bg-kheops-salmon" />
                      <Button variant="outline" className="border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white">
                        Demander un devis
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Benefits Tab */}
            <TabsContent value="benefits" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-10 text-center">Les avantages pour votre entreprise</h2>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {service.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start">
                        <div className="bg-kheops-gold/10 p-3 rounded-full mr-4">
                          <Check className="text-kheops-gold" size={20} />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <div className="mt-12 text-center">
                  <Button 
                    className="bg-kheops-gold hover:bg-kheops-salmon text-white"
                    onClick={() => setActiveSection('features')}
                  >
                    Découvrir nos fonctionnalités
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Features Tab */}
            <TabsContent value="features" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-10 text-center">Fonctionnalités détaillées</h2>
                
                <div className="space-y-8">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                    >
                      <h3 className="text-xl font-bold mb-3 text-kheops-gold">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Button 
                    className="bg-kheops-gold hover:bg-kheops-salmon text-white"
                    onClick={() => setActiveSection('process')}
                  >
                    Découvrir notre processus
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Process Tab */}
            <TabsContent value="process" className="mt-0">
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-10 text-center">Notre méthodologie</h2>
                
                <div className="relative">
                  {/* Vertical line for desktop */}
                  <div className="hidden md:block absolute left-[calc(2rem+4px)] top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
                  
                  <div className="space-y-12">
                    {service.process.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-10 h-10 bg-kheops-gold text-white rounded-full flex items-center justify-center text-lg font-bold mr-6">
                            {index + 1}
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex-grow">
                          <p className="text-gray-700 text-lg">{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <Button 
                    className="bg-kheops-gold hover:bg-kheops-salmon text-white"
                    onClick={() => setActiveSection('pricing')}
                  >
                    Voir nos tarifs
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Pricing Tab */}
            <TabsContent value="pricing" className="mt-0">
              <div className="max-w-6xl mx-auto">
                <h2 className="mb-10 text-center">Nos formules et tarifs</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.pricing.map((plan, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className={`flex flex-col w-full rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
                        plan.popular ? 'border-2 border-kheops-gold relative shadow-md' : 'border border-gray-200'
                      }`}>
                        {plan.popular && (
                          <div className="absolute top-0 right-0 bg-kheops-gold text-white text-sm font-bold py-1 px-4 rounded-bl-lg">
                            Recommandé
                          </div>
                        )}
                        
                        <div className="bg-white p-6 text-center border-b border-gray-100">
                          <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                          <div className="mt-2 mb-4">
                            <span className="text-3xl font-bold">{plan.price}</span>
                          </div>
                        </div>
                        
                        <div className="bg-white p-6 flex-grow">
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-kheops-gold mr-2 mt-1">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mt-auto">
                            <WhatsAppButton 
                              productName={`${service.title} - Formule ${plan.name}`}
                              className={`w-full ${plan.popular ? 'bg-kheops-gold hover:bg-kheops-salmon' : 'bg-kheops-salmon hover:bg-kheops-gold'}`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 bg-kheops-lightGray p-8 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-4">Besoin d'une solution sur mesure ?</h3>
                  <p className="text-gray-700 mb-6">Nous adaptons nos services à vos besoins spécifiques. Contactez-nous pour discuter de votre projet.</p>
                  <Button 
                    className="bg-kheops-gold hover:bg-kheops-salmon text-white"
                  >
                    Demander un devis personnalisé
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* FAQ Tab */}
            <TabsContent value="faq" className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h2 className="mb-10 text-center">Questions fréquentes</h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                        <span className="text-left font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-bold mb-4">Vous avez d'autres questions ?</h3>
                  <p className="text-gray-700 mb-6">N'hésitez pas à nous contacter pour en savoir plus sur nos services.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <WhatsAppButton productName={service.title} className="bg-kheops-gold hover:bg-kheops-salmon" />
                    <Link to="/contact">
                      <Button variant="outline" className="border-kheops-gold text-kheops-gold hover:bg-kheops-gold hover:text-white">
                        Nous contacter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kheops-gold to-kheops-salmon text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">Prêt à transformer votre présence digitale ?</h2>
            <p className="text-white opacity-90 mb-8 text-lg">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton className="bg-white text-kheops-gold hover:bg-gray-100 hover:text-kheops-salmon" variant="outline" />
              <Link to="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kheops-gold font-medium">
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
