import Image from "next/image";
import WhileInViewAnimation from "./WhileInViewAnimation";
import WhileInViewAnimationFromRight from "./WhileInViewAnimationFromRight";
import WhileInViewAnimationFromLeft from "./WhileInViewAnimationFromLeft";

const AboutUsHero = () => {
  return(
    <div className="w-full lg:w-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center lg:justify-start mx-auto items-center px-8 lg:px-[180px] mt-[60px] lg:mt-[120px]">
          <WhileInViewAnimationFromLeft>
          <p className="text-xl font-base w-full leading-8 tracking-[2px]">
            <span className="text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[120px]">
              Elham Mansiz
            </span>
            <br />
            ditubuhkan pada tahun 2014 dan diterajui barisan pengurusan yang
            mahir dalam bidang pemasaran selaras dengan misi dan visi syarikat
            yang menjalinkan usahasama bersama pihak pemaju melalui kerjasama
            Join Venture (JV).
            <br />
            <br />
            Elham Mansiz juga mempunyai lebih 200 orang konsultant hartanah yang
            berdaftar di bawah Koperasi Hartanah Bersatu yang terlatih secara
            professional dan berdaya saing dari segi pengetahuan dan teknik
            jualan.
            <br />
            <br />
            Pemasaran hartanah yang diuruskan oleh Elham Mansiz merangkumi
            &quot;Jualan dan dokumentasi&quot; bagi pihak bank dan juga LPPSA
            (Lembaga Pembiayaan Perumahan Sektor Awam). Kepakaran kami adalah
            menguruskan &quot;client&quot; tentera.
          </p>
          </WhileInViewAnimationFromLeft>
          <div className="h-full w-full lg:w-[100%] flex flex-col mt-[-40px] lg:mt-[-100px]">
            <Image
              src={`/about_hero.png`}
              alt={`carousel_image_1.png`}
              width={1000}
              height={1000}
              className="bg-cover rounded-lg aspect-square object-cover"
            />
            <div className="flex flex-col items-center pt-2">
              <span className="font-semibold">ZAMZILA AHMAD</span>
              <span className="font-thin text-center text-sm">BOARD OF GROUP DIRECTOR ELHAM MANSIZ</span>
            </div>
          </div>
        </div>
  )
}

export default AboutUsHero;