import { ExtraPageTemplate } from "@/components/common";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const Maintenance: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations("Extra-Page");

  return (
    <ExtraPageTemplate
      img="https://www.svgrepo.com/show/426192/cogs-settings.svg"
      title={t("maintenance-title")}
    />
  );
};

export default Maintenance;
