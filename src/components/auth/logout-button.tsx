"use client";

import { logout } from "@/actions/logout";
import { FC, PropsWithChildren } from "react";

export const LogoutButton: FC<PropsWithChildren> = ({ children }) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
