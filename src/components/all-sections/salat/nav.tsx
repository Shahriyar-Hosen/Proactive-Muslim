"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "@/navigation";
import Link from "next/link";
import { FC } from "react";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

const examples = [
  {
    name: "Mail",
    href: "/examples/mail",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/mail",
  },
  {
    name: "Dashboard",
    href: "/examples/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard",
  },
  {
    name: "Cards",
    href: "/examples/cards",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/cards",
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks",
  },
  {
    name: "Playground",
    href: "/examples/playground",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground",
  },
  {
    name: "Forms",
    href: "/examples/forms",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/forms",
  },
  {
    name: "Music",
    href: "/examples/music",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music",
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/examples/authentication",
  },
];

export const SalatNav: FC = () => {
  const pathname = usePathname();

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center")}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
};
