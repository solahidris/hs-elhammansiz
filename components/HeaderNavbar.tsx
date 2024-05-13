import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { scrollToSection } from "@/functions/scrollToSection";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";

const HeaderNavbar = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const darkThemeSheetButtonMobile = "bg-white/5 hover:bg-white/20 border border-0 text-white"
  const darkThemeSheetButtonDesktop = "dark:border dark:border-0 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/90"
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div
      id="hero"
      className={`dark fixed top-0 w-full flex justify-between p-6 lg:p-10 bg-gradient-to-t from-zinc-800 to-black drop-shadow-md max-h-[76px] z-[100]`}
      // className={`dark fixed top-0 w-full flex justify-between p-6 lg:p-10 bg-black drop-shadow-md max-h-[76px] z-[40]`}
    >
      {/* Left Side */}
      <Button
        asChild
        variant="ghost"
        className="self-center ml-[-10px] dark:hover:bg-transparent cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        <div className="sacramento-navbar-left lg:text-[40px] mb-[-3px] lg:mb-0">
          <Image src="/logo_elhammansiz.png" alt="headerlogo" width={100} height={100} className="invertt" />
        </div>
      </Button>

      {/* Right Side - Desktop */}
      <div className="hidden lg:block flex flex flex-col space-x-4 self-center">
        <Button
          asChild
          variant="outline"
          onClick={() => {
            if (isHome) {
              scrollToSection("hero"); 
            } else {
              router.push("/");
            }
          }}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Home</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => {
            if (isHome) {
              scrollToSection("highlights"); 
            } else {
              router.push("/");
              setTimeout(() => scrollToSection("highlights"), 500); 
            }
          }}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Highlights</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => {
            if (isHome) {
              scrollToSection("reviews"); 
            } else {
              router.push("/");
              setTimeout(() => scrollToSection("reviews"), 500); 
            }
          }}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Reviews</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => {
            if (isHome) {
              scrollToSection("projects"); 
            } else {
              router.push("/");
              setTimeout(() => scrollToSection("projects"), 500); 
            }
          }}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Projects</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => {if (isHome) {router.push("/about")}}}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>About</p>
        </Button>
        {/* <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("services")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Services</p>
        </Button> */}
        {/* <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("teammembers")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Team Members</p>
        </Button> */}
        {/* <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("ourpriority")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Our Priority</p>
        </Button> */}
      </div>

      {/* Right Side - Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="text-3xl self-center mt-[-7px] text-white">
            ☰
          </SheetTrigger>
          <SheetContent className={`bg-gradient-to-r from-black to-zinc-800 border-black`}>
            <SheetHeader>
              <SheetTitle className="text-center">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="ghost"
                    className="self-center ml-[-10px]"
                    onClick={() => scrollToSection("hero")}
                  >
                    <div className="sacramento-navbar-left lg:text-[40px] mb-[-3px] lg:mb-0 ">
                      {/* <Image src="/logo_elhammansiz.png" alt="headerlogo" width={100} height={100} className="" /> */}
                    </div>
                  </Button>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-6 pt-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => {
                      if (isHome) {
                        scrollToSection("hero"); 
                      } else {
                        router.push("/");
                      }
                    }}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Home</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => {
                      if (isHome) {
                        scrollToSection("highlights"); 
                      } else {
                        router.push("/");
                        setTimeout(() => scrollToSection("highlights"), 500); 
                      }
                    }}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Highlights</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => {
                      if (isHome) {
                        scrollToSection("reviews"); 
                      } else {
                        router.push("/");
                        setTimeout(() => scrollToSection("reviews"), 500); 
                      }
                    }}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Reviews</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => {
                      if (isHome) {
                        scrollToSection("projects"); 
                      } else {
                        router.push("/");
                        setTimeout(() => scrollToSection("projects"), 500); 
                      }
                    }}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Projects</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => {if (isHome) {router.push("/about")}}}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>About</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className={`absolute bottom-6 w-[calc(100%-48px)]  py-7 shadow ease-in-out transition active:scale-95 bg-green-600 border-0 text-white`}
                  >
                    <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!" className="flex gap-1">
                      <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8" />
                      <span>Whatsapp</span>
                    </Link>
                  </Button>
                </SheetClose>
                {/* <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("services")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Services</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("teammembers")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Team Members</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("ourpriority")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Our Priority</p>
                  </Button>
                </SheetClose> */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HeaderNavbar;