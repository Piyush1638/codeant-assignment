import React from "react";
import LogoName from "../shared/LogoName";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav className="w-full lg:hidden  p-4 border-b border-[#E9EAEB]">
      <div className="flex justify-between items-center">
        <LogoName classes="text-2xl flex items-center" />
        <Sheet>
          <SheetTrigger>
            <Image src={"/repos/menu.svg"} alt="menu" height={24} width={24} />
          </SheetTrigger>
          <SheetContent side={"top"} className="bg-white">
            <SheetTitle></SheetTitle>
            <SheetHeader>
              <SheetDescription>
                <MenuItems />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
