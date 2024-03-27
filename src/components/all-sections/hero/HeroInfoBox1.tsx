"use client";

import { DatePicker } from "@/components/DatePicker";
import { StoreContext } from "@/lib/Context";
import { memo, useContext } from "react";

export const HeroInfoBox1 = memo(() => {
  const { date, setDate } = useContext(StoreContext);

  return (
    <div className="w-full h-[250px] flex justify-center items-center">
      <DatePicker date={date} setDate={setDate} />
    </div>
  );
});

HeroInfoBox1.displayName = "HeroInfoBox1";
