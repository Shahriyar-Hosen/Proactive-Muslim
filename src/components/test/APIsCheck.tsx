"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { createOrUpdateSalat } from "@/server/actions/salat";
import { FC, memo } from "react";
import { Button } from "../ui/button";

export const APIsCheck = memo(() => {
  const user = useCurrentUser();

  return (
    <section className="flex flex-col justify-center items-center gap-5 my-10">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl pb-5">
        APIsCheck
      </h1>
      {/* <form action={() => createOrUpdateSalat(user?.id!)}> */}
      <Button type="submit">Create Salah</Button>
      {/* </form> */}
    </section>
  );
});

APIsCheck.displayName = "APIsCheck";
