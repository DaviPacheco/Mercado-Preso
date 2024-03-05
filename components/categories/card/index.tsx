import Image from "next/image";

type categoriesCardProps = {
    title:string;
    src:string;

}


export default function categoriesCard({title,src}:categoriesCardProps) {
  return <div className="flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 transition-shadow duration-200 rounded-md hover:shadow-2xl mt-12">
    <Image 
    src={src}
    alt={title}
    width={120}
    height={120}
    className="max-h-[75px] max-w-[75px] xl:max-h-[120px] xl:max-w-[120px] 2xl:max-h-[220px] 2xl:max-w-[220px]"
    />
    
    <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-black font-semibold cursor-defaut rounded-xl bg-tchovis w-56">{title}</h1>
    <p className="text-zambira text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center line-clamp-6 cursor-defaut"></p>




  </div>;
}
