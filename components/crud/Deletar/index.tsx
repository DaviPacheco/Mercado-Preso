import { deleteMember } from "@/functionss/admin/actions";
import Link from "next/link";

export default function Deletar({ id }: { id: number | undefined }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <div className="flex flex-col gap-4 items-center">
        <p className="text-tchovis font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
          Você tem certeza que deseja excluir?
        </p>
        <div className="flex justify-center items-center w-full mt-4 mb-4">
        <Link href={"/admin/management"}>
          <button
            onClick={() => deleteMember(id)}
            className="font-semibold px-3 md:px-6 hover:text-gray-400 text-white rounded-3xl h-6 md:h-7 lg:h-9 xl:h-10  text-center w-28 md:w-32 lg:w-48  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl mr-4"
          >
            Confirmar
          </button>
          </Link>
          <Link href={"/admin/management"}>
            <button className="font-semibold px-3 md:px-6 hover:text-gray-400 text-white rounded-3xl h-6 md:h-7 lg:h-9 xl:h-10  text-center w-28 md:w-32 lg:w-48  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
              Cancelar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
