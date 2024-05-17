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


const NewHome = () => {

    const backgroundGradientStone = "bg-gradient-to-tr from-stone-50 via-stone-100 to-stone-50";
    const footerLinkButtonCSS = "hover:text-gray-500 cursor-pointer hover:translate-x-1 transition";
    const imageCarouselToDisplay = [
        "homepage_image_3.png", "homepage_image_4.png", "homepage_image_1.png", "homepage_image_2.png",
    ];    

    return(
        <div className="min-h-screen w-full flex flex-col">
            
            {/* HEADER COMPONENT */}
            <div>
                {/* Header Desktop */}
                <div className={`flex justify-between h-8 px-4 lg:px-10 py-10 items-center tracking-[2px] ${backgroundGradientStone} border border-b-1`}>
                    {/* <Button variant="ghost" className="hover:bg-black/5 text-base">Elham Mansiz</Button> */}
                    <Button variant="ghost" className="hover:bg-black/5 text-base"><Image src="/logo_elhammansiz.png" alt="headerlogo" width={110} height={110} className="invert"/></Button>
                    <div className="hidden lg:block lg:flex lg:flex-row gap-20">
                        <Button variant="ghost" className="hover:bg-black/5 text-base">Home</Button>
                        <Button variant="ghost" className="hover:bg-black/5 text-base">Projects</Button>
                        <Button variant="ghost" className="hover:bg-black/5 text-base">Agent</Button>
                    </div>
                    <Button variant="ghost" className="bg-green-600 text-white hover:bg-green-700 hover:text-white text-base flex gap-1"><FaWhatsapp />Whatsapp</Button>
                </div>


                {/* Header Mobile */}
                <div className={`grid grid-cols-3 items-center h-16 lg:hidden fixed bottom-0 w-full border border-t-1 shadow font-serif ${backgroundGradientStone}`}>
                    <Button variant="ghost" className="hover:bg-black/5 italic h-full rounded-none text-base">Home</Button>
                    <Button variant="ghost" className="hover:bg-black/5 italic h-full rounded-none text-base border-x">Projects</Button>
                    <Button variant="ghost" className="hover:bg-black/5 italic h-full rounded-none text-base">Agent</Button>
                </div>
            </div>

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
                        <br/>
                        <span>It&apos;s a home</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 w-full font-serif italic pt-40">
                    <div className="flex flex-col items-center justify-center text-xs lg:text-3xl">
                        <span>a personal space</span>
                        <br/>
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
                    <span className="italic font-serif lg:text-3xl">
                        Buying a home shouldn&apos;t be stressful<br/><br/>It should be an enjoyable experience
                    </span>
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

                <div className="flex flex-col gap-10 tracking-[2px] lg:px-12 pt-40">
                    <div className="grid grid-cols-4 text-2xl leading-[36px]">
                        <div className="flex flex-col">
                            <span className="text-gray-500 pb-4">Elham Mansiz</span>
                            <span className={`${footerLinkButtonCSS}`}>About Us</span>
                            <span className={`${footerLinkButtonCSS}`}>Location</span>
                            <span className={`${footerLinkButtonCSS}`}>Email</span>
                            <span className={`${footerLinkButtonCSS}`}>Phone</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 pb-4">Projects</span>
                            <span className={`${footerLinkButtonCSS}`}>Perak</span>
                            <span className={`${footerLinkButtonCSS}`}>Pahang</span>
                            <span className={`${footerLinkButtonCSS}`}>Johor</span>
                            <span className={`${footerLinkButtonCSS}`}>Kelantan</span>
                            <span className={`${footerLinkButtonCSS}`}>Terengganu</span>
                            <span className={`${footerLinkButtonCSS}`}>Negeri Sembilan</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-500 pb-4">Socials</span>
                            <span className={`${footerLinkButtonCSS}`}>Facebook</span>
                            <span className={`${footerLinkButtonCSS}`}>Instagram</span>
                            <span className={`${footerLinkButtonCSS}`}>Tiktok</span>
                            <span className={`${footerLinkButtonCSS}`}>Whatsapp</span>
                        </div>
                        <div className="flex flex-col gap-4 text-xs">
                            <span>Have questions?</span>
                            <Button className="rounded-none py-6">Contact us</Button>
                            <br/>
                            <span>Get updates</span>
                            <span className="text-gray-400">Drop us your email to learn what&apos;s next.</span>
                            <Input className="rounded-none py-6 placeholder:text-gray-300" placeholder="aliffaziz@gmail.com"/>
                        </div>
                    </div>
                    <div className="flex justify-between bg-red-300x py-10 text-sm">
                        <span className="text-gray-400 font-thin">© 2024 Elham Mansiz - Developed by HireSolah</span>
                        <div className="flex gap-8 text-black">
                            <span className={`${footerLinkButtonCSS}`}>Privacy policy</span>
                            <span className={`${footerLinkButtonCSS}`}>Terms of service</span>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
};

export default NewHome;