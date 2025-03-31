
export interface Ebook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  price: number;
  imageUrl: string;
  features: string[];
  publishedDate: string;
  pages: number;
  language: string;
  format: string[];
  category: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  tableOfContents: {
    title: string;
    anchor: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}
