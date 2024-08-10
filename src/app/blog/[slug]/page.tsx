"use server";
import BlogContent from "@/components/BlogContent";
import HeroSecondary from "@/components/heroSecondary";
import NavBar from "@/components/navBar";

const BlogPost = async ({
    params: { slug },
}: {
    params: {
        slug: string;
    };
}) => {
    const getPost = async () => {
        const post = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*&filters%5Bslug%5D%5B%24eq%5D=${slug}`
        ).then((res) => res.json());
        console.log(post.data);
        return post.data[0];
    };
    const post = await getPost();
    return (
        <>
            <NavBar navStyle="bg-white text-[#836042] p-3  border border-bottom-3" />
            <HeroSecondary
                title={post?.attributes.title}
                shareable={true}
                date={String(
                    new Intl.DateTimeFormat("sr-RS", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }).format(new Date(post?.attributes.publishedAt))
                )}
                author={post?.attributes.author}
                coverUrl={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_URL}${post?.attributes.cover.data.attributes.formats.large.url}`}
            />
            <BlogContent article={post.attributes.body} />
        </>
    );
};

// export async function generateStaticParams() {
//     const posts = await fetch(
//         `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`
//     ).then((res) => res.json());
//     return posts.map((post: any) => ({
//         slug: post.attributes.slug,
//     }))
// }

export default BlogPost;
