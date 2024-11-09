"use client";
import Calendar from "@/components/Calendar";
import MapSection from "@/components/MapSection";
import BlogPosts from "@/components/blogPosts";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import ProskomidijaSection from "@/components/proskomidijaSection";
import RasporedBogosluzenja from "@/components/rasporedBogosluzenja";
import SvestenstvoSekcija from "@/components/svestenstvoSekcija";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar
        navStyle="absolute top-5 xl:right-0 xl:left-0 xl:top-0 bg-transparent z-10"
        innerArticle=" py-2 px-5 md:py-5 md:px-10"
      />
      <Hero />
      <RasporedBogosluzenja />
      <BlogPosts />
      <SvestenstvoSekcija />
      <ProskomidijaSection />
      <MapSection />
      <Calendar />
      <footer className="text-[#836042] p-20">
        <center>
          <div className="">
            <span className="font-medium">
              &copy; {new Date().getFullYear()} Храм Христа Спаситеља Бања Лука.
              Сва права задржана.
            </span>
            <br />
            <span className="text-gray-400 text-sm">
              Дизајн и израда:{" "}
              <Link href={'https://kremicalex.com'}>
                <span className="font-medium hover:underline">Алекса Кремић</span>
              </Link>{" "}
              и <Link href={'https://lukicdejan.com'}>
                <span className="font-medium hover:underline">Дејан Лукић</span>
              </Link>{" "}
            </span>
          </div>
        </center>
      </footer>
    </>
  );
}
