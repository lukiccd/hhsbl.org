import React from 'react'
import Mapbox from './Mapbox'
import FooterLogo from '../../public/logo-footer.svg'
import Image from 'next/image'
import FacebookLogo from '../../public/lucide/facebook.svg'
import InstagramLogo from '../../public/lucide/instagram.svg'
import WhatsAppLogo from '../../public/lucide/phone-call.svg'
import Link from 'next/link'

const MapSection = () => {
   return (
      <div className='flex flex-col items-center justify-center mt-20'>
         <Image src={FooterLogo} alt={'logo-podnozje'} width={250} height={250} />
         <span className='flex gap-2 justify-center items-center mt-10'>
            <Link href={''}>
               <Image src={FacebookLogo} alt={''} width={30} />
            </Link>

            <Link href={''}>
               <Image src={InstagramLogo} alt={''} width={30} />
            </Link>

            <Link href={''}>
               <Image src={WhatsAppLogo} alt={''} width={30} />
            </Link>
         </span>
         <Mapbox />
         
      </div>
   )
}

export default MapSection