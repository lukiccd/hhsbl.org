"use client"
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
      <NavBar />
      <Hero />
      <RasporedBogosluzenja />
      <BlogPosts />
      <SvestenstvoSekcija />
      <ProskomidijaSection />
      <Mapbox />
    </>
  );
}
