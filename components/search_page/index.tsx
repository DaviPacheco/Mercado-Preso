import { Membro } from "@prisma/client";
import SecondarySearch from "./secondary-search";
import MembersTable from "../members-table";
import Link from "next/link";

export default function SearchPage({
  members,
  count,
}: {
  members: Membro[];
  count: number;
}) {
  return (
    <div
      className="w-full py-16 px-2 md:px-12  min-h-screen"
    >
      <SecondarySearch count={count} />
      {count != 0 ? (
        <div
          className=" w-full mt-16 mx-auto relative overflow-x-auto shadow-md rounded-lg items-center"
        >
          <table className="w-full">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 font-normal text-md xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-xl lg:text-2xl text-blue-900"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-normal text-md xl:text-3xl md:text-xl 2xl:text-4xl 3xl:text-5xl lg:text-2xl text-blue-900"
                >
                  NOME
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-normal text-md xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-xl lg:text-2xl text-blue-900"
                >
                  CARGO
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-normal text-md xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-xl lg:text-2xl text-blue-900"
                >
                  EMAIL
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {members.map((members, index) => (
                <MembersTable key={index} members={members} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <span className="text-2xl font-extrabold">
            Não há anúncios que correspondam à sua busca
          </span>
          <span className="text-xl text-black/70">
            Navegue pelas{" "}
            <Link href="/posts" className="text-tchovis hover:text-tchovis/50">
              {" "}
              ofertas{" "}
            </Link>{" "}
            para encontrar um produto semelhante.
          </span>
        </div>
      )}
    </div>
  );
}
