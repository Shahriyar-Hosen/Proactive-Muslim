import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { APIsCheck } from "@/components/test/APIsCheck";
import { Admin } from "@/components/test/Admin";
import { Counter } from "@/components/test/Counter";
import { Button } from "@/components/ui/button";

const AdminPage: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col justify-center items-center gap-5 relative">
      <APIsCheck />

      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-primary drop-shadow-md">
          🔐 Auth
        </h1>

        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
        <p className="text-white text-lg">A simple authentication service</p>
      </div>
      <Counter />

      <Admin />
    </main>
  );
};

export default AdminPage;
