"use client";

import { getSalat } from "@/server/actions/salat";
import { FC, memo, useEffect, useState } from "react";

import { BarChart, RadarChartCompo, RadialChart } from "@/components/Charts";
import { Button } from "@/components/ui/button";
import { useStoreContext } from "@/hooks/use-store-context";
import {
  prayerTime,
  replaceMatchingElements,
  salatAllFilters,
} from "@/lib/utils";
import { get7DaySalat } from "@/server/actions/analysis/salat";
import { useTranslations } from "next-intl";
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

  const t = useTranslations("HomePage.analysis");

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

  useEffect(() => {
    const test = async () => {
      try {
        const salat = await get7DaySalat();
        console.log("🚀 ~ test ~ salat:", salat);
        return salat;
      } catch (error) {
        console.log("🚀 ~ useEffect ~ error:", error);
      }
    };

    const data = test();

    console.log({ data });
  }, []);

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

      <div className="space-y-5 lg:space-y-8 pt-5 lg:pt-10">
        <h1 className="text-2xl md:text-3xl xl:text-5xl text-center font-medium">
          {t.rich("title", {
            highlight: (chunks) => (
              <span className="text-primary">{chunks}</span>
            ),
          })}
        </h1>
        <div className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto">
          {/* <BarChart />
          <RadarChartCompo />
          <RadialChart /> */}
        </div>
        <div className="flex justify-center items-center">
          <Button>{t("button")}</Button>
        </div>
      </div>
    </section>
  );
});

Salats.displayName = "Salat";
