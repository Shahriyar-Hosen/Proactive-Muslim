import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

// TODO: Update Active Link
const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Team", href: "/", current: false },
  { name: "Projects", href: "/", current: false },
  { name: "Calendar", href: "/", current: false },
];

interface Props {
  mobile?: boolean;
}

export const MenuItems: FC<Props> = ({ mobile }) => (
  <div
    className={cn(
      mobile ? "md:hidden" : "hidden md:block md:ml-6",
      "w-full md:flex justify-center items-center"
    )}
  >
    <div className={cn(mobile ? "space-y-1 px-2 pb-3 pt-2" : "flex space-x-4")}>
      {navigation.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={cn(
            item.current
              ? "bg-slate-950/80 text-white"
              : "text-slate-300 hover:bg-slate-700 hover:text-white",
            mobile ? "block text-base" : "text-sm",
            "rounded-md px-3 py-2 font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
);
