import { Eye, Pencil, Settings, Trash, Trash2, View } from "lucide-react"
import Link from "next/link"



export function ViewButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/management/view/${id}`}>
            <View className="text-blue-950  hover:text-blue-900 size-8 "/>
        </Link>
    )
}

export function EditButton( {id}: {id:number | undefined} ){
    return(
        <Link href={`/admin/management/edit/${id}`}>
            <Settings className=" size-7 text-blue-950  hover:text-blue-900"/>
        </Link>
    )
}


export function DeleteButton( {id}:{id:number|undefined} ){
    return(
        <Link href={`/admin/management/delete?id=${id}`}>
            <Trash2  className="size-7 text-blue-950  hover:text-blue-900"/>
        </Link>
    )
}