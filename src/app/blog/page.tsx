"use client"
import BlogContent from "@/components/BlogContent"
import HeroSecondary from "@/components/heroSecondary"
import NavBar from "@/components/navBar"

const BlogList = () => {
    return (
        <>
            <NavBar navStyle="bg-white text-[#836042] p-3 " />
            <HeroSecondary />
            <BlogContent />
        </>
    )
}

export default BlogList