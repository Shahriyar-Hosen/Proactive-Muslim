"use client";

import { DatePicker } from "@/components/DatePicker";
import { getSalat } from "@/server/actions/salat";
import { FC, useEffect, useState } from "react";
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

export const Salat: FC = () => {
  const [selectedSalat, setSelectedSalat] = useState<SalahTime>(prayerTime);
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    const specificDate = new Date(date as Date);
    const salats = getSalat(specificDate)
      .then((data) =>
        console.log("🚀 ~ useEffect ~ salats:", { data: data.data })
      )
      .catch((error) => console.log({ error }));
  }, [date]);

  const allFilter = ({ time, name }: ISalat) => {
    if (time === "Zuhr") {
      const today = new Date();
      const day = today.toDateString().slice(0, 3);
      const selectSalah = day === "Fri" ? "Jumuah" : "Zuhr";
      return time === selectedSalat && name === selectSalah;
    }
    return time === selectedSalat;
  };

  return (
    <section id="salat" className="space-y-5">
      <div className="w-fit mx-auto">
        <DatePicker date={date} setDate={setDate} />
      </div>
      <SalatNav selected={selectedSalat} setSelectedSalat={setSelectedSalat} />
      <section
        id="salat-section"
        className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto"
      >
        {allSalat.filter(allFilter).map((salat, i) => (
          <SalatCard key={i} {...salat} />
        ))}
      </section>
    </section>
  );
};
