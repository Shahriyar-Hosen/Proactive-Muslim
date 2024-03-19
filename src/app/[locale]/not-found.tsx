import { NotFound } from "@/components/common";
import { useTranslations } from "next-intl";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

const NotFoundPage = () => {
  const t = useTranslations("NotFoundPage");

  return <NotFound />;
  // return (
  //   <main>
  //     <h1>{t("title")}</h1>
  //     <p className="max-w-[460px]">{t("description")}</p>
  //   </main>
  // );
};

export default NotFoundPage;
