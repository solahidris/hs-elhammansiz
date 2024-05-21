import Link from "next/link";
import { scrollToSection } from "@/functions/scrollToSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FooterMenu = () => {

    const footerLinkButtonCSS = "hover:text-gray-300 text-white cursor-pointer hover:translate-x-1 transition";

    return (
        <div className="flex flex-col gap-10 tracking-[2px] lg:px-12 pt-12 mt-40 bg-gray-50 text-white"
            style={{ backgroundImage: `url('/blue_background.png')` }}>
            <div className="grid grid-cols-4 text-2xl leading-[36px]">
                <div className="flex flex-col">
                    <span onClick={() => scrollToSection("header")} className="pb-4 cursor-pointer text-gray-300 hover:text-gray-400">Elham Mansiz</span>
                    <Link href="/about-us" className={`${footerLinkButtonCSS}`}>About us</Link>
                    <Link href="/location" className={`${footerLinkButtonCSS}`}>Location</Link>
                    <Link href="mailto:elhammansiz8848@gmail.com" className={`${footerLinkButtonCSS}`}>Email</Link>
                    <Link href="tel:+60167138848" className={`${footerLinkButtonCSS}`}>Phone</Link>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-300 cursor-default pb-4">Projects</span>
                    <span className={`${footerLinkButtonCSS}`}>Perak</span>
                    <span className={`${footerLinkButtonCSS}`}>Pahang</span>
                    <span className={`${footerLinkButtonCSS}`}>Johor</span>
                    <span className={`${footerLinkButtonCSS}`}>Kelantan</span>
                    <span className={`${footerLinkButtonCSS}`}>Terengganu</span>
                    <span className={`${footerLinkButtonCSS}`}>Negeri Sembilan</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-300 cursor-default pb-4">Socials</span>
                    <Link href="https://www.facebook.com/elhammansizproperties" className={`${footerLinkButtonCSS}`}>Facebook</Link>
                    <Link href="https://www.instagram.com/elhammansiz/" className={`${footerLinkButtonCSS}`}>Instagram</Link>
                    <Link href="https://www.tiktok.com/@elhammansiz" className={`${footerLinkButtonCSS}`}>Tiktok</Link>
                    <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!" className={`${footerLinkButtonCSS}`}>Whatsapp</Link>
                </div>
                <div className="flex flex-col gap-4 text-xs">
                    <span>Have questions?</span>
                    <Link href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!">
                        <Button className="rounded-none py-6 bg-sky-300 hover:bg-sky-400 w-full">
                            Contact us
                        </Button>
                    </Link>
                    <br />
                    <span>Get updates</span>
                    <span className="text-gray-200">Drop us your email to learn what&apos;s next.</span>
                    <Input className="rounded-none py-6 placeholder:text-gray-300" placeholder="aliffaziz@gmail.com" />
                </div>
            </div>
            <div className="flex justify-between py-10 text-sm">
                <Link href="https://api.whatsapp.com/send?phone=60127710626&text=Hi%20Solah.%20Can%20you%20help%20me%20develop%20a%20website%3F%20I%20would%20like%20to%20know%20more.%20Thanks" className="text-gray-300 font-thin">© 2024 Elham Mansiz - Developed by HireSolah</Link>
                <div className="flex gap-8 text-black">
                    <Link href="/privacy-policy" className={`${footerLinkButtonCSS}`}>Privacy policy</Link>
                    <Link href="/terms-of-service" className={`${footerLinkButtonCSS}`}>Terms of service</Link>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu;