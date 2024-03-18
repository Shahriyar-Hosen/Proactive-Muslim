import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC = () => (
  <Link href="/" className="flex justify-center items-center">
    <Image
      src="/logo.png"
      alt=""
      width={40}
      height={40}
      className="w-8 lg:w-10 h-auto"
    />
    <h1 className="text-orange-500 font-extrabold leading-3">
      <span className="text-xs leading-3">Proactive</span> <br />
      <span className="text-cyan-400 pl-5 text-sm md:text-base leading-4">
        Muslim
      </span>
    </h1>
  </Link>
);
