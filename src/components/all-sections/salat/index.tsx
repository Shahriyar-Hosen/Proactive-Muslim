"use client";

import { getSalat } from "@/server/actions/salat";
import { FC, memo, useEffect, useState } from "react";

import { useStoreContext } from "@/hooks/use-store-context";
import {
  prayerTime,
  replaceMatchingElements,
  salatAllFilters,
} from "@/lib/utils";
import { SalatCard } from "./Card";
import { allSalat } from "./data";
import { SalatNav } from "./nav";

export const Salats: FC = memo(() => {
  const { date } = useStoreContext();
  const [selectedSalatTime, setSelectedSalatTime] =
    useState<SalahTime>(prayerTime);
  const [salats, setSalats] = useState<ISalat[]>(
    allSalat.filter((data) => salatAllFilters(data, selectedSalatTime))
  );

  useEffect(() => {
    const specificDate = new Date(date);
    const salatsDefault = allSalat.filter((data) =>
      salatAllFilters(data, selectedSalatTime)
    );

    getSalat(specificDate, selectedSalatTime)
      .then((data) => {
        if (data.data) {
          const dbData = data.data;
          const result = replaceMatchingElements(salatsDefault, dbData);
          setSalats(result);
        }
      })
      .catch((error) => console.log({ error: error.error }));
  }, [date, selectedSalatTime]);

  return (
    <section id="salat" className="space-y-5">
      <div className="w-fit mx-auto">
        {/* <DatePicker date={date} setDate={setDate} /> */}
      </div>
      <SalatNav
        selected={selectedSalatTime}
        setSelectedSalat={setSelectedSalatTime}
      />
      <section
        id="salat-section"
        className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto"
      >
        {salats.map((salat, i) => (
          <SalatCard key={i} {...salat} />
          // <SalatCard key={i} salat={salat} selectedDate={date!} />
        ))}
      </section>
    </section>
  );
});

Salats.displayName = "Salat";
