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

const HeaderNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const darkThemeSheet = "bg-sky-700 border-sky-800"
  const darkThemeSheetButtonMobile = "border-0 dark:border dark:border-0 dark:hover:bg-sky-800/50 bg-sky-600 dark:text-white/90"
  const darkThemeSheetButtonDesktop = "dark:border dark:border-0 dark:hover:bg-sky-800/50 dark:bg-sky-600 dark:text-white/90"

  return (
    <div
      id="hero"
      className="dark fixed top-0 w-full flex justify-between p-6 lg:p-10 bg-gradient-to-t from-sky-700 to-sky-900 drop-shadow-md max-h-[76px] z-[40]"
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
          onClick={() => scrollToSection("hero")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Home</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("location")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Location</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("reviews")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Reviews</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("about")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>About</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("services")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Services</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("teammembers")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Team Members</p>
        </Button>
        <Button
          asChild
          variant="outline"
          onClick={() => scrollToSection("ourpriority")}
          className={`cursor-pointer ease-in-out transition active:scale-95 ${isDarkTheme && `${darkThemeSheetButtonDesktop}`}`}
        >
          <p>Our Priority</p>
        </Button>
      </div>

      {/* Right Side - Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="text-3xl self-center mt-[-7px] text-white">
            ☰
          </SheetTrigger>
          <SheetContent className={`${isDarkTheme && `${darkThemeSheet} dark`}`}>
            <SheetHeader>
              <SheetTitle className="text-center">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="ghost"
                    className="self-center ml-[-10px]"
                    onClick={() => scrollToSection("hero")}
                  >
                    <div className="sacramento-navbar-left lg:text-[40px] mb-[-3px] lg:mb-0">
                      <Image src="/logo_elhammansiz.png" alt="headerlogo" width={100} height={100} className="invertt" />
                    </div>
                  </Button>
                </SheetClose>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-6 pt-6">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("hero")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Home</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("location")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Location</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("reviews")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>Reviews</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => scrollToSection("about")}
                    className={`py-7 shadow ease-in-out transition active:scale-95 ${isDarkTheme && darkThemeSheetButtonMobile}`}
                  >
                    <p>About</p>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
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
                </SheetClose>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HeaderNavbar;