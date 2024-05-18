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

const NewHome = () => {

    const backgroundGradientStone = "bg-gradient-to-tr from-stone-50 via-stone-100 to-stone-50";
    const footerLinkButtonCSS = "hover:text-gray-500 cursor-pointer hover:translate-x-1 transition";
    const imageCarouselToDisplay = [
        "homepage_image_3.png", "homepage_image_4.png", "homepage_image_1.png", "homepage_image_2.png",
    ];    

    return(
        <div className="min-h-screen w-full flex flex-col">
            
            {/* HEADER COMPONENT */}
            <div id="header">
                {/* Header Desktop */}
                <div className={`flex justify-between h-8 px-4 lg:px-10 py-10 items-center tracking-[2px] ${backgroundGradientStone} border border-b-1`}>
                    {/* <Button variant="ghost" className="hover:bg-black/5 text-base">Elham Mansiz</Button> */}
                    <Button variant="ghost" className="hover:bg-black/5 text-base"><Link href="/new-home"><Image src="/logo_elhammansiz.png" alt="headerlogo" width={110} height={110} className="invert"/></Link></Button>
                    <div className="hidden lg:block lg:flex lg:flex-row gap-20">
                        <Button variant="ghost" className="hover:bg-black/5 text-base"><Link href="/new-home">Home</Link></Button>
                        <Button variant="ghost" className="hover:bg-black/5 text-base"><Link href="/new-buy">Buy</Link></Button>
                        <Button variant="ghost" className="hover:bg-black/5 text-base"><Link href="/new-join-us">Join Us</Link></Button>
                    </div>
                    <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!"><Button variant="ghost" className="bg-green-500 text-white hover:bg-green-600 hover:text-white text-base flex gap-1"><FaWhatsapp />Whatsapp</Button></Link>
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
                    <span className="italic font-serif lg:text-3xl text-center">
                        Buying a home shouldn&apos;t be stressful<br/><br/>It should be a lifetime experience
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

<div className="flex flex-col gap-10 tracking-[2px] lg:px-12 pt-12 mt-40 bg-gray-50">                    <div className="grid grid-cols-4 text-2xl leading-[36px]">
                        <div className="flex flex-col">
                            <span onClick={()=> scrollToSection("header")} className="pb-4 cursor-pointer text-gray-500 hover:text-gray-600">Elham Mansiz</span>
                            <Link href="/new-about-us" className={`${footerLinkButtonCSS}`}>About us</Link>
                            <Link href="/new-location" className={`${footerLinkButtonCSS}`}>Location</Link>
                            <Link href="mailto:elhammansiz8848@gmail.com" className={`${footerLinkButtonCSS}`}>Email</Link>
                            <Link href="tel:+60167138848" className={`${footerLinkButtonCSS}`}>Phone</Link>
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
                            <Link href="https://www.facebook.com/elhammansizproperties" className={`${footerLinkButtonCSS}`}>Facebook</Link>
                            <Link href="https://www.instagram.com/elhammansiz/" className={`${footerLinkButtonCSS}`}>Instagram</Link>
                            <Link href="https://www.tiktok.com/@elhammansiz" className={`${footerLinkButtonCSS}`}>Tiktok</Link>
                            <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!" className={`${footerLinkButtonCSS}`}>Whatsapp</Link>
                        </div>
                        <div className="flex flex-col gap-4 text-xs">
                            <span>Have questions?</span>
                            <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!">
                                <Button className="rounded-none py-6 bg-gray-400 hover:bg-gray-500 w-full">
                                    Contact us
                                </Button>
                            </Link>
                            <br/>
                            <span>Get updates</span>
                            <span className="text-gray-400">Drop us your email to learn what&apos;s next.</span>
                            <Input className="rounded-none py-6 placeholder:text-gray-300" placeholder="aliffaziz@gmail.com"/>
                        </div>
                    </div>
                    <div className="flex justify-between bg-red-300x py-10 text-sm">
                        <Link href="https://api.whatsapp.com/send?phone=60127710626&text=Hi%20Solah.%20Can%20you%20help%20me%20develop%20a%20website%3F%20I%20would%20like%20to%20know%20more.%20Thanks" className="text-gray-400 font-thin">© 2024 Elham Mansiz - Developed by HireSolah</Link>
                        <div className="flex gap-8 text-black">
                            <Link href="/privacy-policy" className={`${footerLinkButtonCSS}`}>Privacy policy</Link>
                            <Link href="/terms-of-service" className={`${footerLinkButtonCSS}`}>Terms of service</Link>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
};

export default NewHome;