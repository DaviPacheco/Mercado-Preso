import { Banknote, CreditCard, Link as LinkLucide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type comprasProps={
    img:string; 
    tipo:string;
  }
export default function ProductsCard({img,tipo}:comprasProps) {
  return (
    <Link href={"/"} className="group">
        <div className="flex group-hover:shadow-2xl rounded-xl duration-300">
        <div className="flex w-full flex-col rounded-xl text-zambira shadow-lg">
          <div className="overflow-hidden rounded-t-xl text-zambira">
            <Image
              src="/icones/wok.jpg"
              alt="Placeholder"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 flex-col gap-4 justify-between">
            <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl font font-semibold text-black line-clamp-2">
              PlaceHolder
            </h1>
            <div className="flex justify-between gap-4 items-center">
              <div className=" flex gap-2 items-center text-lg font-bold text-tchovis">
                <Banknote className="h-7 w-7" />
                <span className="text-lg 2xl:text-xl 3xl:text-2xl">5000</span>
              </div>
              <div className="flex gap-2 items-center text-lg font-bold text-black">
                <CreditCard className="h-7 w-7" />
                <span className="text-lg 2xl:text-xl 3xl:text-2xl">
                  {" "}
                  Até  <span className="text-tchovis font-extrabold">14x</span> sem juros
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
