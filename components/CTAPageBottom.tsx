import { Button } from "./ui/button";
import Link from "next/link";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const CTAPageBottom = () => {
  return(
    <div className="flex flex-col lg:flex-row gap-4">
          <Button
            asChild
            variant="outline"
            className={`bottom-6 w-[250px]  py-7 shadow ease-in-out transition active:scale-95 bg-green-600 hover:bg-green-700 hover:text-white border-0 text-white`}
          >
            <Link
              href="https://api.whatsapp.com/send?phone=60167138848&text=Hi%20Elham%20Mansiz!"
              className="flex gap-1"
            >
              <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8" />
              <span>Whatsapp</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`bottom-6 w-[250px]  py-7 shadow ease-in-out transition active:scale-95 bg-blue-600 hover:bg-blue-700 border-0 text-white hover:text-white`}
          >
            <Link
              href="tel:+60167138848"
              className="flex gap-1"
            >
              <FaPhone className="w-5 h-5 lg:w-6 lg:h-6 scale-x-[-1] mr-1" />
              <span>Phone</span>
            </Link>
          </Button>
        </div>
  )
}

export default CTAPageBottom;