import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

const HeaderMenu = () => {
    return (
        <div id="header">
            {/* Header Desktop */}
            <div className={`fixed w-full flex justify-between h-8 px-4 lg:px-10 py-10 items-center tracking-[2px] bg-cover z-[100]`} style={{ backgroundImage: `url('/blue_background.png')` }}>
                <Button variant="ghost" className="hover:bg-white/15 text-base"><Link href="/"><Image src="/logo_elhammansiz.png" alt="headerlogo" width={110} height={110} /></Link></Button>
                <div className="hidden lg:block lg:flex lg:flex-row gap-20 text-white">
                    <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition text-base"><Link href="/">Home</Link></Button>
                    <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition text-base"><Link href="/buy">Buy</Link></Button>
                    <Button variant="ghost" className="hover:bg-white/15 hover:text-white hover:scale-[105%] transition text-base"><Link href="/join-us">Join Us</Link></Button>
                </div>
                <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!"><Button variant="ghost" className="bg-green-500 text-white hover:bg-green-600 hover:text-white text-base flex gap-1"><FaWhatsapp />Whatsapp</Button></Link>
            </div>


            {/* Header Mobile */}
            <div className={`grid grid-cols-3 items-center h-16 lg:hidden fixed bottom-0 w-full border border-t-1 border-x-0 border-b-0 border-slate-300 shadow bg-cover text-white`} style={{ backgroundImage: `url('/blue_background.png')` }}>
                <Button variant="ghost" className="hover:bg-white/15 hover:text-white tracking-[1px] h-full rounded-none text-base">Home</Button>
                <Button variant="ghost" className="hover:bg-white/15 hover:text-white tracking-[1px] h-full rounded-none text-base border-x border-slate-300">Projects</Button>
                <Button variant="ghost" className="hover:bg-white/15 hover:text-white tracking-[1px] h-full rounded-none text-base">Agent</Button>
            </div>
        </div>
    )
}

export default HeaderMenu;