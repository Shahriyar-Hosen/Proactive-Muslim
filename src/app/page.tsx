import { UserButton } from "@clerk/nextjs";
import { NextPage } from "next";

import { Counter } from "@/components/Counter";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-5 bg-slate-950 w-full text-slate-300">
      <UserButton />
      <Button className="bg-orange-500 hover:bg-orange-600">Button</Button>
      <Counter />
    </main>
  );
};

export default Home;
