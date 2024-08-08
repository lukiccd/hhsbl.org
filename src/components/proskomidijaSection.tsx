import React from 'react'
import Buttons from './buttons'

const ProskomidijaSection = () => {
   return (
      <>
         <section className=' px-2 md:px-0 bg-proskomidijaBackground bg-cover bg-center'>
            <article className='mx-auto container py-16 gap-2 flex flex-col justify-center items-center'>
               <span className='uppercase font-light text-lg md:text-base'>Проскомидија</span>
               <h2 className=' text-center md:text-start text-3xl md:text-5xl font-bold'>Пошаљи име за помен<br />
                  на Светој Литургији </h2>
               <span className='text-white/50 font-light text-xs'>*Само имена крштених у Православној Цркви</span>
               <Buttons buttonWrapper='flex flex-col justify-center items-center' button1Text={'Пошаљи име за помен'} button2Text={'Више о значају проскомидије'} button1Style={'text-xl mt-2 md:mt-10 '} button2Style={'text-sm '} />
            </article>
         </section>
      </>
   )
}

export default ProskomidijaSection