
import React from 'react';
import { Author } from '@/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

interface EbookAuthorProps {
  author: Author;
  className?: string;
}

const EbookAuthor = ({ author, className = '' }: EbookAuthorProps) => {
  if (!author) return null;
  
  const initials = author.name
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-4 p-4 bg-gray-50 rounded-lg ${className}`}
    >
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
    </motion.div>
  );
};

export default EbookAuthor;
