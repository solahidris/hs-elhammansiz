"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full py-10 mt-[12px] b-[12px] lg:mt-10 px-10 lg:px-20 grid grid-cols-3 md:grid-cols-3 max-w-[100vw] mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")} style={{ gridColumn: calculateGridColumn(i) }}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-xl cursor-pointer absolute inset-0 h-1/2 w-[90vw] lg:w-[75vw] m-auto z-10 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          // "absolute min-h-[400vh] mt-[-480px] w-full left-0 top-0 bg-black/75 opacity-0 z-10",
          // "absolute min-h-screen mt-[-300px] w-full left-0 top-0 bg-black/75 opacity-0 z-10",
          "absolute h-[330vh] lg:h-[480vh] mt-[-300px] lg:mt-[-640px] w-full left-0 top-0 bg-black/50 opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const calculateGridColumn = (index: number) => {
  if (index === 0 || index === 3) return 'span 2'; // First and fourth cards take 2 grid columns
  return 'span 1'; // Second and third cards take 1 grid column
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-bottom absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-[90vw] lg:w-[75vw] flex flex-col justify-end rounded-xl shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.5,
        }}
        className="absolute inset-0 h-full w-full bg-black/70 opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]" 
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
