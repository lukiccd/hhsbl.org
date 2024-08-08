import { Facebook, Instagram, PhoneCall } from 'lucide-react';
import React from 'react';

interface IconsProperty {
   iconsColor?: string;
   textColor?: string;
   divProperty?: string;
}

const ShareArticle = ({ iconsColor, textColor, divProperty }: IconsProperty) => {
  return (
    <div className={`text-${textColor} text-black/50 ${divProperty} flex gap-2 xl:text-sm`}>
      Подјели вијест на 
      <span className='flex gap-2 justify-center items-center'>
        <Facebook color={iconsColor} />
        <Instagram color={iconsColor}/>
        <PhoneCall color={iconsColor} />
      </span>
    </div>
  );
}

export default ShareArticle;
