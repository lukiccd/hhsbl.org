import React from 'react'
import Image from 'next/image'
import Logo from '../../public/hram-hrista-spasitelja-logo.svg';

const NavBar = () => {
   return (
      <nav className='absolute top-5 flex flex-row xl:flex-row justify-between items-center xl:w-full xl:ps-20 xl:pe-10 xl:right-0 xl:left-0 xl:top-0 xl:h-24 '>
         <article className='flex flex-row justify-center items-center'>
            <Image src={Logo} alt={'hram-hrista-spasitelja-logo'} width={50} height={50}/>
            <span className='text-base font-bold xl:m-16 xl:ms-3 '>Храм Христа Спаситеља<br /><span className='font-normal'>Бања Лука</span></span>
            <ul className='hidden xl:flex xl:flex-row gap-5 font-normal '>
               <li className='text-base'>Свештенство</li>
               <li className='text-base'>Историјат</li>
               <li className='text-base'>Новости</li>
               <li className='text-base'>Распоред богослужења</li>
               <li className='text-base'>Контакт</li>
            </ul>
         </article>
         <article className='xl:flex flex-col text-right hidden'>
            <span className='text-xs flex flex-col'>
               Данас је 22. април 2024. године
               <span className='font-bold text-xl'>Свети мученик Евпсихиje</span>
            </span>
            <span className='text-yellowColor text-xs mt-3'>Погледај <span className='underline font-bold'>Црквени календар</span></span>
         </article>
      </nav>
   )
}

export default NavBar