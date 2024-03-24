"use client";

import { useTranslations } from "next-intl";
import { Dispatch, FC, SetStateAction } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { salatTime } from "./data";

interface ISalatNav {
  selected: SalahTime;
  setSelectedSalat: Dispatch<SetStateAction<SalahTime>>;
}

export const SalatNav: FC<ISalatNav> = ({ selected, setSelectedSalat }) => {
  const t = useTranslations("HomePage.salat.time");

  return (
    <div className="relative">
      <ScrollArea className="w-full max-w-[600px] sm:max-w-fit mx-auto">
        <div className={cn("mb-4 flex items-center")}>
          {salatTime.map((label) => (
            <div
              key={label}
              onClick={() => setSelectedSalat(label)}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary hover:bg-slate-800/30 cursor-pointer",
                selected === label
                  ? "bg-slate-800/80 font-medium text-primary hover:bg-slate-800/90"
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
