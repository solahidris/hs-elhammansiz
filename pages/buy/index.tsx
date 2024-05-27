import { useState, useEffect } from "react";
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
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import HeaderMenu from "@/components/HeaderMenu";
import FooterMenu from "@/components/FooterMenu";

const NewHome = () => {

  const imageCarouselToDisplay = [
    "homepage_image_3.png",
    "homepage_image_4.png",
    "homepage_image_1.png",
    "homepage_image_2.png",
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* HEADER COMPONENT */}
      <HeaderMenu />

      {/* BODY COMPONENT */}
      <div className="flex flex-col">
        <div></div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 w-full tracking-[2px] pt-20 lg:pt-48">
          <WhileInViewAnimationFromLeft>
            <Image
              src="/homepage_buy_a_home.png"
              alt="image"
              width={800}
              height={800}
              className="w-full"
            />
          </WhileInViewAnimationFromLeft>
          <div className="flex flex-col gap-2 items-center justify-center text-3xl lg:text-3xl py-20 lg:py-0">
            <span>Looking for your</span>
            <span>dream property?</span>
            <Link href="https://forms.gle/9Gk3BSGAUm9ZoaZL6" className="mt-4">
              <Button className="px-10 py-6 bg-blue-600 hover:bg-blue-700 tracking-[1px] text-lg">
                Let&apos;s chat
              </Button>
            </Link>
          </div>
        </div>

        <div className=" px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10 lg:pt-40">
          {[...Array(20)].map((_, index) => (
            <Card key={index} className="p-3 flex flex-col justify-between">
              <Image
                src={`/homepage_image_${(index % 4) + 1}.png`}
                alt="image"
                width={400}
                height={400}
                className="mb-4 rounded-md"
              />
              <div className="truncate">
                <Badge>Negeri</Badge>
                <p>property.name</p>
                <p>property.name</p>
                <p>property.location</p>
                <p>property.size</p>
                <p>property.rooms</p>
                <p>property.facilities</p>
                <p>property.price</p>
                <p>property?.rebate</p>
              </div>
              <Button className="mt-4">See Details</Button>
            </Card>
          ))}
        </div>

        <div className="pt-40">
          <MarqueeInfiniteSlider />
        </div>

        {/* FOOTER */}
        <FooterMenu />
      </div>
    </div>
  );
};

export default NewHome;
