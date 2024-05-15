import { useState } from "react";
import HeaderNavbar from "@/components/HeaderNavbar";
import Footer from "@/components/Footer";
import { HeroHighlightHomepage } from "@/components/HeroHighlightHomepage";
import Timeline from "@/components/Timeline";
import VisionMission from "@/components/VisionMission";
import AboutUsHero from "@/components/AboutUsHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import CTAPageBottom from "@/components/CTAPageBottom";

const AboutPage = () => {

  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <HeroHighlightHomepage />

      <div className="lg:h-screen h-full w-full mt-[0px] lg:mt-[200px]">
        <span
          id="highlights"
          className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[-16px] lg:mt-[-44px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0"
        >
          About us
        </span>
        <AboutUsHero />
      </div>

      <div id="reviews" className="flex flex-col lg:flex-row mt-[50px] lg:mt-0">
        <span className="absolute right-0 text-[20px] lg:text-5xl z-10 font-bold mt-[8px] lg:mt-[0px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-l-lg lg:rounded-l-xl z-0">
          Our Journey
        </span>
        <Timeline />
      </div>

      <div id="projects" className="pt-3 lg:pt-28 mt-12 lg:mt-0">
        <span
          id="highlights"
          className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[15px] lg:mt-[-36px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0"
        >
          Vision & Mission
        </span>
        <VisionMission />
      </div>


      <div className="py-[50px] lg:py-40 w-full flex justify-center">
       <CTAPageBottom />
      </div>
      {/* See Line 55 - Layout-grid.tsx */}

      <Footer />
    </main>
  );
};

export default AboutPage;
