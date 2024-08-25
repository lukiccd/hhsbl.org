"use client"
import ShareArticle from './shareArticle'


const HeroSecondary = ({
   title,
   author,
   date,
   shareable,
   coverUrl,
   category,
}: {
   title: string,
   author?: string,
   date?: string,
   shareable?: boolean
   coverUrl?: string
   category?: string
}) => {

   return (
      <>
         <section
            style={{ backgroundImage: `url(${coverUrl})` }}
            className='bg-cover bg-center xl:h-[70vh] h-[50vh] flex justify-start py-10'>
            <article className='container mx-auto flex flex-col xl:flex-col items-start justify-between px-5 md:px-10 xl:px-0 '>
               <p className='text leading-5'><span className=''>Храм Христа Спаситеља </span>{category && <span className=''>{' > '}{category} </span>}{'>'} <span className='underline font-bold'>{title}</span></p>
               <div className='max-w-[40%]'>
                  <span className='text-xs md:text-sm'>{date ? String(date) + ' - ' : ''} {author ? String(author) : ''} </span>
                  <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold gradient-title break-words'>{title}</h1>
               </div>

               {shareable && <ShareArticle iconsColor='white' textColor='white' />}

            </article>
         </section >
      </>
   )
}

export default HeroSecondary