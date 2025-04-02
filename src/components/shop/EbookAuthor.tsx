
import React from 'react';
import { Author } from '@/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface EbookAuthorProps {
  author: Author;
}

const EbookAuthor = ({ author }: EbookAuthorProps) => {
  if (!author) return null;
  
  const initials = author.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-8">
      <Avatar className="h-16 w-16 border-2 border-kheops-gold/20">
        {author.imageUrl ? (
          <AvatarImage src={author.imageUrl} alt={author.name} />
        ) : (
          <AvatarFallback className="bg-kheops-gold/10 text-kheops-gold">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
      
      <div>
        <h3 className="font-bold text-lg">{author.name}</h3>
        <p className="text-gray-600 italic">{author.role}</p>
      </div>
    </div>
  );
};

export default EbookAuthor;
