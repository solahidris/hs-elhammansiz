import { useState, useEffect } from "react";
import Image from "next/image";
import WhileInViewAnimation from "@/components/WhileInViewAnimation";
import WhileInViewAnimationFromLeft from "@/components/WhileInViewAnimationFromLeft";
import WhileInViewAnimationFromRight from "@/components/WhileInViewAnimationFromRight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import MarqueeInfiniteSlider from "@/components/MarqueeInfiniteSlider";


const NewHome = () => {

    const backgroundGradientStone = "bg-gradient-to-tr from-stone-50 via-stone-100 to-stone-50"
    const imageCarouselToDisplay = [
        "homepage_image_3.png", "homepage_image_4.png", "homepage_image_1.png", "homepage_image_2.png",
    ];    

    return(
        <div className="min-h-screen w-full flex flex-col">
            
            {/* HEADER COMPONENT */}
            <div>
                {/* Header Desktop */}
                <div className={`flex justify-between h-8 px-4 lg:px-10 py-10 items-center font-serif italic ${backgroundGradientStone} border border-b-1`}>
                    <Button variant="ghost" className="hover:bg-black/5 italic">Elham Mansiz</Button>
                    <div className="hidden lg:block lg:flex lg:flex-row gap-20">
                        <Button variant="ghost" className="hover:bg-black/5 italic">Home</Button>
                        <Button variant="ghost" className="hover:bg-black/5 italic">Projects</Button>
                        <Button variant="ghost" className="hover:bg-black/5 italic">Agent</Button>
                    </div>
                </div>
                {/* Header Mobile */}
                <div className={`grid grid-cols-3 items-center h-16 lg:hidden fixed bottom-0 w-full border border-t-1 shadow font-serif ${backgroundGradientStone}`}>
                    <Button variant="ghost" className="hover:bg-black/5 italic h-full rounded-none">Home</Button>
                    <Button variant="ghost" className="hover:bg-black/5 italic h-full rounded-none border-x">Projects</Button>
                    <Button variant="ghost" className="hover:bg-black/5 italic h-full rounded-none">Agent</Button>
                </div>
            </div>

            {/* BODY COMPONENT */}
            <div className="flex flex-col">

                <WhileInViewAnimationFromLeft>
                    <div className="grid grid-cols-2 w-full font-serif italic pt-40">
                        <Image src="/homepage_image_3.png" alt="image" width={400} height={400} className="w-full" />
                        <div className="flex flex-col items-center justify-center text-xs lg:text-base">
                            <span>It&apos;s not just a house</span>
                            <br/>
                            <span>It&apos;s a home</span>
                        </div>
                    </div>
                </WhileInViewAnimationFromLeft>

                <WhileInViewAnimationFromRight>
                    <div className="grid grid-cols-2 w-full font-serif italic pt-40">
                        <div className="flex flex-col items-center justify-center text-xs lg:text-base">
                            <span>a personal space</span>
                            <br/>
                            <span>to heal and rest</span>
                        </div>
                        <Image src="/homepage_image_4.png" alt="image" width={400} height={400} className="w-full" />
                    </div>
                </WhileInViewAnimationFromRight>

                <div className="pt-40">
                    <MarqueeInfiniteSlider />
                </div>

                <WhileInViewAnimation>
                    <div className="flex justify-center items-center h-80">
                        <span className="italic font-serif">
                            Buying a home shouldn&apos;t be stressful<br/><br/>It should be an enjoyable experience
                        </span>
                    </div>
                </WhileInViewAnimation>

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
                
            </div>

        </div>
    )
};

export default NewHome;