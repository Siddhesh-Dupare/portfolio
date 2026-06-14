import Link from "next/link";
import { menuLinks } from "./menu.data";

import { ListIcon } from "@phosphor-icons/react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function MenuDrawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <ListIcon size={24} />
      </SheetTrigger>
      <SheetContent className="">
        <div className="flex flex-col gap-10 mt-20 ml-5">
          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-2xl">
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
