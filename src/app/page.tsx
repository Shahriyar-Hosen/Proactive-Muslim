import { UserButton } from "@clerk/nextjs";
import { NextPage } from "next";

import { Counter } from "@/components/Counter";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <UserButton />
      <Counter />
    </main>
  );
};

export default Home;
