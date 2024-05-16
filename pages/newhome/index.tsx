import { useState, useEffect } from "react";
import Image from "next/image";
import WhileInViewAnimation from "@/components/WhileInViewAnimation";
import WhileInViewAnimationFromLeft from "@/components/WhileInViewAnimationFromLeft";
import WhileInViewAnimationFromRight from "@/components/WhileInViewAnimationFromRight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewHome = () => {

    const imageCarouselToDisplay = [
        "homepage_image_1.png", "homepage_image_2.png", "homepage_image_3.png", "homepage_image_4.png",
        "homepage_image_1.png", "homepage_image_2.png", "homepage_image_3.png", "homepage_image_4.png",
    ];

    return(
        <div className="min-h-screen w-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between h-8 px-10 py-10 items-center font-serif italic bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100">
                <Button variant="ghost" className="hover:bg-white/30 italic">Elham Mansiz</Button>
                <div className="flex gap-10">
                    <Button variant="ghost" className="hover:bg-white/30 italic">Home</Button>
                    <Button variant="ghost" className="hover:bg-white/30 italic">Projects</Button>
                    <Button variant="ghost" className="hover:bg-white/30 italic">About</Button>
                    <Button variant="ghost" className="hover:bg-white/30 italic">Location</Button>
                    <Button variant="ghost" className="hover:bg-white/30 italic">Contact Us</Button>
                </div>
            </div>

            <div className="flex flex-col">

                <WhileInViewAnimationFromLeft>
                    <div className="grid grid-cols-2 w-full font-serif italic pt-40">
                        <Image src="/homepage_image_3.png" alt="image" width={400} height={400} className="w-full" />
                        <div className="flex flex-col items-center justify-center text-lg">
                            <span>It&apos;s not just a house</span>
                            <br/>
                            <span>It&apos;s a <span className="font-bold">home</span></span>
                        </div>
                    </div>
                </WhileInViewAnimationFromLeft>

                <WhileInViewAnimationFromRight>
                    <div className="grid grid-cols-2 w-full font-serif italic pt-40">
                        <div className="flex flex-col items-center justify-center text-lg">
                            <span>a sacred <span className="font-bold">space</span></span>
                            <br/>
                            <span>to heal and rest</span>
                        </div>
                        <Image src="/homepage_image_4.png" alt="image" width={400} height={400} className="w-full" />
                    </div>
                </WhileInViewAnimationFromRight>

                <div className="flex overflow-x">
                    {imageCarouselToDisplay.map((imageName,key)=>(
                        <div key={key}>
                            <Image src={`/${imageName}`} alt="image" width={400} height={400} className="w-full" />
                        </div>
                    ))}
                </div>

                
            </div>

        </div>
    )
};

export default NewHome;