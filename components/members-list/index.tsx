import MembersTable from "../members-table";
import { Membro } from "@prisma/client";
export default function MembersList({members}: {members: Membro[]}) {
  return (
    <div
      
      className="bg-white w-full md:w-3/4 relative overflow-x-auto shadow-md rounded-lg text-center items-center"
    >
      <table className="w-full">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 font-normal text-lg text-black"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-normal text-lg  text-black"
            >
              NOME
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-normal text-lg  text-black"
            >
              CARGO
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-normal text-lg  text-black"
            >
              EMAIL
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((members, index) => (
            <MembersTable key={index} members={members} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
