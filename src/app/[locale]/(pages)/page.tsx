import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const Home: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="space-y-5">
      <h1>test</h1>
    </main>
  );
};

export default Home;
