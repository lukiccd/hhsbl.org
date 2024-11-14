"use client";
import { useEffect, useState } from "react";
import Heading from "./headingTemplate";
// import './styles.css'; // Ensure you have the styles imported
import Image from "next/image";
import Link from "next/link";

export default function BlogPosts() {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        return new Promise((resolve, rej) => {
            const post = fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/novosti?populate=*&pagination\[limit\]=3&sort\[0\]=createdAt:desc&locale=en`,
                {
                    cache: "no-cache",
                }
            ).then(async (res) => {
                let data = await res.json();
                console.log(data);
                return resolve(data.data);
            });
        });
    };
    useEffect(() => {
        getPosts().then((posts) => {
            if (posts) setPosts(posts);
        });
    }, []);

    return (
        <div className="blogposts-bg py-20 px-5 xl:px-10 ">
            <Heading
                spanText={"НАЈНОВИЈЕ ИЗ ХРАМА"}
                mainText={"ПОСЉЕДЊЕ НОВОСТИ"}
                spanStyle=""
                mainTextStyle="gradient-title xl:text-4xl text-3xl text-center"
            />
            <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {posts.length > 0 &&
                    posts.map((item: any, index: any) => (
                        <article key={index} className="flex flex-col max-w-[500px]">
                            <div className="gradient-border max-h-[430px]">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_URL}${item?.cover.formats?.large?.url || item?.cover.formats.small.url}`}
                                    alt={item.title}
                                    // width={541}
                                    // height={430}
                                    // sizes="20vw"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    objectFit="contain"
                                    style={{ width: '100%', maxHeight: '430' }} // optional
                                />
                            </div>
                            <div className="mt-2 md:mt-0">
                                <span className="text-lg md:text-xs font-bold">
                                    {new Intl.DateTimeFormat('sr-RS', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(item.publishedAt))}
                                </span>
                                <Link href={`/blog/${item.slug}`}>
                                    <h3 className="text-yellowColor text-xl md:text-2xl font-bold uppercase">
                                        {item.title}
                                    </h3>
                                </Link>
                                <p className="text-base font-normal">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
            </article>
            <article className="flex flex-row justify-center items-center mt-10">
                <button className="text-yellowColor text-2xl underline">
                    Све новости
                </button>
            </article>
        </div>
    );
}
