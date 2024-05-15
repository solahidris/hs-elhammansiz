"use client";

import Image from "next/image";
import { TabsAceternity } from "./ui/tabs-aceternity";
import MultiTabsContent from "./MultiTabsContent";

export function MultiTabs() {
  const tabs = [
    {
      title: "Perak",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <div className="mb-2"><span className="bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-md lg:rounded-lg">Sold Out in Perak</span></div>
          <MultiTabsContent title="Perak" />
        </div>
      ),
    },
    {
      title: "Pahang",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <div className="mb-2"><span className="bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-md lg:rounded-lg">Sold Out in Pahang</span></div>
          <MultiTabsContent title="Pahang" />
        </div>
      ),
    },
    {
      title: "Johor",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <div className="mb-2"><span className="bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-md lg:rounded-lg">Sold Out in Johor</span></div>
          <MultiTabsContent title="Johor" />
        </div>
      ),
    },
    {
      title: "Kelantan",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <div className="mb-2"><span className="bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-md lg:rounded-lg">Sold Out in Kelantan</span></div>
          <MultiTabsContent title="Kelantan" />
        </div>
      ),
    },
    {
      title: "Terengganu",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <div className="mb-2"><span className="bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-md lg:rounded-lg">Sold Out in Terengganu</span></div>
          <MultiTabsContent title="Terengganu" />
        </div>
      ),
    },
    {
      title: "Negeri Sembilan",
      value: "random2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <div className="mb-2"><span className="bg-red-600 text-white px-2 py-1 lg:px-6 lg:py-2 rounded-md lg:rounded-lg">Sold Out in Negeri Sembilan</span></div>
          <MultiTabsContent title="Negeri Sembilan" />
        </div>
      ),
    },
  ];

  return (
    <div className=" [perspective:1000px] relative flex flex-col max-w-[100vw] mx-auto w-full px-5 lg:px-20 items-start justify-start my-20">
      {/* md:h-[40rem]  */}
      <TabsAceternity tabs={tabs} />
    </div>
  );
}

