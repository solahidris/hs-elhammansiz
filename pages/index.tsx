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
import { useIsMobile } from "@/hooks/useIsMobile";

const NewHome = () => {

    const imageCarouselToDisplay = [
        "homepage_image_3.png", "homepage_image_4.png", "homepage_image_1.png", "homepage_image_2.png",
    ];    
    const isMobile = useIsMobile();

    return(
        <div className="min-h-screen w-full flex flex-col">
            
            {/* HEADER COMPONENT */}
            <HeaderMenu />

            {/* BODY COMPONENT */}
            <div className="flex flex-col">

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full tracking-[2px] pt-20 lg:pt-48 gap-10">
                    <WhileInViewAnimationFromLeft>
                        <Image src="/homepage_image_1.png" alt="image" width={800} height={800} className="w-full" />
                    </WhileInViewAnimationFromLeft>
                    <div className="flex flex-col gap-2 items-center justify-center text-lg lg:text-3xl font-medium capitalize pt-10">
                        <span>The best in town for</span>
                        <span>helping soldiers to buy</span>
                        <span>their dream home</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 w-full tracking-[2px] pt-20 lg:pt-48">
                    <WhileInViewAnimationFromRight>
                        <Link href="/buy"  >
                            <div className="relative transition hover:translate-y-[-8px] hover:opacity-[90%]">
                                <Image src="/homepage_buy_a_home.png" alt="image" width={800} height={800} className="w-full aspect-video" />
                                <span className="bg-black/50 p-5" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>Buy a home</span>
                            </div>
                        </Link>
                    </WhileInViewAnimationFromRight>
                    <WhileInViewAnimationFromLeft>
                        <Link href="/join-us" className="tranform hover:translate-x-10">
                            <div className="relative transition hover:translate-y-[-8px] hover:opacity-[90%]">
                                <Image src="/homepage_join_our_team.png" alt="image" width={800} height={800} className="w-full aspect-video" />
                                <span className="bg-black/50 p-5" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>Join our team</span>
                            </div>
                        </Link>
                    </WhileInViewAnimationFromLeft>
                    <WhileInViewAnimationFromRight>
                        <Link href="/about-us" className="tranform hover:translate-x-10">
                            <div className="relative transition hover:translate-y-[-8px] hover:opacity-[90%]">
                                <Image src="/homepage_about_us.png" alt="image" width={800} height={800} className="w-full aspect-video object-cover" />
                                <span className="bg-black/50 p-5" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white'}}>About us</span>
                            </div>
                        </Link>
                    </WhileInViewAnimationFromRight>
                </div>

                <div className="pt-40">
                    <MarqueeInfiniteSlider />
                </div>

                <div className="flex justify-center items-center h-80">
                    <div className="flex flex-col gap-2 items-center justify-center text-lg tracking-[2px] font-medium lg:text-3xl">
                        <span>Buying a home shouldn&apos;t be stressful</span>
                        <span>It should be a memorable experience</span>
                    </div>
                </div>

                <WhileInViewAnimation>
                    <div>
                        <Marquee direction="left">
                            {imageCarouselToDisplay.map((imageName, index) => (
                                <div key={index} className="flex h-[200px]">
                                    <Image src={`/${imageName}`} alt="image" width={600} height={400} className="object-cover"/>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </WhileInViewAnimation>
                
                {/* FOOTER */}
                <FooterMenu />
                
            </div>

        </div>
    )
};

export default NewHome;