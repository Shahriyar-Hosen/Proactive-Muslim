import { ExtraPageTemplate } from "@/components/common";
import { useTranslations } from "next-intl";

const ComingSoon = () => {
  const t = useTranslations("Extra-Page");

  return (
    <ExtraPageTemplate img="/coming-soon.png" title={t("coming-soon-title")} />
  );
};

export default ComingSoon;
