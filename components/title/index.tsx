type TitleProps = {
  title: string;
  subtitle: string;
};

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-black uppercase leading-relaxed tracking-[.25em] text-center]">
        {subtitle}
      </span>
      <h1 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-tchovis leading-relaxed text-center">{title}</h1>
    </div>
  );
}
