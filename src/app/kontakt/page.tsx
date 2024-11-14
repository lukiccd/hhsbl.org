"use server";
import BlogContent from "@/components/BlogContent";
import HeroSecondary from "@/components/heroSecondary";
import NavBar from "@/components/navBar";

const ContactPage = async () => {

    return (
        <>
            <NavBar navStyle="bg-white text-[#836042] p-3  border border-bottom-3" />
            <HeroSecondary
                title={'Контакт'}
                category={""}
                shareable={false}
            // date={String(
            //     new Intl.DateTimeFormat("sr-RS", {
            //         day: "2-digit",
            //         month: "long",
            //         year: "numeric",
            //     }).format(new Date(post?.attributes.publishedAt))
            // )}
            // coverUrl={`${process.env.NEXT_PUBLIC_STRAPI_STATIC_URL}${post?.attributes.cover.data.attributes.formats.large.url}`}
            />

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

export default ContactPage;
