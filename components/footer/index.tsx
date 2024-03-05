import { Link as LucideLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-zambira text-center w-full mt-24 py-8 min-h-[200px] flex-col gap-12 items-center justify-center">
      <div className="px-4">
        <Link href="/" className="flex gap-4 items-center">
          <Image
            src={"/icones/Mercado Preso logo horizontal.png"}
            alt="Logo do Site"
            width={904}
            height={904}
            className="h-15 w-96 rounded-xl mt-2 mx-auto"
          />
        </Link>
      <div className="flex items-center justify-center mt-7">
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagram size={40} className="mr-10  text-white  hover:text-Gray85/90" />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank">
          <FaYoutube size={40} className="mr-10  text-white hover:text-Gray85/90" />
        </Link>
        <Link href="https://twitter.com/home" target="_blank">
          <FaXTwitter size={40} className="mr-10  text-white hover:text-Gray85/90" />
        </Link>
        <Link href="https://web.whatsapp.com/" target="_blank">
          <FaWhatsapp size={40} className="mr-10  text-white hover:text-Gray85/90" />
        </Link>
        </div>
      </div>
    </div>
  );
}
