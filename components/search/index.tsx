import { Search as SearchIcon} from "lucide-react";

export default function Search() {
  return (
    <form className="w-full flex basis full items-center justify-end" autoComplete="off">
      <div className="flex w-full flex-col items-center gap-6 my-10">
        <div className="relative flex w-full items-center">
            <SearchIcon className="w-7 h-7 absolute text-zambira/50 left-4"/>
            <input
            id="search"
            name="search"
            type="text"
            className="w-full rounded-xl px-16 py-6 text-zambira bg-Gray85 hover:bg-Gray85/90 caret-zambira transition-all duration-300"
            placeholder="Buscar produtos, marcas e muito mais..." 
            />
        </div>
      </div>
    </form>
  );
}
