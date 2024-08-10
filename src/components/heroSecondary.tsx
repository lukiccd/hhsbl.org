
import { Facebook, Instagram, PhoneCall } from 'lucide-react'
import Link from 'next/link'


const HeroSecondary = ({
   title,
   author,
   date,
   shareable,
   coverUrl,
}: {
   title: string,
   author?: string,
   date?: string,
   shareable?: boolean
   coverUrl?: string
}) => {
   const containerStyle: React.CSSProperties = {
      position: 'relative',
      width: '100%', // or your desired width
      height: '100%', // or your desired height
      overflow: 'hidden',
   };
   const backgroundStyle: React.CSSProperties = {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(http://localhost:1337/uploads/large_IMG_4587_79cc9e48dd.jpg)',
      backgroundSize: 'cover', // or 'contain'
      backgroundPosition: 'center',
      filter: 'blur(5px) brightness(0.8)',
      zIndex: -1,
   };
   return (
      <>
         <section
            style={{ backgroundImage: `url(${coverUrl})` }}
            className='bg-cover bg-center xl:h-[70vh] h-[50vh] flex justify-start py-10'>
            <article className='container mx-auto flex flex-col xl:flex-col items-start justify-between px-5 md:px-10 xl:px-0 '>
               <p className='text leading-5'><span className=''>Храм Христа Спаситеља </span>{'>'} <span className=''>Новости </span>{'>'} <span className='underline font-bold'>{title}</span></p>
               <div className='max-w-[40%]'>
                  <span className='text-xs md:text-sm'>{date ? String(date) : ''} {author ? '- ' + String(author) : ''} </span>
                  <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold gradient-title break-words'>{title}</h1>
               </div>

               {shareable && <div className='flex gap-2 xl:text-sm'>Подјели вијест на
                  <Link href={''}>
                     <Facebook />
                  </Link>
                  <Link href={''}>
                     <Instagram />
                  </Link>
                  <Link href={''}>
                     <PhoneCall />
                  </Link>
               </div>}

            </article>
         </section>
      </>
   )
}

export default HeroSecondary