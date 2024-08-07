import { Facebook, Instagram, PhoneCall } from 'lucide-react';
import React from 'react';

interface IconsProperty {
   iconsColor?: string;
   textColor?: string;
}

const ShareArticle = ({ iconsColor, textColor }: IconsProperty) => {
  return (
    <div className={`text-${textColor} flex gap-2 xl:text-sm`}>
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
