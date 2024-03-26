import { Hero, Salats } from "@/components/all-sections";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

const Home: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className="space-y-20 my-10">
      <Hero />
      <Salats />
    </main>
  );
};

export default Home;
