"use client";

import Link from "next/link";

import { menuLinks } from "./menu.data";
import MenuDrawer from "./menuDrawer";

export default function Header() {
  return (
    // Outer part container for the header
    <div className="w-full relative px-6">
      <div className="flex justify-between items-center py-4">
        {/* LOGO */}
        <Link href="/" className="tracking-tight font-extrabold text-primary">
          Sidd
        </Link>
        {/* Menu bars */}
        <div className="hidden md:flex space-x-10">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* responsive for small scren */}
        <div className="md:hidden">
          <MenuDrawer />
        </div>
      </div>
    </div>
  );
}
