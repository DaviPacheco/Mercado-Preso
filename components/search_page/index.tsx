import Link from "next/link";
import SecondarySearch from "./secondary-search";
import PostCard from "../post-card";

export default function SearchPage(){
const count = 0;
return(
<div className="w-full">
    <SecondarySearch count={count}/>
{count != 0 ? (
<div className="w-full flex flex-col">

<span className="text-2xl font-extrabold">
Não há anúncios que correspondam à sua busca
</span>
<span className="text-xl text-black/70">Navegue pelas <Link href="/posts" className="text-tchovis hover:text-tchovis/50"> ofertas </Link> para encontrar um produto semelhante.</span>

</div>
):(
    <div className="w-full flex flex-col gap-12">
{<PostCard />}
    </div>
)}
</div>

)


}