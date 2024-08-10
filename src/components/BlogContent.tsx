import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import TableOfContents from './TableOfContents';
import ShareArticle from './shareArticle';
const BlogContent = ({ article }: any) => {
   return (
      <section className='container h-full mx-auto my-10 flex flex-col md:flex-row justify-between relative px-5 md:px-10 xl:px-0'>
         {/* Lijeva sekcija (main content) */}
         <article className='w-[100%] md:w-[70%] text-black prose mx-auto lg:prose-xl md:prose-md sm:prose-sm'>
            <BlocksRenderer content={article} />;
         </article>

         {/* Desna sekcija (sticky sidebar) */}
         <aside className='w-[100%] md:w-[25%] relative h-full'>
            <article className='sticky top-20 mt-10 md:mt-0'>
               <TableOfContents />
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
