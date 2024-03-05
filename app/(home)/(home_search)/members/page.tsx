import MembersList from "@/components/members-list";
import Title from "@/components/title";
import { fetchMembers } from "@/functionss/admin/actions";
import Link from "next/link";

type MembroProp = {
    searchParams: {
        page?: string,
    }
}

export default async function Page({searchParams} : MembroProp){

    const currentPage = Number(searchParams?.page) || 1

    const {members, totalPages} = await fetchMembers(currentPage)

    return(
        <div className="bg-zambira min-h-screen w-full space-y-8 px-2 flex flex-col pb-16 items-center ">
            <h1 className="text-tchovis text-3xl mt-12  text-center font-extrabold uppercase">Gerenciamento de Membros</h1>
            <Link href={'/admin/manage/members/create'}>
                <button  className="transition ease-in-out delay-100 bg-tchovis  hover:scale-110 hover:bg-tchovis/50 duration-200 font-regular text-black font-semibold py-2 px-3 rounded-3xl text-sm  shadow-lg">
                   NOVO MEMBRO 
                </button>
            </Link>
            <MembersList members={members} totalPages={totalPages}  currentPage={currentPage}/>

        </div>
    )
}