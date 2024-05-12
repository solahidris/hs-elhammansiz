import { CardStackTestimonials } from "@/components/CardStackTestimonials";
import Footer from "@/components/Footer";
import HeaderNavbar from "@/components/HeaderNavbar";
import { HeroHighlightHomepage } from "@/components/HeroHighlightHomepage";
import { LayoutGridHomepage } from "@/components/LayoutGridHomepage";
import { CarouselMix } from "@/components/CarouselMix";

import Image from "next/image";
import Link from "next/link";


const Home = () => {

  return (
    <main className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <HeroHighlightHomepage />
      <LayoutGridHomepage />
      <CarouselMix />

      {/* add slides to the page */}
      https://codesandbox.io/p/sandbox/embla-carousel-opacity-react-s3gkff?file=%2Fsrc%2Fjs%2FEmblaCarousel.tsx%3A131%2C2
      https://www.embla-carousel.com/examples/predefined/

      {/* Testimonials */}
      {/* <div>
        <p>Testimonials</p>
        <p>card stack</p>
        <CardStackTestimonials />
      </div> */}

      
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