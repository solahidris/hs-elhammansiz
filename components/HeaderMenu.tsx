import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const HeaderMenu = () => {
    return (
        <div id="header">
            {/* Header Desktop */}
            <div className={`fixed w-full flex justify-between h-8 px-4 lg:px-10 py-10 items-center tracking-[2px] bg-cover z-[90]`} style={{ backgroundImage: `url('/blue_background.png')` }} >
                <Button variant="ghost" className="hover:bg-white/15 text-base"><Link href="/"><Image src="/logo_elhammansiz.png" alt="headerlogo" width={110} height={110} /></Link></Button>
                <div className="hidden lg:block lg:flex lg:flex-row gap-20 text-white">
                    <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition text-base"><Link href="/">Home</Link></Button>
                    <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition text-base"><Link href="/buy">Buy</Link></Button>
                    <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition text-base"><Link href="/join-us">Join Us</Link></Button>
                </div>
                <Link className="hidden lg:block" href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!"><Button variant="ghost" className="bg-[#3ba72f] text-white hover:bg-green-600 hover:text-white text-base flex gap-1"><FaWhatsapp />Whatsapp</Button></Link>

                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger><RxHamburgerMenu className="text-white h-6 w-6 mr-2" /></SheetTrigger>
                        <SheetContent className="z-[100] bg-contain" style={{ backgroundImage: `url('/blue_background.png')` }}>
                            <SheetHeader>
                                <SheetTitle className="text-white flex justify-center"><Image src="/logo_elhammansiz.png" alt="headerlogo" width={110} height={110} /></SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col justify-between text-white min-h-[calc(100vh-80px)]">
                                        <div className="flex flex-col gap-20 pt-20">
                                            <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition py-8 text-3xl font-thin tracking-[2px]"><Link href="/">Home</Link></Button>
                                            <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition py-8 text-3xl font-thin tracking-[2px]"><Link href="/buy">Buy</Link></Button>
                                            <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition py-8 text-3xl font-thin tracking-[2px]"><Link href="/join-us">Join Us</Link></Button>
                                        </div>
                                        <div className="pb-5"> 
                                        <Link className="w-full" href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!"><Button variant="ghost" className="bg-[#3ba72f] text-white hover:bg-green-600 hover:text-white text-base flex gap-2 w-full py-8 text-xl font-thin tracking-[2px]"><FaWhatsapp />Whatsapp</Button></Link>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;