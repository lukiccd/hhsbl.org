import React from 'react'
import Image from 'next/image'
import FirstImage from '../../public/firstImage.png'
import Heading from './headingTemplate'

const SvestenstvoSekcija = () => {
  const people = [
    {
      image: FirstImage,
      name: 'мр Лазар Балабан',
      description: 'јереј, парох 4. парохије'
    },
    {
      image: FirstImage,
      name: 'мр Лазар Балабан',
      description: 'јереј, парох 4. парохије'
    },
    {
      image: FirstImage,
      name: 'мр Лазар Балабан',
      description: 'јереј, парох 4. парохије'
    },
    {
      image: FirstImage,
      name: 'мр Лазар Балабан',
      description: 'јереј, парох 4. парохије'
    },
    {
      image: FirstImage,
      name: 'мр Лазар Балабан',
      description: 'јереј, парох 4. парохије'
    },
    {
      image: FirstImage,
      name: 'мр Лазар Балабан',
      description: 'јереј, парох 4. парохије'
    },
  ]

  return (
    <section className='h-full w-full flex flex-col justify-start items-center py-[135px] bg-svestenstvo-bg bg-contain bg-no-repeat'>
    <Heading spanText={'УПОЗНАЈТЕ'} mainText={'СВЕШТЕНСТВО ХРАМА'} spanStyle='text-black' mainTextStyle='xl:gradient-title-reverse gradient-title text-center xl:text-4xl text-3xl px-5 xl:px-0' />

    {people.length > 0 && (
        <article className='mb-10'>
            <div>
                <Image src={people[0].image} alt={people[0].name} width={250} height={250} />
            </div>
            <div>
                <h2 className='text-black text-2xl font-bold text-center'>{people[0].name}</h2>
                <p className='text-base text-black text-center'>{people[0].description}</p>
            </div>
        </article>
    )}
    
    <article className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-10'>
        {people.slice(1).map((person, index) => (
            <div key={index} className='flex flex-col items-center'>
                <Image src={person.image} alt={person.name} width={250} height={250} />
                <h2 className='text-black text-2xl font-bold text-center'>{person.name}</h2>
                <p className='text-base text-black text-center'>{person.description}</p>
            </div>
        ))}
    </article>
</section>

  )
}

export default SvestenstvoSekcija;
