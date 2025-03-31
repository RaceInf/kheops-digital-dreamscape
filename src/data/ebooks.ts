
import { Ebook } from "@/types";

export const ebooks: Ebook[] = [
  {
    id: "ebook-1",
    slug: "guide-du-marketing-digital",
    title: "Guide du Marketing Digital",
    subtitle: "Stratégies efficaces pour le marché africain",
    description: "Un guide pratique pour développer votre présence en ligne et exploiter les opportunités du marketing digital en Afrique.",
    fullDescription: "Ce guide complet vous emmène à travers toutes les étapes nécessaires pour bâtir une stratégie de marketing digital performante adaptée au contexte africain. Découvrez comment utiliser les réseaux sociaux, l'email marketing, le SEO et bien plus encore pour développer votre activité. Vous apprendrez à analyser votre audience, créer du contenu engageant et mesurer vos résultats pour optimiser vos campagnes.\n\nQue vous soyez entrepreneur, responsable marketing ou consultant, cet ebook vous fournit des outils concrets, des études de cas et des méthodes éprouvées pour réussir dans l'univers digital en Afrique.",
    price: 15000,
    imageUrl: "/images/ebook-marketing-digital.jpg",
    features: [
      "10 stratégies pour développer votre audience",
      "Guide étape par étape pour le SEO local",
      "Templates de campagnes email",
      "Études de cas de réussites africaines",
      "Outils d'analyse et de mesure adaptés"
    ],
    publishedDate: "2023-09-15",
    pages: 156,
    language: "Français",
    format: ["PDF", "EPUB"],
    category: "marketing-digital",
    author: {
      name: "Jean Dupont",
      title: "Expert en Marketing Digital",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    tableOfContents: [
      { title: "Introduction au marketing digital", anchor: "introduction" },
      { title: "Analyse de marché africain", anchor: "analyse-marche" },
      { title: "Stratégies de contenu efficaces", anchor: "strategies-contenu" },
      { title: "Les réseaux sociaux en Afrique", anchor: "reseaux-sociaux" },
      { title: "SEO local et référencement", anchor: "seo-local" },
      { title: "Email marketing adapté", anchor: "email-marketing" },
      { title: "Mesure et optimisation", anchor: "mesure-optimisation" }
    ],
    faq: [
      {
        question: "Ce guide est-il adapté aux débutants ?",
        answer: "Oui, ce guide est conçu pour être accessible aux débutants tout en offrant des stratégies avancées pour les professionnels."
      },
      {
        question: "Les stratégies fonctionnent-elles dans tous les pays africains ?",
        answer: "Les principes fondamentaux s'appliquent partout, mais le guide propose des adaptations spécifiques pour différentes régions d'Afrique."
      },
      {
        question: "Recevrai-je des mises à jour gratuites ?",
        answer: "Oui, toutes les mises à jour mineures sont gratuites pendant 1 an après votre achat."
      },
      {
        question: "Puis-je partager cet ebook avec mon équipe ?",
        answer: "L'achat inclut une licence pour un utilisateur. Des licences multi-utilisateurs sont disponibles pour les équipes."
      }
    ]
  },
  {
    id: "ebook-2",
    slug: "entrepreneuriat-digital",
    title: "Entrepreneuriat Digital",
    subtitle: "Lancer et développer votre business en ligne",
    description: "Découvrez comment créer et faire croître votre entreprise digitale avec des stratégies adaptées au contexte africain.",
    fullDescription: "Cet ebook complet est votre ressource essentielle pour naviguer dans le monde de l'entrepreneuriat digital en Afrique. De l'idéation à la mise en œuvre, en passant par le financement et la croissance, chaque chapitre aborde un aspect crucial de la création d'entreprise en ligne.\n\nVous y trouverez des conseils pratiques sur la validation de votre idée, l'élaboration d'un business plan solide, l'acquisition de vos premiers clients et la mise en place de systèmes efficaces. Les exemples et témoignages d'entrepreneurs africains qui ont réussi vous inspireront et vous montreront les stratégies gagnantes dans notre contexte local.",
    price: 20000,
    imageUrl: "/images/ebook-entrepreneuriat.jpg",
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
    author: {
      name: "Marie Kouassi",
      title: "Entrepreneure & Consultante en Innovation",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    tableOfContents: [
      { title: "L'écosystème entrepreneurial africain", anchor: "ecosysteme" },
      { title: "Validation de concept et MVP", anchor: "validation-concept" },
      { title: "Business model canvas adapté", anchor: "business-model" },
      { title: "Financement et levée de fonds", anchor: "financement" },
      { title: "Marketing digital à budget réduit", anchor: "marketing-digital" },
      { title: "Aspects juridiques et fiscaux", anchor: "aspects-juridiques" },
      { title: "Stratégies de croissance durable", anchor: "strategies-croissance" }
    ],
    faq: [
      {
        question: "Ai-je besoin de compétences techniques pour suivre ce guide ?",
        answer: "Non, le guide est conçu pour être accessible à tous les entrepreneurs, y compris ceux sans background technique."
      },
      {
        question: "Les modèles de documents sont-ils personnalisables ?",
        answer: "Oui, tous les templates inclus sont fournis en formats modifiables (Word, Excel, et Google Docs)."
      },
      {
        question: "Le guide est-il adapté si j'ai déjà lancé mon entreprise ?",
        answer: "Absolument, plusieurs chapitres sont dédiés à l'optimisation et à la croissance d'une entreprise existante."
      },
      {
        question: "Combien de temps faut-il pour appliquer les méthodes du guide ?",
        answer: "Le guide propose un plan d'action sur 90 jours, mais vous pouvez l'adapter à votre propre rythme."
      }
    ]
  }
];
