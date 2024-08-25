"use client";
import {
   BlocksRenderer,
   type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { useEffect, useState } from "react";
import ShareArticle from "./shareArticle";
const BlogContent = ({
   article,
   author,
   publishedAt,
   editedAt,
}: {
   article: BlocksContent;
   author?: string;
   publishedAt?: string;
   editedAt?: string;
}) => {
   const [activeLink, setActiveLink] = useState<string>("");
   const tableOfContents = article.filter(
      (item: { type: string }) => item.type === "heading"
   );
   function generateId(text: string) {
      return text?.toLowerCase()
         .replace(/\s+/g, "-")
         .replace(/[^\w-]/g, "");
   }
   const handleLinkClick = (event: any, id: any) => {
      event.preventDefault();
      const targetElement = document.getElementById(id);
      if (targetElement) {
         const yOffset = -100;
         const yPosition =
            targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
         window.scrollTo({ top: yPosition, behavior: "smooth" });
         setActiveLink(id);
      }
   };
   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY + 200;
         const headings = tableOfContents.map((heading) =>
            document.getElementById(generateId(heading.children[0].text))
         );
         let currentHeadingIndex = 0;

         for (let i = headings.length - 1; i >= 0; i--) {
            if (headings[i] == null) return;
            if (headings[i].offsetTop <= scrollPosition) {
               currentHeadingIndex = i;
               break;
            }
         }

         const activeHeading = tableOfContents[currentHeadingIndex];
         setActiveLink(generateId(activeHeading?.children[0].text));
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [tableOfContents]);
   return (
      <section className="container h-full mx-auto my-10 flex flex-col md:flex-row justify-between relative px-5 md:px-10 xl:px-0">
         {/* Lijeva sekcija (main content) */}
         <article className="w-[100%] md:w-[70%] text-black prose mx-auto lg:prose-xl md:prose-md sm:prose-sm">
            <BlocksRenderer content={article} />
         </article>

         {/* Desna sekcija (sticky sidebar) */}
         <aside className="w-[100%] md:w-[25%] relative h-full">
            <article className="sticky top-20 mt-10 md:mt-0">
               <div className="flex items-start">
                  <div className="w1 bg-yellowColor" style={{ height: "auto" }}></div>
                  <div className="text-black text-md md:text-md">
                     <h2 className="text-sm uppercase font-medium text-gray-600 mb-2">
                        Садржај
                     </h2>
                     <ul>
                        {tableOfContents.map((heading, index) => (
                           <li key={index}>
                              <Link
                                 href={""}
                                 onClick={(event) =>
                                    handleLinkClick(
                                       event,
                                       generateId(heading.children[0].text)
                                    )
                                 }
                                 color={
                                    activeLink === generateId(heading.children[0].text)
                                       ? "blue.500"
                                       : "inherit"
                                 }
                              >
                                 {heading.children[0].text}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               {/* <TableOfContents /> */}
               <ShareArticle
                  textColor={"black/50"}
                  divProperty="flex md:flex-col justify-start items-start xl:flex-row xl:justify-start xl:items-start mt-10 "
                  iconsColor={"gray"}
               />
               <div className="pb-20 md:mt-24 text-black/30 font-light">
                  <p>Објављено {new Intl.DateTimeFormat('sr-RS', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(publishedAt!))}</p>
                  <p>Измјењено {new Intl.DateTimeFormat('sr-RS', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(editedAt!))}</p>
                  <p>аутор {author}</p>
               </div>
            </article>
         </aside>
      </section>
   );
};

export default BlogContent;
