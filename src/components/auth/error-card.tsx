import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useTranslations } from "next-intl";

export const ErrorCard = () => {
  const t = useTranslations("Auth");

  return (
    <CardWrapper
      headerLabel={t("ErrorCard.headerLabel")}
      backButtonLabel={t("back-to-login")}
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
