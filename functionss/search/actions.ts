import prisma from "@/lib/db";

export async function fetchFilteredMembers(query:string) {
 
    const members = await prisma.membro.findMany({
        where:{
            OR: [{name: {contains: query, mode:"insensitive"}}]
        },
        orderBy:{
            name: "asc"
        },
    })


    const count= await prisma.membro.count({
        where:{
            OR: [{name: {contains: query, mode:"insensitive"}}]
        },
        orderBy:{
            name: "asc"
        },

    })


    return {members, count};
}


export async function membersAll() {
   
    const members = await prisma.membro.findMany({
        orderBy:{
            name: "asc"
        },
    })


    return {members};
}