import { fetchFilteredMembers } from "@/functionss/search/actions";
import SearchPage from "@/components/search_page";


export default async function Page({
    searchParams,
}:{
    searchParams:{
        query?: string;
    }
}) {

    const query=searchParams?.query || ''

    const {members, count} = await fetchFilteredMembers(query)

    return(
        <div className="min-h-screen">
            <SearchPage count={count} members={members}  />
        </div>
    )
}