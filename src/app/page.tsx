import Counts from "@/components/counts/counts";
import About from "@/components/sections/about/about";
import HeroSection from "@/components/sections/hero/heroSection";
import WhyChoose from "@/components/sections/whyChoose/whyChoose";
import { counts } from "@/data/datas";
import React from "react";
import "./home.css"
import OurService from "@/components/sections/ourServices/ourService";
import Testimonials from "@/components/sections/testimoni/testimoni";
import HowToOrder from "@/components/sections/howToOrder/howToOder";
import Offering from "@/components/sections/offering/offering";

const Home = () => {
  return (
    <div className="z-10">
      <HeroSection />
      <Counts data={counts} />
      <About />
      <WhyChoose />
      <OurService />
      <Testimonials />
      <HowToOrder />
      <Offering />
    </div>
  );
}


export default Home;