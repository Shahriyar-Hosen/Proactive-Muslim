import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => (
  <Link href="/">
    <Image
      src="/logo.svg"
      alt="Proactive Muslim Logo"
      width={200}
      height={40}
      className="w-40 lg:w-52 h-auto"
    />
  </Link>
);
