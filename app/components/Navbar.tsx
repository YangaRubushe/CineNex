"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/cinenexlogo.png";
import { usePathname } from "next/navigation";
import { Bell, Search, Menu } from "lucide-react";
import UserNav from "./UserNav";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="CineNex logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-red-500 font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <div className="hidden lg:flex items-center gap-x-8">
          <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
          <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
          <UserNav />
        </div>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Menu className="w-5 h-5 text-gray-300" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {links.map((link, idx) => (
                <DropdownMenuItem key={idx}>
                  <Link href={link.href} className="flex items-center w-full">
                    <span>{link.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
                <span className="ml-2">Search</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
                <span className="ml-2">Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserNav />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
