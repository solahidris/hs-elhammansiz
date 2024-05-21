import { useState, useEffect } from "react";
import Image from "next/image";
import WhileInViewAnimation from "@/components/WhileInViewAnimation";
import WhileInViewAnimationFromLeft from "@/components/WhileInViewAnimationFromLeft";
import WhileInViewAnimationFromRight from "@/components/WhileInViewAnimationFromRight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import MarqueeInfiniteSlider from "@/components/MarqueeInfiniteSlider";
import { FaWhatsapp, FaWaze } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { scrollToSection } from "@/functions/scrollToSection";
import HeaderMenu from "@/components/HeaderMenu";
import FooterMenu from "@/components/FooterMenu";

const NewHome = () => {

    const imageCarouselToDisplay = [
        "homepage_image_3.png", "homepage_image_4.png", "homepage_image_1.png", "homepage_image_2.png",
    ];

    return (
        <div className="min-h-screen w-full flex flex-col">

            {/* HEADER COMPONENT */}
            <HeaderMenu />

            {/* BODY COMPONENT */}
            <div className="flex flex-col">
                


                <div className="grid grid-cols-2 w-full tracking-[2px] pt-48">
                    <WhileInViewAnimationFromLeft>
                        <Image src="/location_banner.png" alt="image" width={800} height={800} className="w-full max-h-[670px] object-cover object-top" />
                    </WhileInViewAnimationFromLeft>
                    <div className="flex flex-col items-center justify-center text-xs lg:text-3xl">
                        <span>Location</span>
                    </div>
                </div>

                <div className="w-full">
                </div>

                <div className="grid grid-cols-2 w-full tracking-[2px] pt-40">
                    <div className="flex flex-col items-center justify-center text-xs lg:text-xl px-40">
                        <span className="text-center leading-[40px]">Elham Mansiz Resources, 2-2, Jalan Bpp 5/3, Pusat Bandar Putra Permai, 43300 Seri Kembangan, Selangor</span>
                        <br />
                        <div className="flex gap-10">
                        <Button variant="ghost" className="py-0 my-0 h-[120px] w-[120px] cursor-pointer ease-in-out transition active:scale-95">
                          <Link href="https://waze.com/ul/hw282v6scg">
                            <FaWaze className="w-[75px] h-[75px] text-black py-2" />
                          </Link>
                        </Button>
                        <Button variant="ghost" className="py-0 my-0 h-[120px] w-[120px] cursor-pointer ease-in-out transition active:scale-95 mr-2">
                          <Link href="https://maps.app.goo.gl/ZVTsPSP1NvbMZdXL7">
                            <Image
                              src="/socials_google_Maps_icon.png"
                              width={100}
                              height={100}
                              alt="googlemapsicon"
                              className="w-[60px] text-red-600 py-2 "
                            />
                          </Link>
                        </Button>
                        </div>
                    </div>
                    <WhileInViewAnimationFromRight>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4152063799265!2d101.66343267544397!3d2.982168354155454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb5c9c06973fb%3A0x1c4d50ed51b6a9b8!2sElham%20Mansiz%20Resources!5e0!3m2!1sen!2smy!4v1715944561977!5m2!1sen!2smy" width="600" height="450" className="w-full"  loading="lazy"></iframe>
                    </WhileInViewAnimationFromRight>
                </div>


                <FooterMenu />

            </div>

        </div>
    )
};

export default NewHome;