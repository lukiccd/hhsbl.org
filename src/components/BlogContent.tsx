import React from 'react';
import ShareArticle from './shareArticle';
import TableOfContents from './TableOfContents';


const BlogContent = () => {
   return (
      <section className='container h-full mx-auto my-10 flex flex-col md:flex-row justify-between relative px-5 md:px-10 xl:px-0'>
         {/* Lijeva sekcija (main content) */}
         <article className='w-[100%] md:w-[70%] text-black'>
            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

            <h3 id="section-1" className='text-2xl font-bold my-3'>Поднаслов Х2</h3>

            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

            <h3 id="section-2" className='text-2xl font-bold my-3'>Поднаслов Х3</h3>

            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

            <h3 id="section-3" className='text-2xl font-bold my-3'>Поднаслов Х2</h3>
            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

            <h3 id="section-4" className='text-2xl font-bold my-3'>Поднаслов Х3</h3>
            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

            <h3 id="section-5" className='text-2xl font-bold my-3'>Поднаслов Х2</h3>
            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

            <h3 id="section-6" className='text-2xl font-bold my-3'>Поднаслов Х3</h3>
            <p>Светом Литургијом на празник Светог деспота Стефана Лазаревића, поводом славе северног параклиса заветног Спомен-храма Светог Саве коју је служио јереј Мирослав Васић уз саслужење протођакона Младена Ковачевића.</p>

           
            <ol>
               <li>a</li>
               <li>b</li>
               <li>c</li>
               <li>d</li>
            </ol>
         </article>

         {/* Desna sekcija (sticky sidebar) */}
         <aside className='w-[100%] md:w-[25%] relative h-full'>
            <article className='sticky top-20 mt-10 md:mt-0'>
               <TableOfContents/>
               <ShareArticle textColor={'black/50'} divProperty='flex md:flex-col justify-start items-start xl:flex-row xl:justify-start xl:items-start mt-10 ' iconsColor={'gray'} />
               <div className='pb-20 md:mt-24 text-black/30 font-light'>
                  <p>Објављено 23. августа 2024.</p>
                  <p>Измјењено 23. августа 2024.</p>
                  <p>аутор отац Лазар Балабан</p>
               </div>
            </article>
         </aside>
      </section>
   );
};

export default BlogContent;
