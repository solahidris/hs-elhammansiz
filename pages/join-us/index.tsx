import * as React from "react"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import WhileInViewAnimation from "@/components/WhileInViewAnimation";
import WhileInViewAnimationFromLeft from "@/components/WhileInViewAnimationFromLeft";
import WhileInViewAnimationFromRight from "@/components/WhileInViewAnimationFromRight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import MarqueeInfiniteSlider from "@/components/MarqueeInfiniteSlider";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { scrollToSection } from "@/functions/scrollToSection";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay";
import HeaderMenu from "@/components/HeaderMenu";
import FooterMenu from "@/components/FooterMenu";

const NewHome = () => {

  const imageCarouselToDisplay = [
    "homepage_image_3.png",
    "homepage_image_4.png",
    "homepage_image_1.png",
    "homepage_image_2.png",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* HEADER COMPONENT */}
      <HeaderMenu />

      {/* BODY COMPONENT */}
      <div className="flex flex-col">

        <div className="grid grid-cols-2 w-full tracking-[2px] pt-48">
          <WhileInViewAnimationFromLeft>
            <Image
              src="/homepage_join_our_team.png"
              alt="image"
              width={800}
              height={800}
              className="w-full"
            />
          </WhileInViewAnimationFromLeft>
          <div className="flex flex-col gap-4 items-center justify-center text-xs lg:text-3xl">
            <span>Latest Kem Hartanah</span>
            <Link href="https://forms.gle/9Gk3BSGAUm9ZoaZL6">
              <Button className="px-10 py-6 bg-blue-600 hover:bg-blue-700 tracking-[1px] text-lg mt-4">
                Click to Join
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20 px-20">
          <div className="flex flex-col w-[full] max-w-[50vw] mx-auto p-10 border rounded-xl mt-40 bg-yellow-100/40 tracking-[1px]">
            <span className="font-semibold">KEM HARTANAH BATCH 03 SESI JUN 2024 🏠⛺️</span>
            <br />
            <span>Jom belajar jadi :</span>
            <span>
              ✨PART TIME / FULL TIME KONSULTAN HARTANAH DENGAN EXTRA INCOME
              RM10K SEBULAN!✨
            </span>
            <br />
            <span>Kelas mingguan online ✅</span>
            <span>Kelas secara offline✅</span>
            <span>Coaching 1 to 1 ✅</span>
            <br />
            <span>YURAN HANYA RM30 seumur hidup</span>
            <br />
            <span>Tarikh : 1 JUN 2024 (AHAD)</span>
            <span>Masa : 8.00am -12.00pm</span>
            <span>
              Tempat : EM WAR ROOM SERI KEMBANGAN / ONLINE PLATFORM ZOOM
            </span>
            <br />
            <span>AFFIN BANK</span>
            <span>106770002821</span>
            <span>ELHAM MANSIZ</span>
            <br />
            <Link href="https://forms.gle/9Gk3BSGAUm9ZoaZL6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Daftar Sekarang
              </Button>
            </Link>
          </div>

          <WhileInViewAnimationFromRight>
            <div className="flex flex-col gap-10 w-full justify-center items-center pt-40">
              <Image
                src="/join_us_hero.png"
                alt="joinUsHero"
                width={400}
                height={400}
                className="w-[100%] rounded-xl"
              />
              <Link href="https://forms.gle/9Gk3BSGAUm9ZoaZL6">
                <Button className="px-10 py-6 bg-blue-600 hover:bg-blue-700 tracking-[1px] text-lg">
                  Click to Join
                </Button>
              </Link>
            </div>
          </WhileInViewAnimationFromRight>
        </div>

        <div className="pt-40">
          <MarqueeInfiniteSlider />
        </div>

        <div>
          <div className="w-full flex flex-col gap-10 pt-40">
            <span className="text-7xl tracking-[1px] font-medium pl-16">Past Campaigns</span>
            <div className="grid grid-cols-2 mx-auto">
              <div className="w-full px-16">
                <WhileInViewAnimationFromLeft>
                  <Carousel
                    plugins={[plugin.current]}
                    className=""
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                  >
                    <CarouselContent>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="my-auto">
                          <div className="p-1">
                            <Card className="max-w-full max-h-[600px] lg:max-h-[900px] my-auto">
                              <CardContent className="flex aspect-squarex  items-center justify-center p-0 rounded-lg">
                                {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                <Image src={`/kem_hartanah_okt_2023_${index + 1}.png`} alt={`kem_hartanah_okt_2023_3${index + 1}.png`} width={1000} height={1000} className=" max-w-full max-h-[600px] lg:max-h-[900px] object-cover object-center h-full w-full rounded-lg" />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </WhileInViewAnimationFromLeft>
              </div>
              <div className="flex flex-col gap-4 font-thin items-center justify-center text-5xl">
                <p>Kem Hartanah</p>
                <p>7 Oktober 2023</p>
              </div>
            </div>
          </div>
        </div>


        <FooterMenu />

      </div>
    </div>
  );
};

export default NewHome;
