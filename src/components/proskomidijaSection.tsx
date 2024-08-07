import React from 'react'
import Buttons from './buttons'

const ProskomidijaSection = () => {
   return (
      <>
         <section className=' bg-proskomidijaBackground bg-cover bg-center'>
            <article className='mx-auto container py-16 gap-2 flex flex-col'>
               <span className='uppercase font-light'>Проскомидија</span>
               <h2 className='text-5xl font-bold'>Пошаљи име за помен<br />
                  на Светој Литургији </h2>
               <span className='text-white/50 font-light'>*Само имена крштених у Православној Цркви</span>
               <Buttons button1Text={'Пошаљи име за помен'} button2Text={'Више о значају проскомидије'} button1Style={''} button2Style={''} />
            </article>
         </section>
      </>
   )
}

export default ProskomidijaSection