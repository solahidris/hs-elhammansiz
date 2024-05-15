import { useState } from "react";
import Lottie from "lottie-react";
import animationAboutMission from "@/public/animation_about_mission.json";
import animationAboutVision from "@/public/animation_about_vision.json";

const VisionMission = () => {

  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className="w-full lg:w-full flex flex-col gap-10 lg:gap-20 justify-center lg:justify-start mx-auto items-center px-8 lg:px-[180px] mt-[90px] lg:mt-[90px]">
      <div className="w-full flex items-center">
        <div className="text-xl font-base w-full lg:w-[80%] leading-8 tracking-wide lg:tracking-wider ">
          <p className="text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[120px]">
            Vision
          </p>
          <br />
          {isEnglish ? (
            <span>
              To become a company specializing in management, consulting, real
              estate marketing, and financing (Bank and LPPSA), assisting
              clients through sales and management services throughout Malaysia.
            </span>
          ) : (
            <span>
              Menjadi Syarikat pengurusan, perundingan, pemasaran hartanah dan
              pembiayaan (Bank dan LPPSA), dalam membantu pelanggan menerusi
              jualan dan pengurusan di seluruh negeri di Malaysia
            </span>
          )}
          <br />
          <br />
        </div>
        {/* <Image
              src={`/about_hero.png`}
              alt={`carousel_image_1.png`}
              width={1000}
              height={1000}
              className="bg-cover rounded-lg aspect-square object-cover w-[30vw]"
            /> */}
        <div className="w-[30%] lg:w-[50%] lg:pl-10 lg:relative absolute right-10 mt-[-280px] lg:right-0 lg:mt-0">
          <Lottie animationData={animationAboutVision} loop={true} />
        </div>
      </div>
      <div className="w-full flex items-center">
        {/* <Image
              src={`/about_hero.png`}
              alt={`carousel_image_1.png`}
              width={1000}
              height={1000}
              className="bg-cover rounded-lg aspect-square object-cover w-[30vw]"
            /> */}
        {/* <div className="w-[50%] lg:pr-10"> */}
        <div className="w-[30%] lg:w-[50%] lg:ml-[-50px] lg:mr-10 lg:relative absolute left-4 mt-[-540px] lg:left-0 lg:mt-0">
          <Lottie animationData={animationAboutMission} loop={true} />
        </div>
        <div className="text-xl font-base w-full lg:w-[80%] leading-8 tracking-wide lg:tracking-wider ">
          <p className="text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[60px] text-end">
            Mission
          </p>
          <br />
          {isEnglish ? (
            <span>
              Setting the highest performance standards as the most successful
              group in Koperasi Hartanah Berhad for marketing and sales in
              Peninsular Malaysia, specifically in the states of Kedah, Perak,
              Pahang, Negeri Sembilan, and Melaka. Providing the best services
              to the management of Koperasi Hartanah Berhad. For the year 2023,
              the sales target is 250 for Elham Mansiz and 300 for the
              Consultant Team, making a total of 550. Finally, further enhancing
              knowledge not only for the military but also for the public and
              private sectors.
            </span>
          ) : (
            <span>
              Menetapkan tahap prestasi paling utama sebagai kumpulan paling
              berjaya di Koperasi Hartanah Berhad dalam pemasaran dan jualan di
              semenanjung Malaysia di Negeri Kedah, Perak, Pahang, Negeri
              Sembilan dan Melaka. Memberikan khidmat yang terbaik kepada pihak
              pengurusan Koperasi Hatanah Berhad, Bagi tahun 2023 target sale
              250 bagi Elham Mansiz manakala bagi Team Konsultant 300, Jumlah
              adalah 550. Akhir sekali, Memantapkan lagi ilmu tidak cuma hanya
              kepada tentera malahan awam dan juga swasta.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisionMission;