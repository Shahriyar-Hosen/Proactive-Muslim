"use client";

import { useParams } from "next/navigation";
import { FC, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/navigation";

interface Props extends IChildren {
  defaultOption: JSX.Element;
  defaultValue: string;
  label: string;
}

export const LocaleSwitcherSelect: FC<Props> = ({
  children,
  defaultValue,
  defaultOption,
  label,
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(e) => onSelectChange(e)}
      disabled={isPending}
    >
      <p className="sr-only">{label}</p>
      <SelectTrigger
        className={cn(
          "w-fit md:w-[130px] space-x-1",
          isPending && "transition-opacity [&:disabled]:opacity-30",
          "bg-slate-900 border-none focus:outline-none text-white"
        )}
      >
        <SelectValue placeholder={defaultValue} className="focus:text-white">
          {defaultOption}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-slate-900 border-none focus:outline-none text-white">
        {children}
      </SelectContent>
    </Select>
  );
};
