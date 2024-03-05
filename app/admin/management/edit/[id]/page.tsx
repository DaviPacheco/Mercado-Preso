import { fetchMembersById } from "@/functionss/admin/actions";
import EditMember from "@/components/crud/Editar";

export default async function Page({params}: {
    params: {id:string}
}){

    const id= parseInt(params.id, 10)
    const member = await fetchMembersById(id);



    return(
            <EditMember member={member}/>
       
    )
}