import { CardStackTestimonials } from "@/components/CardStackTestimonials";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/HeaderNavbar";
import { HeroHighlightHomepage } from "@/components/HeroHighlightHomepage";
import { LayoutGridHomepage } from "@/components/LayoutGridHomepage";
import { CarouselMix } from "@/components/CarouselMix";

import Image from "next/image";
import Link from "next/link";
import { MultiTabs } from "@/components/MultiTabs";


const AboutPage = () => {

  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <HeroHighlightHomepage />

      <div className="lg:h-screen h-[50vh] w-full mt-[0px] lg:mt-[200px]">
        <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[-16px] lg:mt-[-44px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">About us</span>
        <CarouselMix />
      </div>
      

      {/* <div id="reviews" className="flex flex-col lg:flex-row">
        <span className="absolute right-0 text-[20px] lg:text-5xl z-10 font-bold mt-[8px] lg:mt-[44px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-l-lg lg:rounded-l-xl z-0">Reviews</span>
        <CardStackTestimonials />
      </div> */}
{/* 
      <div id="projects" className="pt-3 lg:pt-20">
        <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[15px] lg:mt-[-36px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">Projects</span>
        <MultiTabs />
      </div> */}

      {/* <LayoutGridHomepage /> */}

      <div className="py-20">.</div>
      {/* See Line 55 - Layout-grid.tsx */}

      <Footer />
    </main>
  );
}

export default AboutPage;