import { Clock } from "@/components/clock";
import { ComingSoonBox } from "@/components/common/coming-soon-box";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

const Home: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <section
        id="hero"
        className="w-full py-5 grid grid-cols-3 gap-5 justify-self-center justify-items-center place-items-center place-content-center"
      >
        <Clock.single />
        <ComingSoonBox className="h-[250px]" />
        <ComingSoonBox className="h-[250px]" />
      </section>
      <h1>test</h1>
    </main>
  );
};

export default Home;
