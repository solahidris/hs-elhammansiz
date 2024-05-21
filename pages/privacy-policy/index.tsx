import { useState, useEffect } from "react";
import Image from "next/image";
import WhileInViewAnimation from "@/components/WhileInViewAnimation";
import WhileInViewAnimationFromLeft from "@/components/WhileInViewAnimationFromLeft";
import WhileInViewAnimationFromRight from "@/components/WhileInViewAnimationFromRight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import MarqueeInfiniteSlider from "@/components/MarqueeInfiniteSlider";
import { FaWhatsapp } from "react-icons/fa";
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

                <div>

                </div>

                <div className="grid grid-cols-2 w-full font-serif italic pt-48">
                    <WhileInViewAnimationFromLeft>
                        <Image src="/homepage_image_3.png" alt="image" width={400} height={400} className="w-full" />
                    </WhileInViewAnimationFromLeft>
                    <div className="flex flex-col items-center justify-center text-xs lg:text-3xl">
                        <span>It&apos;s not just a house</span>
                        <br />
                        <span>It&apos;s a home</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 w-full font-serif italic pt-40">
                    <div className="flex flex-col items-center justify-center text-xs lg:text-3xl">
                        <span>a personal space</span>
                        <br />
                        <span>to heal and rest</span>
                    </div>
                    <WhileInViewAnimationFromRight>
                        <Image src="/homepage_image_4.png" alt="image" width={400} height={400} className="w-full" />
                    </WhileInViewAnimationFromRight>
                </div>

                <div className="pt-40">
                    <MarqueeInfiniteSlider />
                </div>

                <div className="flex justify-center items-center h-80">
                    <span className="italic font-serif lg:text-3xl text-center">
                        Buying a home shouldn&apos;t be stressful<br /><br />It should be a lifetime experience
                    </span>
                </div>

                <WhileInViewAnimation>
                    <div>
                        <Marquee direction="left">
                            {imageCarouselToDisplay.map((imageName, index) => (
                                <div key={index} className="flex h-[200px]">
                                    <Image src={`/${imageName}`} alt="image" width={600} height={400} className="object-cover" />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </WhileInViewAnimation>

                <FooterMenu />

            </div>

        </div>
    )
};

export default NewHome;