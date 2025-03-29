
import { Ebook } from "@/types";

export const ebooks: Ebook[] = [
  {
    id: "ebook-1",
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
    format: ["PDF", "EPUB"]
  },
  {
    id: "ebook-2",
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
    format: ["PDF", "EPUB", "MOBI"]
  }
];
