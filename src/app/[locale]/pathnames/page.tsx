import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const PathnamesPage = ({ params: { locale } }: ParamsLocale) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("PathnamesPage");

  return (
    <main>
      <div className="max-w-[490px]">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </div>
    </main>
  );
};
export default PathnamesPage;
