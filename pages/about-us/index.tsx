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

import AboutUsHero from "@/components/AboutUsHero";
import Timeline from "@/components/Timeline";
import VisionMission from "@/components/VisionMission";

import HeaderMenu from "@/components/HeaderMenu";
import FooterMenu from "@/components/FooterMenu";

const AboutUsPage = () => {

    const imageCarouselToDisplay = [
        "carousel_image_3.png", "carousel_image_4.png", "carousel_image_1.png", "carousel_image_2.png"
    ];    

    return(
        <div className="min-h-screen w-full flex flex-col">
            
            {/* HEADER COMPONENT */}
            <HeaderMenu />

            {/* BODY COMPONENT */}
            <div className="flex flex-col">
                <AboutUsHero />
                <Timeline />
                <VisionMission />
                <FooterMenu />
            </div>

        </div>
    )
};

export default AboutUsPage;