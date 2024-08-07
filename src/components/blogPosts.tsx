import React from 'react';
import Image from 'next/image';
import BlogPostImage from '../../public/blog-post-image.webp'; // Adjust this as needed
import Heading from './headingTemplate';
// import './styles.css'; // Ensure you have the styles imported

export const items = [
    {
        date: "20. април 2024.",
        title: "ТЕСТ НАСЛОВ 123 ТЕСТ ДУЖИНААА",
        description: "lorem ipsum dolor sit ames 123 lorem ipsum dolor sit ames 123lorem ipsum dolor sit ames 123lorem ipsum dolor sit ames 123",
        imageUrl: BlogPostImage // Use imported image or specify path
    },
    {
        date: "20. април 2024.",
        title: "ТЕСТ НАСЛОВ 123 ТЕСТ ДУЖИНААА",
        description: "lorem ipsum dolor sit ames 123 lorem ipsum dolor sit ames 123lorem ipsum dolor sit ames 123lorem ipsum dolor sit ames 123",
        imageUrl: BlogPostImage // Use imported image or specify path
    },
    {
        date: "20. април 2024.",
        title: "ТЕСТ НАСЛОВ 123 ТЕСТ ДУЖИНААА",
        description: "lorem ipsum dolor sit ames 123 lorem ipsum dolor sit ames 123lorem ipsum dolor sit ames 123lorem ipsum dolor sit ames 123",
        imageUrl: BlogPostImage // Use imported image or specify path
    },
  
];

const BlogPosts = () => {
    return (
        <div className='blogposts-bg py-20 px-5 xl:px-10 '>
    <Heading spanText={'НАЈНОВИЈЕ ИЗ ХРАМА'} mainText={'ПОСЉЕДЊЕ НОВОСТИ'} spanStyle='' mainTextStyle='gradient-title xl:text-4xl text-3xl text-center' />
    <article className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>
        {items.map((item, index) => (
            <article key={index} className='flex flex-col max-w-[500px]'>
                <div className='gradient-border'>
                    <Image src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                    <span className='text-xs font-bold'>{item.date}</span>
                    <h3 className='text-yellowColor text-2xl font-bold uppercase'>{item.title}</h3>
                    <p className='text-base font-normal'>{item.description}</p>
                </div>
            </article>
        ))}
    </article>
    <article className='flex flex-row justify-center items-center mt-10'>
        <button className='text-yellowColor text-2xl underline'>Све новости</button>
    </article>
</div>

    );
};

export default BlogPosts;
