"use client";

import { logout } from "@/server/actions/auth/logout";
import { FC } from "react";

export const LogoutButton: FC<IChildren> = ({ children }) => {
  const onClick = () => logout();

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
