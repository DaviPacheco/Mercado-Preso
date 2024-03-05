"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Search as SearchIcon, X } from "lucide-react";
import { link } from "fs";
import Search from "../search";
const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contato" },
  { href: "/members", label: "Membros" },
  { href: "/admin/management", label: "Gerenciamento" },
  { href: "/login", label: "Login" },
];

export default function Header_Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const toggleNavSearch = () => {
    if (isSearchOpen) {
      toggleSearch();
    } else {
      toggleNav();
    }
  };

  return (
    <header className="bg-zambira sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
      <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
        <Link href="/" className="flex gap-4 items-center">
          <Image
            src={"/icones/Mercado Preso Icone.png"}
            alt="Logo do Site"
            width={904}
            height={904}
            className="h-15 w-60 rounded-xl"
          />
        </Link>
        <span className="text-white hidden md:block text-3x1 font-semibold"></span>
        <nav className="flex justify-end">
          <div className="hidden w-full md:flex justify-end items-center gap-16">
           
            {links.map((link, index) => 
              <Link href={link.href} key={index}>
                <span className="text-2xl text-white  hover:text-Gray85/90 p-2 rounded-xl">
                  {link.label}
                </span>
              </Link>
            )}
          </div>
          <div className="md:hidden">
            {isNavOpen ? (
              <X
                onClick={toggleNavSearch}
                className="w-10 h-10 text-white cursor-pointer  hover:text-Gray85/90 transition-all duration-200 p-1 rounded-xl"
              />
            ) : (
              <div className="flex gap-4">

                <Menu
                  onClick={toggleNav}
                  className="w-12 h-12 text-white cursor-pointer"
                />
              </div>
            )}
          </div>
        </nav>
        {isSearchOpen && <Search />}
        {isNavOpen && (
          <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
            {links.map((link, index) => 
              <Link href={link.href} key={index}>
                <span className="text-2xl text-white hover:text-Gray85/90 p-2 rounded-xl">
                  {link.label}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
