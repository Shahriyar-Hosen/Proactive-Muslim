import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

import { SelectItem } from "@/components/ui/select";
import { locales } from "@/config";
import { cn } from "@/lib/utils";
import { LocaleSwitcherSelect } from "./LocaleSwitcherSelect";

type IOption = { cur?: ILocale };

export const LanguageSwitcher: FC = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const Option: FC<IOption> = ({ cur }) => (
    <div className="flex justify-center items-center gap-2.5 text-white">
      <Image
        width={25}
        height={25}
        src={t("locale", { locale: cur || locale })}
        alt={t("label")}
      />
      <span className="hidden sm:block md:hidden capitalize">
        {cur || locale}
      </span>
      <span className="hidden md:block">
        {t("language", { locale: cur || locale })}
      </span>
    </div>
  );

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      defaultOption={<Option />}
      label={t("label")}
    >
      {locales.map((cur) => (
        <SelectItem
          key={cur}
          value={cur}
          className={cn(
            cur === locale && "bg-slate-800 text-white",
            "focus:bg-slate-800 focus:text-white bg-slate-900 hover:bg-slate-950"
          )}
        >
          <Option cur={cur} />
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
};
