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

    const {members} = await fetchMembers(currentPage)

    return(
        <div className="bg-zambira min-h-screen w-full space-y-8 px-2 flex flex-col pb-16 items-center ">
            <h1 className="text-tchovis text-3xl mt-12  text-center font-extrabold uppercase">Lista de Membros</h1>
            
            <MembersList members={members}/>

        </div>
    )
}