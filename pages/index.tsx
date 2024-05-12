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
        <span className="absolute right-0 text-[20px] lg:text-5xl z-10 font-bold mt-[-22px] lg:mt-[60px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-l-lg z-50">Reviews</span>
        <CardStackTestimonials />
        <CarouselMix />
      </div>

      <MultiTabs />

      {/* <div className="flex flex-col py-40">

        <div className="flex justify-between p-20 bg-neutral-100">
          <p>some text about the company etc</p>
          <Image src="/next.svg" alt="belowheroimage" width={100} height={100} />
        </div>


        <div className="grid grid-cols-4 gap-4 items-center px-40">
          <Link href="/otherpage">
            <div className="bg-blue-400 flex justify-center items-center w-full aspect-square rounded-lg relative">
              <Image src="/fb_og_image_1200_630.png" alt="belowheroimage" layout="fill" objectFit="cover" className="absolute opacity-90 hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer"/>
              <span className="z-10 text-3xl bg-white/5 px-4 py-2 hover:cursor-pointer">Kedah</span>
            </div>
          </Link>
          <Link href="/otherpage">
            <div className="bg-blue-400 flex justify-center items-center w-full aspect-square rounded-lg relative">
              <Image src="/fb_og_image_1200_630.png" alt="belowheroimage" layout="fill" objectFit="cover" className="absolute opacity-90 hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer"/>
              <span className="z-10 text-3xl bg-white/5 px-4 py-2 hover:cursor-pointer">Perak</span>
            </div>
          </Link>
          <Link href="/otherpage">
            <div className="bg-blue-400 flex justify-center items-center w-full aspect-square rounded-lg relative">
              <Image src="/fb_og_image_1200_630.png" alt="belowheroimage" layout="fill" objectFit="cover" className="absolute opacity-90 hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer"/>
              <span className="z-10 text-3xl bg-white/5 px-4 py-2 hover:cursor-pointer">Pahang</span>
            </div>
          </Link>
          <Link href="/otherpage">
            <div className="bg-blue-400 flex justify-center items-center w-full aspect-square rounded-lg relative">
              <Image src="/fb_og_image_1200_630.png" alt="belowheroimage" layout="fill" objectFit="cover" className="absolute opacity-90 hover:opacity-70 transition-opacity duration-300 hover:cursor-pointer"/>
              <span className="z-10 text-3xl bg-white/5 px-4 py-2 hover:cursor-pointer">Terengganu</span>
            </div>
          </Link>
        </div>







      </div> */}

      <Footer />
    </main>
  );
}

export default Home;