"use client"
import MapSection from "@/components/MapSection";
import Mapbox from "@/components/Mapbox";
import BlogPosts from "@/components/blogPosts";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import ProskomidijaSection from "@/components/proskomidijaSection";
import RasporedBogosluzenja from "@/components/rasporedBogosluzenja";
import SvestenstvoSekcija from "@/components/svestenstvoSekcija";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Home() {
  return (
    <>
      <NavBar navStyle="absolute top-5 xl:right-0 xl:left-0 xl:top-0 bg-transparent z-10" innerArticle=" py-2 px-5 md:py-5 md:px-10" />
      <Hero />
      <RasporedBogosluzenja />
      <BlogPosts />
      <SvestenstvoSekcija />
      <ProskomidijaSection />
      <MapSection />

    </>
  );
}
