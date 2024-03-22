import { Clock } from "@/components/clock";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

const Home: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className="space-y-5">
      <Clock.three />
      <h1>test</h1>
    </main>
  );
};

export default Home;
