"use client";
import Hero from "@/components/hero"
import About from "@/components/about"
import Projets from "@/components/projets"
import Contact from "@/components/contact"


const Home = () => {
  return (
  <div className="flex flex-col">
    
    <Hero/>

    <About/>

    <Projets/>

    <Contact/>

  </div>
  );
}
export default Home;