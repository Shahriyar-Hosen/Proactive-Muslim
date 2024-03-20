import { ExtraPageTemplate } from "@/components/common";
import { useTranslations } from "next-intl";

const Maintenance = () => {
  const t = useTranslations("Extra-Page");

  return (
    <ExtraPageTemplate
      img="https://www.svgrepo.com/show/426192/cogs-settings.svg"
      title={t("maintenance-title")}
    />
  );
};

export default Maintenance;
