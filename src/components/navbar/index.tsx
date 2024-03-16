/* eslint-disable @next/next/no-img-element */
"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Logo } from "../common";
import { MenuItems } from "./MenuItems";
import { MobileMenuButton } from "./MobileMenuButton";
import { Profile } from "./Profile";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
// MobileMenuButton
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton open={open} setOpen={setOpen} />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
          </div>

          <MenuItems />

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* View notifications */}
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Profile />
          </div>
        </div>
      </div>

      {open && <MenuItems mobile />}
    </div>
  );
};
