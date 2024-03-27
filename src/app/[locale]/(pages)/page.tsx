import { Hero, Salats } from "@/components/all-sections";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { memo } from "react";

const Home: NextPage<ParamsLocale> = memo(({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className="space-y-20 my-10">
      <Hero />
      <Salats />
    </main>
  );
});

Home.displayName = "Home";
export default Home;
