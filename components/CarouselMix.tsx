import * as React from "react"
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselMix() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-full flex justify-center lg:justify-start lg:ml-20 mx-auto items-center px-[90px] mt-[60px] lg:mt-[120px]">
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs lg:max-w-lg lg:mr-20"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 rounded-lg">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <Image src={`/carousel_image_${index+1}.png`} alt={`carousel_image_${index+1}.png`} width={1000} height={1000} className="bg-cover h-full w-full rounded-lg"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
