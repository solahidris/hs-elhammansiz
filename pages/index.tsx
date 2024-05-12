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
        <span className="absolute right-0 text-[20px] lg:text-5xl z-10 font-bold mt-[-22px] lg:mt-[60px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-l-lg lg:rounded-l-xl z-0">Reviews</span>
        <CardStackTestimonials />
        <CarouselMix />
      </div>

      <div id="projects" className="pt-3 lg:pt-28">
        <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[15px] lg:mt-[-50px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">Projects</span>
        <MultiTabs />
      </div>

      <div className="py-20">.</div>
      {/* See Line 55 - Layout-grid.tsx */}

      <Footer />
    </main>
  );
}

export default Home;