import { CardStackTestimonials } from "@/components/CardStackTestimonials";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/HeaderNavbar";
import { HeroHighlightHomepage } from "@/components/HeroHighlightHomepage";
import { LayoutGridHomepage } from "@/components/LayoutGridHomepage";
import { CarouselMix } from "@/components/CarouselMix";

import Image from "next/image";
import Link from "next/link";
import { MultiTabs } from "@/components/MultiTabs";


const Home = () => {

  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <HeroHighlightHomepage />
      <LayoutGridHomepage />

      <div id="reviews" className="flex flex-col lg:flex-row">
        <span className="absolute right-0 text-[20px] lg:text-5xl z-10 font-bold mt-[8px] lg:mt-[44px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-l-lg lg:rounded-l-xl z-0">Reviews</span>
        <CardStackTestimonials />
        <CarouselMix />
      </div>

      <div id="projects" className="pt-3 lg:pt-20">
        <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[15px] lg:mt-[-36px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">Projects</span>
        <MultiTabs />
      </div>

      {/* <div className="w-full flex flex-col items-center">
        <span>JUMLAH TAHUNAN UNIT JUALAN </span>
        <span>2019 - 120 units</span>
        <span>2021 - 203 units</span>
        <span>2022 - 240 units</span>
      </div> */}

      <div className="py-[5000px]">.</div>
      {/* See Line 55 - Layout-grid.tsx */}

      <Footer />
    </main>
  );
}

export default Home;