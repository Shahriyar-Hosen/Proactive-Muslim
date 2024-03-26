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

const replaceMatchingElements = (defaultData: ISalat[], dbData?: ISalat[]) => {
  const result = defaultData.map((defaultSalat) => {
    const matchingObj =
      dbData &&
      dbData.find(
        (dbSalat) =>
          defaultSalat.name === dbSalat.name &&
          defaultSalat.time === dbSalat.time &&
          defaultSalat.priority === dbSalat.priority
      );
    return matchingObj ? { ...matchingObj } : defaultSalat;
  });

  return result;
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
          // <SalatCard key={i} {...salat} />
          <SalatCard key={i} salat={salat} selectedDate={date!} />
        ))}
      </section>
    </section>
  );
});

Salats.displayName = "Salat";
