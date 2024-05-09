import Link from "next/link";
import { Button } from "./ui/button";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex justify-between items-center p-6 lg:p-10 bg-gradient-to-b from-sky-700 to-sky-900 text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]">
      {/* <Button asChild variant="ghost" className="ml-[-10px]"><Link href="/">Dentaleaf 2024</Link></Button> */}
      <div className="flex">
        <Button asChild
          onClick={() => scrollToSection("hero")}
          variant="ghost"
          className="self-center ml-[-10px] cursor-pointer ease-in-out transition active:scale-95 lg:block hidden hover:bg-sky-800 hover:text-white"
        >
          <p className="sacramento-navbar-left lg:text-[40px] mb-[-3px] lg:mb-0">
            Elham Mansiz
          </p>
        </Button>
        <Link className="flex" href="https://api.whatsapp.com/send?phone=60127710626&text=Hi%20Solah.%20Can%20you%20help%20me%20develop%20a%20website%3F%20I%20would%20like%20to%20know%20more.%20Thanks">
          <p className="lg:text-[10px] mb-[-3px] lg:mb-0 self-end ml-2 ">
            Developed by HireSolah
          </p>
        </Link>
      </div>

      <div className="flex w-[33vw]">
      <div className="flex flex-col">

        <span>Address</span>
        <span>No 2-2, Jalan BPP 5/3, Pusat Bandar Putra Permai, 43300 Seri Kembangan, Selangor , Seri Kembangan, Malaysia</span>
        </div>
        <div className="flex flex-col">

        <span>Email</span>
        <span>elhammansiz8848@gmail.com</span>
        </div>
      </div>

      <div className="flex flex-row gap-2 lg:gap-4 mr-[-16px]">
        <Button asChild variant="ghost" className="cursor-pointer ease-in-out transition active:scale-95 hover:bg-sky-800 hover:text-white"><Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%Mansiz!"><FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8" /></Link></Button>
        <Button asChild variant="ghost" className="cursor-pointer ease-in-out transition active:scale-95 hover:bg-sky-800 hover:text-white"><Link href="tel:+60167138848"><FaPhoneAlt className="w-4 h-4 lg:w-6 lg:h-6" /></Link></Button>
        <Button asChild variant="ghost" className="cursor-pointer ease-in-out transition active:scale-95 hover:bg-sky-800 hover:text-white"><Link href="https://www.instagram.com/elhammansiz/"><FaInstagram className="w-6 h-6 lg:w-8 lg:h-8" /></Link></Button>
      </div>

    </div>
  )
};

export default Footer;