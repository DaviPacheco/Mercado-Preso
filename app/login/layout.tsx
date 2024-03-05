import Header_Home from "@/components/admin_search";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
return(
    <div>
<Header_Home/>
{children}
    </div>
)

  }