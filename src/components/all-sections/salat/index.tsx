"use client";

import { FC, useState } from "react";
import { SalatCard } from "./Card";
import { SalatData, allSalat } from "./data";
import { SalatNav } from "./nav";

const currentTime = new Date().getHours();
const prayerTime =
  (currentTime >= 4 && currentTime < 11 && "Fajr") ||
  (currentTime >= 11 && currentTime < 15 && "Zuhr") ||
  (currentTime >= 15 && currentTime <= 17 && "Asr") ||
  (currentTime >= 17 && currentTime <= 19 && "Maghrib") ||
  "Isha";

export const Salat: FC = () => {
  const [selectedSalat, setSelectedSalat] = useState<SalahTime>(prayerTime);

  const allFilter = ({ time, name }: SalatData) => {
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
