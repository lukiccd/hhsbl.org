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
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/novosti?populate=*&filters%5Bslug%5D%5B%24eq%5D=${slug}&locale=en`, { cache: 'no-cache' }
        ).then((res) => res.json());
        console.log(post.data);
        return post.data[0];
    };
    const post = await getPost();
    return (
        <>
            <NavBar navStyle="bg-white text-[#836042] p-3  border border-bottom-3" />
            <HeroSecondary
                title={post?.title}
                shareable={true}
                category="Новости"
                date={String(
                    new Intl.DateTimeFormat("sr-RS", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }).format(new Date(post?.publishedAt))
                )}
                author={post?.author}
                coverUrl={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_URL}${post?.cover.formats?.large?.url || post?.cover.formats.small.url}`}
            />
            <BlogContent article={post.body} publishedAt={post.publishedAt} editedAt={post.updatedAt} author={post.author} />
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
