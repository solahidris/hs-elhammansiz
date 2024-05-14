import Image from "next/image";
import HeaderNavbar from "@/components/HeaderNavbar";
import Footer from "@/components/Footer";
import { HeroHighlightHomepage } from "@/components/HeroHighlightHomepage";

import { CardStackTestimonials } from "@/components/CardStackTestimonials";
import { LayoutGridHomepage } from "@/components/LayoutGridHomepage";
import { CarouselMix } from "@/components/CarouselMix";
import Link from "next/link";
import { MultiTabs } from "@/components/MultiTabs";
import Timeline from "@/components/Timeline";



const AboutPage = () => {

  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <HeroHighlightHomepage />

      <div className="lg:h-screen h-[50vh] w-full mt-[0px] lg:mt-[200px]">
        <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[-16px] lg:mt-[-44px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">About us</span>
        {/* <CarouselMix /> */}
        <div className="w-full lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center lg:justify-start mx-auto items-center px-8 lg:px-[90px] mt-[60px] lg:mt-[120px]">
          <p className="text-xl font-semibold w-full leading-8">
            <span className="text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[120px]">Elham Mansiz</span>
            <br/>
            ditubuhkan pada tahun 2014 dan diterajui barisan
            pengurusan yang mahir dalam bidang pemasaran selaras dengan misi
            dan visi syarikat yang menjalinkan usahasama bersama pihak pemaju
            melalui kerjasama Join Venture (JV).
            <br/>
            <br/>
            Elham Mansiz juga mempunyai lebih 200 orang konsultant hartanah yang
            berdaftar di bawah Koperasi Hartanah Bersatu yang terlatih secara
            professional dan berdaya saing dari segi pengetahuan dan teknik jualan.
            <br/>
            <br/>
            Pemasaran hartanah yang diuruskan oleh Elham Mansiz merangkumi
            &quot;Jualan dan dokumentasi&quot; bagi pihak bank dan juga LPPSA (Lembaga
            Pembiayaan Perumahan Sektor Awam). Kepakaran kami adalah
            menguruskan
            &quot;client&quot; tentera.</p>
            <div className="h-full w-full lg:w-[75%] flex flex-col mt-[-40px] lg:mt-[-100px]">
              <Image src={`/about_hero.png`} alt={`carousel_image_1.png`} width={1000} height={1000} className="bg-cover rounded-lg aspect-square object-cover"/>
              <div className="flex flex-col items-center pt-2">
                <span className="font-semibold">ZAMZILA AHMAD</span>
                <span>BOARD OF GROUP DIRECTOR ELHAM MANSIZ</span>
              </div>
            </div>
        </div>
      </div>

      {/* https://react-chrono.prabhumurthy.com/introduction/getting-started.html */}
      {/* https://react-chrono.prabhumurthy.com/introduction/getting-started.html */}
      {/* https://react-chrono.prabhumurthy.com/introduction/getting-started.html */}


      <div id="reviews" className="flex flex-col lg:flex-row">
        <span className="absolute right-0 text-[20px] lg:text-5xl z-10 font-bold mt-[8px] lg:mt-[44px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-l-lg lg:rounded-l-xl z-0">Reviews</span>
        {/* <CardStackTestimonials /> */}
        {/* <VerticalTimeline /> */}
        <Timeline />
      </div>
        {/* 
      <div id="projects" className="pt-3 lg:pt-20">
        <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[15px] lg:mt-[-36px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">Projects</span>
        <MultiTabs />
      </div> */}

        {/* <LayoutGridHomepage /> */}

        <div className="py-[500px] lg:py-60">.</div>
        {/* See Line 55 - Layout-grid.tsx */}

        <Footer />
    </main>
  );
}

export default AboutPage;