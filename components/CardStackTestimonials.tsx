"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/utils/cn";

export function CardStackTestimonials() {
  return (
    <div className="h-full flex items-center justify-center w-full mt-[104px] lg:mt-[80px] lg:absolute lg:justify-end lg:right-20">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Siti Nurhafiza",
    designation: "Musician",
    content: (
      <p>
        Smooth and efficient process from <Highlight>start to finish.</Highlight> Exceptional service
        and guidance. Highly recommend!
      </p>
    ),
  },
  {
    id: 1,
    name: "Mahadhir Mohamad",
    designation: "Politician",
    content: (
      <p>
        Selling was a breeze with Elham Mansiz. Great communication and
        quick sale at a <Highlight>great price.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Cik Bee",
    designation: "Comedian",
    content: (
      <p>
        Elham Mansiz <Highlight>expertise and professionalism</Highlight> helped me identify
        great investment opportunities. Grateful for their partnership.
      </p>
    ),
  },
];
