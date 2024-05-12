"use client";
import { motion } from "framer-motion";
import { HeroHighlight , Highlight } from "@/components/ui/Ace-hero-highlight";
import animation_house_homepage2 from "../public/animation_house_homepage2.json";

import Lottie from "lottie-react";

export function HeroHighlightHomepage() {
  return (
    <>
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 text-xl md:text-6xl font-bold text-neutral-900 max-w-4xl lg:max-w-full leading-[40px] lg:leading-[100px] text-center mx-auto bg-red-300x mt-[-40px] lg:mt-10"
        >
        Buying a home is easy with <br/>
        <Highlight className="text-white text-[36px] lg:text-7xl">
          Elham Mansiz
        </Highlight>
      </motion.h1>
    </HeroHighlight>

    <div className="absolute top-[100px] lg:top-[20px] left-[-150px] lg:left-[-400px] z-10">
      <Lottie
        animationData={animation_house_homepage2}
        loop={false}
      />
    </div>

    </>
  );
}
