import React from 'react'

import { Facebook, Instagram } from 'lucide-react'


const HeroSecondary = () => {
   return (
      <>
         <section className='bg-hero-backround-blog bg-cover bg-center h-[70vh] flex justify-start py-10'>
            <article className='container mx-auto flex xl:flex-col items-start justify-between'>
               <span className='text-'>Храм Христа Спаситеља {'>'} Новости {'>'} Васкрс у Храму 2024. Љета Господњег</span>
               <div>
                  <span>23.август 2024. - отац Лазар Балабан </span>
                  <h1 className='xl:text-5xl font-bold'>Васкрс у Храму 2024. <br/> Љета Господњег</h1>
               </div>
               <div className='flex gap-2 xl:text-sm'>Подјели вијест на <span className='flex gap-2'><Facebook /> <Instagram /></span></div>
            </article>
         </section>
      </>
   )
}

export default HeroSecondary