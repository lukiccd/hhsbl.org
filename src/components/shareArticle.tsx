import { Facebook, Instagram, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IconsProperty {
  iconsColor?: string;
  textColor?: string;
  divProperty?: string;
}

const ShareArticle = ({ iconsColor, textColor, divProperty }: IconsProperty) => {
  const pathname = usePathname()
  return (
    <div className={`text-${textColor} text-black/50 ${divProperty} flex gap-2 xl:text-sm`}>
      Подјели вијест на
      <span className='flex gap-2 justify-center items-center'>
        <Link href={`https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=${encodeURI(`${process.env.NEXT_PUBLIC_BASE_DOMAIN}${pathname}`)}`}>
          <Facebook color={iconsColor} />
        </Link>
        <Instagram color={iconsColor} />
        <PhoneCall color={iconsColor} />
      </span>
    </div>
  );
}

export default ShareArticle;
