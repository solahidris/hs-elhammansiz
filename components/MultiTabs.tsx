"use client";

import Image from "next/image";
import { TabsAceternity } from "./ui/tabs-aceternity";

export function MultiTabs() {
  const tabs = [
    {
      title: "Perak",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab1</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Pahang",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab2</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Johor",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab3</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Kelantan",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab4</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Terengganu",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab5</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Negeri Sembilan",
      value: "random2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab6</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-[100vw] mx-auto w-full px-10 lg:px-20 items-start justify-start my-20">
      <TabsAceternity tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/carousel_image_2.png"
      alt="dummy image"
      width={1000}
      height={1000}
      className="object-cover object-center h-full w-full relative inset-x-0 rounded-xl mx-auto"
    />
  );
};
