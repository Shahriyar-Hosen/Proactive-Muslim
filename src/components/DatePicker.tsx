"use client";

import { format } from "date-fns";
import { bn, enUS } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { FC, memo } from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface IDatePicker {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export const DatePicker: FC<IDatePicker> = memo(({ date, setDate }) => {
  const locale = useLocale() as ILocale;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "w-fit flex justify-center items-center text-center font-sans text-lg md:text-xl lg:text-2xl text-slate-300 hover:cursor-pointer",
            !date && "text-muted-foreground"
          )}
        >
          {date ? (
            format(date, "PPPP", { locale: locale === "bn" ? bn : enUS })
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon className="ml-2 h-6 w-6" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
});

DatePicker.displayName = "DatePicker";
