
import React from 'react';
import { Link } from 'react-router-dom';
import { Ebook } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Book } from 'lucide-react';

interface RelatedEbooksProps {
  currentEbookId: string;
  currentCategory?: string;
  ebooks: Ebook[];
}

const RelatedEbooks = ({ currentEbookId, currentCategory, ebooks }: RelatedEbooksProps) => {
  // Filter ebooks to show only those in the same category and not the current one
  const relatedEbooks = ebooks
    .filter(ebook => 
      ebook.id !== currentEbookId && 
      (currentCategory ? ebook.category === currentCategory : true)
    )
    .slice(0, 3);

  if (relatedEbooks.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-xl font-bold mb-6">Vous aimerez aussi</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedEbooks.map(ebook => (
          <Link to={`/shop/${ebook.id}`} key={ebook.id}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow border-2 hover:border-kheops-gold/50">
              <div className="aspect-[3/2] w-full relative bg-gray-100">
                {ebook.imageUrl ? (
                  <img 
                    src={ebook.imageUrl} 
                    alt={ebook.title} 
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-kheops-gold/10">
                    <Book size={40} className="text-kheops-gold/50" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium line-clamp-1 mb-1">{ebook.title}</h3>
                <p className="text-kheops-salmon font-bold">{ebook.price.toLocaleString()} FCFA</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedEbooks;
