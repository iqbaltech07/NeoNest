import Counts from "@/components/counts/counts";
import About from "@/components/sections/about/about";
import HeroSection from "@/components/sections/hero/heroSection";
import { counts } from "@/data/datas";
import React from "react";

const Home = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-fit z-10">
      <HeroSection />
      <Counts data={counts} />
      <About />
    </div>
  );
}


export default Home;