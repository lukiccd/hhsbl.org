import React from 'react'

import { Facebook, Instagram, PhoneCall } from 'lucide-react'
import Link from 'next/link'


const HeroSecondary = () => {
   return (
      <>
         <section className='bg-hero-backround-blog bg-cover bg-center xl:h-[70vh] h-[50vh] flex justify-start py-10'>
            <article className='container mx-auto flex flex-col xl:flex-col items-start justify-between px-5 md:px-10 xl:px-0 '>
               <p className='text-xs leading-5 '><span className='underline'>Храм Христа Спаситеља </span>{'>'} <span className='underline'>Новости </span>{'>'} Васкрс у Храму 2024. Љета Господњег</p>
               <div>
                  <span className='text-xs md:text-xl'>23.август 2024. - отац Лазар Балабан </span>
                  <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>Васкрс у Храму 2024. <br/> Љета Господњег</h1>
               </div>

               <div className='flex gap-2 xl:text-sm'>Подјели вијест на 
                  <Link href={''}>
                        <Facebook />
                  </Link>
                  <Link href={''}>
                        <Instagram />
                  </Link>
                  <Link href={''}>
                        <PhoneCall />
                  </Link>
               </div>

            </article>
         </section>
      </>
   )
}

export default HeroSecondary