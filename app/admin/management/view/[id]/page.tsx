import { fetchMembersById } from "@/functionss/admin/actions";
import Vizualizar from "@/components/crud/Vizualizar";


export default async function Page({params}: {
    params: {id:string}
}){

    const id= parseInt(params.id, 10)
    const member = await fetchMembersById(id);

    return(
        <div className=" min-h-screen">
            <Vizualizar member={member}/>
        </div>
    )
}