import { useTranslations } from "next-intl";
import { FC, memo } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const ComingSoonBox: FC<IClassName> = memo(({ className }) => {
  const t = useTranslations("Extra-Page");

  return (
    <Skeleton
      className={cn(
        "w-full h-full bg-slate-800/80 rounded-md flex justify-center items-center",
        className
      )}
    >
      <h1 className="text-2xl font-light text-slate-400">
        {t("coming-soon-title")}
      </h1>
    </Skeleton>
  );
});

ComingSoonBox.displayName = "ComingSoonBox";
