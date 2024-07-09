"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-2 inset-x-0 max-w-full mx-auto z-50 flex items-center justify-between px-8 ", className)}>
        <Link href={"/"}>
          <h1 className="text-4xl font-bold text-orange-600">संगीत</h1>
        </Link>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Guitar</HoveredLink>
            <HoveredLink href="/courses">Piano</HoveredLink>
            <HoveredLink href="/courses">Music production</HoveredLink>
            <HoveredLink href="/courses">Drumming</HoveredLink>
          </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contack Us">
            </MenuItem>
          </Link>
        </Menu>
    </div>
  )
}

export default Navbar