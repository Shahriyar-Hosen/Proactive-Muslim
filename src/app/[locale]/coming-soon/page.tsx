import { ExtraPageTemplate } from "@/components/common";
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const ComingSoon: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations("Extra-Page");

  return (
    <ExtraPageTemplate img="/coming-soon.png" title={t("coming-soon-title")} />
  );
};

export default ComingSoon;
