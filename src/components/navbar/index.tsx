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
    <div className="fixed w-screen bg-background dark:bg-slate-950/50 shadow-2xl shadow-slate-900/50 z-50">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between md:justify-start">
          <MobileMenuButton open={open} setOpen={setOpen} />
          <div className="flex items-center justify-start sm:justify-center md:items-stretch md:justify-start">
            <Logo />
          </div>

          <MenuItems />

          <div className="flex items-center justify-between pr-2 md:static md:inset-auto md:ml-6 md:pr-0 space-x-2.5">
            <LanguageSwitcher />
            <Profile />
          </div>
        </div>
      </div>

      {open && <MenuItems mobile />}
    </div>
  );
};
