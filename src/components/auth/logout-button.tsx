"use client";

import { logout } from "@/server/actions/logout";

export const LogoutButton = ({ children }: IChildren) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
