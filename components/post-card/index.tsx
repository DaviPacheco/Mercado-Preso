import Image from "next/image";
import Link from "next/link";

export default function PostCard(){
return (
    <Link
    href={'/'}
    className="w-full lg:w-10/12 flex group"
    > 
   
    <div className="flex flex-col lg:flex-row text-zambira shadow-lg rounded-xl group-hover:shadow-2xl duration-300 overflow-hidden">
    
    <Image 
    src={"/icones/mercado preso fonte lado.png"}
    alt="Placeholder"
    width={1920}
    height={1080}
    className="max-w-full lg:max-w-[450px] 2xl:max-w-[550px]"
    />

    </div>
    
    
     </Link>
)



}