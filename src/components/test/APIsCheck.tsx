"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { setSalat } from "@/server/actions/salat";
import { FC } from "react";
import { Button } from "../ui/button";

export const APIsCheck: FC = () => {
  const user = useCurrentUser();

  const test = async () => {
    console.log("click Create Salah Button");
    if (user?.id) {
      console.log("🚀 ~ test ~ id:", user.id);
      // const salah = await createSalah(user?.id);
      // console.log("🚀 ~ test ~ salah:", salah);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-5 my-10">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl pb-5">
        APIsCheck
      </h1>
      <form action={() => setSalat(user?.id!)}>
        <Button type="submit">Create Salah</Button>
      </form>
    </section>
  );
};
