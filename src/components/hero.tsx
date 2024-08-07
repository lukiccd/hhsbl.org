import React from 'react'
import NavBar from '@/components/navBar'



const Hero = () => {
   return (
      <section className='w-full h-screen relative flex flex-col px-5'>
         {/* Mobile Background Image */}
         <div className=' hero-pattern-mobile bg-cover bg-center xl:hidden h-full w-full absolute top-0 left-0'></div>
         {/* Desktop Background Image */}
         <div className='ps-5 hero-pattern-desktop bg-cover bg-center hidden xl:block h-full w-full absolute top-0 left-0'></div>

         <NavBar />

         <article className='xl:ps-20 mt-56 relative z-10'>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold mb-4 gradient-text">
               <span className="">Храм Христа</span> <br></br>Спаситеља
            </h1>
            <h2 className="text-white text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-11">
               Бања Лука
            </h2>
            <div className="flex space-x-4 ">
               <button className="bg-transparent border border-yellowColor text-yellowColor py-2 px-4 rounded-full hover:bg-yellowColor hover:text-white transition duration-300">
                  Распоред богослужења
               </button>
               <button className="bg-transparent underline text-white py-2 px-4">
                  Новости
               </button>
            </div>
         </article>

         <article className='flex flex-col text-left mt-10 xl:hidden relative z-10'>
            <span className='text-xs flex flex-col'>
               Данас је 22. април 2024. године
               <span className='font-bold text-xl'>Свети мученик Евпсихиje</span>
            </span>
            <span className='text-yellowColor text-xs mt-3'>Погледај <span className='underline font-bold'>Црквени календар</span></span>
         </article>
      </section>


   )
}

export default Hero