"use client";

import Link from "next/link";

export default function Header() {
  return (
    // Outer part container for the header
    <div className="w-full relative px-6">
      <div className="flex justify-between items-center py-4 pr-20">
        {/* LOGO */}
        <Link href="/" className="tracking-tight font-extrabold">
          Siddhesh Dupare
        </Link>
        <div className="absolute right-10 top-0 z-50"></div>
      </div>
    </div>
  );
}
