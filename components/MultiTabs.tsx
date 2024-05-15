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
          <p>Sold Out Projects in Perak</p>
          <MultiTabsContent title="Perak" />
        </div>
      ),
    },
    {
      title: "Pahang",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab2</p>
          <MultiTabsContent title="Perak123" />
        </div>
      ),
    },
    {
      title: "Johor",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab3</p>
          <MultiTabsContent title="Perak456" />
        </div>
      ),
    },
    {
      title: "Kelantan",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab4</p>
          <MultiTabsContent title="Perak" />
        </div>
      ),
    },
    {
      title: "Terengganu",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab5</p>
          <MultiTabsContent title="Perak" />
        </div>
      ),
    },
    {
      title: "Negeri Sembilan",
      value: "random2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 lg:p-12 flex flex-col gap-4 lg:gap-8 text-xl md:text-4xl font-bold text-white bg-gradient-to-tr from-black to-zinc-700">
          <p>Inside Tab6</p>
          <MultiTabsContent title="Perak" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-[100vw] mx-auto w-full px-10 lg:px-20 items-start justify-start my-20">
      {/* md:h-full md:min-h-  */}
      <TabsAceternity tabs={tabs} />
    </div>
  );
}

