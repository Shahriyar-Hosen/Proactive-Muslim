import { Poppins } from "next/font/google";

import { FC } from "react";
import { Logo } from "../common";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header: FC<HeaderProps> = ({ label }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>🔐 Auth</h1> */}
      <Logo />
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
