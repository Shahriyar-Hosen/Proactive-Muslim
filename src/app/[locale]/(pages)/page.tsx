import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { Counter } from "@/components/Counter";
import { LoginButton } from "@/components/auth/login-button";
import { LanguageSwitcher } from "@/components/lang/LocaleSwitcher";
import { Button } from "@/components/ui/button";

const Home: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col justify-center items-center h-screen gap-5 relative">
      <LanguageSwitcher />
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

      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-primary drop-shadow-md">
          🔐 Auth
        </h1>
        <Button>Test</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton asChild>
            <Button variant="secondary" size="lg">
              User Auth Dashboard
            </Button>
          </LoginButton>
        </div>
      </div>
      <Counter />
    </main>
  );
};

export default Home;