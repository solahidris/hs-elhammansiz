"use client";
import { motion } from "framer-motion";
import { HeroHighlight , Highlight } from "@/components/ui/Ace-hero-highlight";

export function HeroHighlightHomepage() {
  return (
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
        className="text-2xl px-4 md:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-[50px] lg:leading-[90px] text-center mx-auto "
      >
        Buying a home is easy with <br/>
        <Highlight className="text-white text-4xl lg:text-7xl">
          Elham Mansiz
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
