
import { Ebook } from "@/types";

export const ebooks: Ebook[] = [
  {
    id: "community-manager-de-choc",
  title: "Devenir un Community Manager de Choc",
  subtitle: "Les secrets des pros du marketing digital pour maîtriser les réseaux sociaux",
  description: "Le guide ultime pour créer, animer et fidéliser une communauté en ligne comme un expert.",  
  fullDescription: "Ce livre complet révèle les stratégies et outils des meilleurs professionnels pour exceller en tant que Community Manager. Apprenez à :\n\n- Maîtriser les réseaux sociaux (Facebook, Instagram, LinkedIn...) et choisir les bons canaux\n- Créer du contenu viral et booster l'engagement\n- Gérer les crises et construire une e-réputation solide\n- Analyser les performances avec les bons KPI\n- Collaborer avec des influenceurs et organiser des événements impactants\n\nAvec des conseils pratiques, des études de cas réels et des checklists actionnables, ce guide s'adresse aux débutants comme aux CM expérimentés souhaitant passer au niveau supérieur. Le must-have pour dominer les réseaux en 2024 !",
  price: 14900, // Prix en FCFA
  imageUrl: "/images/ebook-community-manager.jpg",
  images: [
    "/images/ebook-community-manager.jpg",
    "/images/ebook-cm-preview1.jpg",
    "/images/ebook-cm-preview2.jpg"
  ],
  features: [
    "✅ 7 compétences clés à maîtriser absolument", 
    "✅ 15 outils pro (Hootsuite, Canva, Brandwatch...)",
    "✅ Templates de calendrier éditorial et réponse aux crises",
    "✅ Méthodes pour +200% d'engagement",
    "✅ Accès exclusif à une checklist CM"
    ],
    publishedDate: "2023-09-15",
    pages: 156,
    language: "Français",
    format: ["PDF", "EPUB"],
    category: "marketing",
    tableOfContents: [
      { id: "chap1", title: "Introduction au marketing digital en Afrique", level: 1 },
      { id: "chap1-1", title: "Les spécificités du marché africain", level: 2 },
      { id: "chap1-2", title: "Opportunités et défis", level: 2 },
      { id: "chap2", title: "Stratégies de référencement (SEO)", level: 1 },
      { id: "chap2-1", title: "Optimisation on-page", level: 2 },
      { id: "chap2-2", title: "Optimisation off-page", level: 2 },
      { id: "chap3", title: "Marketing sur les réseaux sociaux", level: 1 },
      { id: "chap4", title: "Email marketing", level: 1 },
      { id: "chap5", title: "Analyse et mesure de performance", level: 1 }
    ],
    faq: [
      { 
        question: "Ce guide est-il adapté aux débutants ?", 
        answer: "Oui, ce guide est conçu pour être accessible aux débutants tout en offrant des stratégies avancées pour les professionnels expérimentés."
      },
      { 
        question: "Quels formats sont disponibles pour cet ebook ?", 
        answer: "L'ebook est disponible en formats PDF et EPUB, ce qui vous permet de le lire sur tous vos appareils."
      },
      { 
        question: "Comment recevoir ma copie après l'achat ?", 
        answer: "Après votre achat, vous recevrez un lien de téléchargement par email dans les 5 minutes."
      },
      { 
        question: "Y a-t-il des mises à jour gratuites ?", 
        answer: "Oui, vous bénéficiez des mises à jour gratuites pendant un an après votre achat."
      }
    ],
    author: {
      name: "Dr. Amina Konaté",
      role: "Experte en Stratégies Digitales",
      imageUrl: "/placeholder.svg"
    }
  },
  {
    id: "ebook-2",
    title: "Entrepreneuriat Digital",
    subtitle: "Lancer et développer votre business en ligne",
    description: "Découvrez comment créer et faire croître votre entreprise digitale avec des stratégies adaptées au contexte africain.",
    fullDescription: "Cet ebook complet est votre ressource essentielle pour naviguer dans le monde de l'entrepreneuriat digital en Afrique. De l'idéation à la mise en œuvre, en passant par le financement et la croissance, chaque chapitre aborde un aspect crucial de la création d'entreprise en ligne.\n\nVous y trouverez des conseils pratiques sur la validation de votre idée, l'élaboration d'un business plan solide, l'acquisition de vos premiers clients et la mise en place de systèmes efficaces. Les exemples et témoignages d'entrepreneurs africains qui ont réussi vous inspireront et vous montreront les stratégies gagnantes dans notre contexte local.",
    price: 20000,
    imageUrl: "/images/ebook-entrepreneuriat.jpg",
    images: [
      "/images/ebook-entrepreneuriat.jpg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    features: [
      "Méthodologie de validation d'idée",
      "Templates de business plan adaptés",
      "Stratégies d'acquisition client à budget réduit",
      "Guide de financement pour startups africaines",
      "Conseils juridiques et administratifs"
    ],
    publishedDate: "2023-11-10",
    pages: 210,
    language: "Français",
    format: ["PDF", "EPUB", "MOBI"],
    category: "entrepreneuriat",
    tableOfContents: [
      { id: "chap1", title: "Fondamentaux de l'entrepreneuriat digital", level: 1 },
      { id: "chap1-1", title: "Différences avec l'entrepreneuriat traditionnel", level: 2 },
      { id: "chap1-2", title: "Avantages et inconvénients", level: 2 },
      { id: "chap2", title: "Recherche et validation d'idées", level: 1 },
      { id: "chap3", title: "Business model pour entreprises digitales", level: 1 },
      { id: "chap4", title: "Financement et bootstrapping", level: 1 },
      { id: "chap5", title: "Marketing et acquisition client", level: 1 },
      { id: "chap6", title: "Aspects juridiques et fiscaux", level: 1 },
      { id: "chap7", title: "Études de cas inspirantes", level: 1 }
    ],
    faq: [
      { 
        question: "Ai-je besoin de compétences techniques pour utiliser ce guide ?", 
        answer: "Non, ce guide est conçu pour être utilisable par des entrepreneurs sans compétences techniques particulières."
      },
      { 
        question: "Ce guide est-il spécifique à certains pays africains ?", 
        answer: "Le guide couvre des principes applicables à l'ensemble de l'Afrique, avec des exemples spécifiques pour différentes régions."
      },
      { 
        question: "Combien de temps faut-il pour lire cet ebook ?", 
        answer: "La lecture complète prend environ 6-8 heures, mais le guide est conçu pour être consulté par sections selon vos besoins."
      },
      { 
        question: "Des ressources supplémentaires sont-elles incluses ?", 
        answer: "Oui, l'ebook inclut des modèles de documents, des listes de vérification et des liens vers des ressources complémentaires."
      }
    ],
    author: {
      name: "Jean-Marc Diplo",
      role: "Entrepreneur et Business Angel",
      imageUrl: "/placeholder.svg"
    }
  },
  {
    id: "ebook-3",
    title: "Communication Digitale Efficace",
    subtitle: "Techniques pour engager et convertir votre audience",
    description: "Apprenez à communiquer efficacement en ligne pour atteindre vos objectifs commerciaux et construire une marque forte.",
    fullDescription: "La communication digitale est au cœur de toute stratégie de marque réussie aujourd'hui. Cet ebook vous guide à travers les meilleures pratiques pour créer une communication percutante qui résonne avec votre audience cible.\n\nVous découvrirez comment élaborer une stratégie de contenu cohérente, rédiger des messages qui convertissent et utiliser le storytelling pour créer une connexion émotionnelle avec vos clients. Des techniques de copywriting aux stratégies visuelles, cet ouvrage couvre tous les aspects essentiels de la communication digitale moderne.",
    price: 18000,
    imageUrl: "/placeholder.svg",
    features: [
      "Frameworks de storytelling pour marques",
      "Techniques de copywriting qui convertissent",
      "Stratégies de communication de crise",
      "Calendrier éditorial clé en main",
      "Méthodes d'analyse de l'engagement"
    ],
    publishedDate: "2023-12-05",
    pages: 185,
    language: "Français",
    format: ["PDF", "EPUB"],
    category: "communication",
    tableOfContents: [
      { id: "chap1", title: "Fondamentaux de la communication digitale", level: 1 },
      { id: "chap2", title: "Storytelling de marque", level: 1 },
      { id: "chap3", title: "Copywriting qui convertit", level: 1 },
      { id: "chap4", title: "Communication visuelle", level: 1 },
      { id: "chap5", title: "Stratégies de contenu", level: 1 }
    ],
    faq: [
      { 
        question: "À qui s'adresse cet ebook ?", 
        answer: "Aux entrepreneurs, responsables marketing, community managers et toute personne impliquée dans la communication d'une marque."
      },
      { 
        question: "Faut-il être un expert en marketing pour comprendre le contenu ?", 
        answer: "Non, l'ebook est accessible aux débutants tout en offrant des techniques avancées pour les professionnels."
      }
    ],
    author: {
      name: "Sophie Mensah",
      role: "Consultante en Communication Digitale",
      imageUrl: "/placeholder.svg"
    }
  }
];
