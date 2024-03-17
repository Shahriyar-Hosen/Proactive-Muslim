"use client";

import { useState } from "react";
import { Logo } from "../common";
import { LanguageSwitcher } from "../lang/LocaleSwitcher";
import { MenuItems } from "./MenuItems";
import { MobileMenuButton } from "./MobileMenuButton";
import { Profile } from "./Profile";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton open={open} setOpen={setOpen} />
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Logo />
          </div>

          <MenuItems />

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 space-x-2.5">
            <LanguageSwitcher />
            <Profile />
          </div>
        </div>
      </div>

      {open && <MenuItems mobile />}
    </div>
  );
};
