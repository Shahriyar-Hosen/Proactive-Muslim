"use client";

import { DatePicker } from "@/components/DatePicker";
import { getSalat } from "@/server/actions/salat";
import { FC, memo, useEffect, useState } from "react";
import { SalatCard } from "./Card";
import { allSalat } from "./data";
import { SalatNav } from "./nav";

const currentTime = new Date().getHours();
const prayerTime =
  (currentTime >= 4 && currentTime < 11 && "Fajr") ||
  (currentTime >= 11 && currentTime < 15 && "Zuhr") ||
  (currentTime >= 15 && currentTime <= 17 && "Asr") ||
  (currentTime >= 17 && currentTime <= 18 && "Maghrib") ||
  "Isha";

const allFilter = ({ time, name }: ISalat, selectedSalat: SalahTime) => {
  if (time === "Zuhr") {
    const today = new Date();
    const day = today.toDateString().slice(0, 3);
    const selectSalah = day === "Fri" ? "Jumuah" : "Zuhr";
    return time === selectedSalat && name === selectSalah;
  }
  return time === selectedSalat;
};

const replaceMatchingElements = (arr1: ISalat[], arr2?: ISalat[]) => {
  const newArray = arr1.map((obj1) => {
    const matchingObj =
      arr2 &&
      arr2.find(
        (obj2) =>
          obj1.name === obj2.name &&
          obj1.time === obj2.time &&
          obj1.priority === obj2.priority
      );
    return matchingObj ? { ...matchingObj } : obj1;
  });

  return newArray;
};

export const Salats: FC = memo(() => {
  const [selectedSalatTime, setSelectedSalatTime] =
    useState<SalahTime>(prayerTime);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [salats, setSalats] = useState<ISalat[]>(
    allSalat.filter((data) => allFilter(data, selectedSalatTime))
  );

  useEffect(() => {
    const specificDate = new Date(date as Date);

    const salatsDefault = allSalat.filter((data) =>
      allFilter(data, selectedSalatTime)
    );

    getSalat(specificDate)
      .then((data) => {
        if (data.data) {
          const dbData = data.data;
          const result = replaceMatchingElements(salatsDefault, dbData);
          setSalats(result);
        }
      })
      .catch((error) => console.log({ error: error.error }));
  }, [date, selectedSalatTime]);

  console.log("🚀 ~ constSalat:FC=memo ~ result:", salats);

  return (
    <section id="salat" className="space-y-5">
      <div className="w-fit mx-auto">
        <DatePicker date={date} setDate={setDate} />
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
        ))}
      </section>
    </section>
  );
});

Salats.displayName = "Salat";
