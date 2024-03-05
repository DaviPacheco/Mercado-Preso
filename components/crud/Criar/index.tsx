import { createMember, editMember } from "@/functionss/admin/actions";
import { Membro } from "@prisma/client";

export default function Criar() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <form
        className="flex flex-col gap-4 items-center"
        autoComplete="off"
        action={createMember}
      >
        <div className="flex flex-col gap-2 items-center">
          <label className="text-tchovis font-medium text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
            Nome
          </label>
          <input
            name="name"
            placeholder="Nome"
            className="border text-xl rounded-lg h-16 lg:w-64 px-4 focus:outline-none focus:border-tchovis"
          />
          <label className="text-tchovis font-medium text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-3">
            Cargo
          </label>
          <input
            name="cargo"
            placeholder="Cargo"
            className="border text-xl rounded-lg h-16 lg:w-64 px-4 focus:outline-none focus:border-tchovis"
          />
          <label className="text-tchovis font-medium text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-3">
            Email
          </label>
          <input
            name="email"
            placeholder="Email"
            className="border text-xl rounded-lg h-16 lg:w-64 px-4 focus:outline-none focus:border-tchovis"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-4 mb-4">
          <button
            
            className=" bg-tchovis text-black font-semibold px-3 md:px-6 rounded-full h-10 md:h-12 lg:h-16 xl:h-20 text-center w-28 md:w-32 lg:w-48 text-lg md:text-xl lg:text-2xl xl:text-3xl hover:bg-tchovis/50"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}