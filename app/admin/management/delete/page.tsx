'use client'

import Delete from "@/components/crud/Deletar";
import { usePathname, useSearchParams } from "next/navigation";

export default function DeleteConfirmation() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const memberId = Number(params["id"]);

  return (
      <div className=" bg-zambira flex items-center justify-center min-h-screen">
        <Delete id={memberId} />
      </div>
  );
}