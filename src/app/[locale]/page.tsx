import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { Counter } from "@/components/Counter";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";

const Home: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-5 bg-slate-950 w-full text-slate-300">
      <LocaleSwitcher />
      <section className="space-y-5">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {t("title")}
        </h1>
        <p className="max-w-[590px]">
          {t.rich("description", {
            code: (chunks) => (
              <code className="font-mono text-cyan-400">{chunks}</code>
            ),
          })}
        </p>
      </section>
      <Button className="bg-orange-500 hover:bg-orange-600">Button</Button>
      <Counter />
    </main>
  );
};

export default Home;
