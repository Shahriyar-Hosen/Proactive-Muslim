"use client";

import { useTranslations } from "next-intl";
import { Dispatch, FC, SetStateAction } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { navItems } from "./navItems";

interface ISalatNav {
  selected: Salah;
  setSelectedSalat: Dispatch<SetStateAction<Salah>>;
}

export const SalatNav: FC<ISalatNav> = ({ selected, setSelectedSalat }) => {
  const t = useTranslations("HomePage.salat.name");

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-fit mx-auto">
        <div className={cn("mb-4 flex items-center")}>
          {navItems.map(({ label }) => (
            <div
              key={label}
              onClick={() => setSelectedSalat(label)}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-secondary hover:bg-slate-800/30 cursor-pointer",
                selected === label
                  ? "bg-slate-800/80 font-medium text-secondary"
                  : "text-muted-foreground"
              )}
            >
              {t(label)}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
};
