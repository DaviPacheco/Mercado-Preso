import { Eye, Pencil, Settings, Trash, Trash2, View } from "lucide-react"
import Link from "next/link"



export function ViewButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/management/view/${id}`}>
            <View className= "text-tchovis size-8 hover:text-green-700"/>
        </Link>
    )
}

export function EditButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/management/edit/${id}`}>
            <Settings className=" size-7 text-indigo-600 hover:text-blue-900n"/>
        </Link>
    )
}


export function DeleteButton( {id}:{id:number|undefined} ){
    return(
        <Link href={`/admin/management/delete?id=${id}`}>
            <Trash2  className="size-7 text-red-600  hover:text-red-950"/>
        </Link>
    )
}