"use server";
import HeroSecondary from "@/components/heroSecondary";
import NavBar from "@/components/navBar";
import Image from "next/image";
const BlogList = async ({ params }: any) => {
    let posts = await getPosts();
    console.log(posts[0]);
    return (
        <>
            <NavBar navStyle="bg-white text-[#836042] p-3 fixed border border-bottom-3" />
            <HeroSecondary title="Новости" shareable={true} />
            <div className="text-black">
                {posts.map((post: any) => {
                    return (
                        <>
                            <div className="gradient-border">
                                <Image
                                    alt={post.attributes.title}
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_URL}${post.attributes.cover.data.attributes.formats.small.url}`}
                                    width={
                                        502
                                    }
                                    height={
                                        309
                                    }
                                />
                            </div>
                            <p>
                                {String(
                                    new Intl.DateTimeFormat("sr-RS", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    }).format(new Date(post.attributes.createdAt))
                                )}
                            </p>
                            <p>{post.attributes.title}</p>
                            <p>{post.attributes.description}</p>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export async function getPosts() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=cover`
    ).then((res) => res.json());
    return res.data;
}
export default BlogList;
