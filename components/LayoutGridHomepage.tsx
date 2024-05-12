"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/Layout-grid";

export function LayoutGridHomepage() {
  return (
    <div className="lg:h-screen h-[50vh] w-full mt-[-20px] lg:mt-[200px]">
      <span id="highlights" className="absolute left-0 text-[20px] lg:text-5xl z-10 font-bold mt-[-12px] lg:mt-[-40px] bg-gradient-to-b from-black to-black/70 text-white px-6 py-1 lg:px-10 lg:py-4 rounded-r-lg lg:rounded-r-xl z-0">Highlights</span>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-3xl lg:text-5xl text-white">Hidup Bandar Moden</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-xs lg:text-lg my-4 max-w-lg text-neutral-200">
        Rasai tenaga bersemangat kehidupan bandar dengan ruang hidup bandar moden ini.
        Terletak dengan mudah berhampiran semua kemudahan, ia menawarkan gabungan sempurna
        kecanggihan dan keselesaan.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-3xl lg:text-5xl text-white">Elegan Klasik</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-xs lg:text-lg my-4 max-w-lg text-neutral-200">
        Masuki dunia kecantikan abadi dengan rumah elegan klasik ini.
        Dengan senibina yang disempurnakan dan hiasan mewah, ia adalah tempat di mana
        setiap detik diisi dengan keanggunan dan pesona.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-3xl lg:text-5xl text-white">Tempat Perlindungan Selesa</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-xs lg:text-lg my-4 max-w-lg text-neutral-200">
        Lepaskan diri ke desa dan rehat di tempat perlindungan kotej selesa ini.
        Dikelilingi dengan keindahan alam semula jadi, ia adalah tempat persemadian
        kedamaian dan ketenangan di mana anda boleh bersambung semula dengan diri sendiri
        dan dunia di sekeliling anda.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-3xl lg:text-5xl text-white">Syurga Pantai</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-xs lg:text-lg my-4 max-w-lg text-neutral-200">
        Terimalah gaya hidup pantai dengan syurga pantai ini.
        Bangun dengan bunyi ombak dan nikmati keindahan pemandangan laut tanpa batas.
        Ia adalah tempat di mana setiap hari berasa seperti percutian.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/homepage_image_1.png",
      // "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/homepage_image_2.png",
      // "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/homepage_image_3.png",
      // "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 bg-right",
    thumbnail:
      "/homepage_image_4.png",
      // "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
