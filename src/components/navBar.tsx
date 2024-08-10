import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/hram-hrista-spasitelja-logo.svg';

interface NavProperties {
   navStyle?: string,
   innerArticle?: string
}
const NavBar = ({ navStyle, innerArticle }: NavProperties) => {
   return (
      <nav className={` ${navStyle} flex flex-row xl:flex-row justify-between items-center xl:w-full xl:ps-20 xl:pe-10 xl:h-24 `}>
         <article className={`${innerArticle} flex flex-row justify-center items-center  xl:py-0 xl:px-0 gap-5 `}>
            <Link href={'/'} className='flex flex-row gap-2'>
               <Image src={Logo} alt={'hram-hrista-spasitelja-logo'} width={50} height={50} />
               <span className='text-base font-bold xl:m-16 md:ms-3 xl:ms-0 '>Храм Христа Спаситеља<br /><span className='font-normal'>Бања Лука</span></span>
            </Link>
            <ul className='hidden xl:flex xl:flex-row gap-5 font-normal '>
               <li className='text-base hover:underline transition-all ease-in-out'>Свештенство</li>
               <li className='text-base hover:underline transition-all ease-in-out'>Историјат</li>
               <li className='text-base hover:underline transition-all ease-in-out'>Новости</li>
               <li className='text-base hover:underline transition-all ease-in-out'>Распоред богослужења</li>
               <li className='text-base hover:underline transition-all ease-in-out'>Контакт</li>
            </ul>
         </article>
         <article className='xl:flex flex-col text-right hidden '>
            <span className='text-xs flex flex-col'>
               Данас је 22. април 2024. године
               <span className='font-bold text-xl md:text-lg'>Свети мученик Евпсихиje</span>
            </span>
            <span className='text-yellowColor text-xs mt-3 md:mt-1'>Погледај <span className='underline font-bold'>Црквени календар</span></span>
         </article>
      </nav>
   )
}

export default NavBar