"use client";

import { getSalat } from "@/server/actions/salat";
import { FC, memo, useEffect, useState } from "react";

import { BarChart, RadarChartCompo, RadialChart } from "@/components/Charts";
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
    allSalat.filter((data) => salatAllFilters(data, selectedSalatTime, date))
  );

  useEffect(() => {
    const specificDate = new Date(date);
    const salatsDefault = allSalat.filter((data) =>
      salatAllFilters(data, selectedSalatTime, date)
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
      <SalatNav
        selected={selectedSalatTime}
        setSelectedSalat={setSelectedSalatTime}
      />
      <div
        id="salat-card-section"
        className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto"
      >
        {salats.map((salat, i) => (
          <SalatCard key={i} {...salat} />
        ))}
      </div>

      {/* <div> */}
      {/* <Suspense
          fallback={
            <>
              <h1>Loading</h1>
            </>
          }
        > */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5"> */}
      <div className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto">
        <BarChart />
        <RadarChartCompo />
        <RadialChart />
      </div>
      {/* </Suspense> */}
      {/* </div> */}
    </section>
  );
});

Salats.displayName = "Salat";
