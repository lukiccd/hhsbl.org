import React from 'react';
import Image from 'next/image';
import bellRing from '../../public/bell-ring.svg';


const RasporedBogosluzenjaData = [
  { name: 'Јутрење', time: '07:30' },
  { name: 'Вечерња', time: '18:00' },
  { name: 'Света Литургија', time: '09:00' },
  { name: 'Света Литургија (Заупокојена)', time: '09:00', note: 'сваке суботе' },
  { name: 'Бденије', time: '18:00', note: 'уочи недјеље и празника' },
  { name: 'Покајни Канон Христу Спаситељу', time: '18:00', note: 'недјељом послије вечерње' },
];

const RasporedBogosluzenja = () => {
  return (
    <section className='relative w-full xl:py-10 px-5'>

      <span className='absolute left-0 w-[100%] h-full bg-no-repeat bg-birdLeft hidden xl:block'></span>
      <span className='absolute right-0 w-[140px] h-[100%] bg-no-repeat bg-birdRight hidden xl:block'></span>

      <div className='gradient-bg xl:max-w-[80%] rounded-[30px] p-8 mx-auto my-10 '>
        <div className="flex items-center gap-2 mb-3">
          <Image src={bellRing} alt="Bell Ring Icon" />
          <h2 className="text-xl xl:text-2xl font-bold">Распоред богослужења</h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-between gap-5 md:gap-10 ">
          {RasporedBogosluzenjaData.map((item, index) => (
            <div key={index} className="text-start ">
              <h3 className="text-base font-normal uppercase">{item.name}</h3>
              <span className="text-2xl font-bold">{item.time}</span>
              {item.note && <p className="text-base italic">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RasporedBogosluzenja;
