import { editMember } from "@/functionss/admin/actions";
import { Membro } from "@prisma/client";
export default function Vizualizar({ member }: { member: Membro | null }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-2 items-center">
          <label className="text-tchovis font-medium text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
            Nome
          </label>
          <input
            name="name"
            placeholder="Nome"
            className="border text-xl rounded-lg h-16 lg:w-64 px-4 focus:outline-none focus:border-tchovis"
            defaultValue={member?.name}
            disabled
          />
          <label className="text-tchovis font-medium text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-3">
            Cargo
          </label>
          <input
            name="cargo"
            placeholder="Cargo"
            className="border text-xl rounded-lg h-16 lg:w-64 px-4 focus:outline-none focus:border-tchovis"
            defaultValue={member?.cargo}
            disabled
          />
          <label className="text-tchovis font-medium text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-3">
            Email
          </label>
          <input
            name="email"
            placeholder="Email"
            className="border text-xl rounded-lg h-16 lg:w-64 px-4 focus:outline-none focus:border-tchovis"
            defaultValue={member?.email}
            disabled
          />
    </div>
    </div>
    </div>
  );
}
