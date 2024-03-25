"use client";

import { FC, useState } from "react";
import { SalatCard } from "./Card";
import { SalatData, allSalat } from "./data";
import { SalatNav } from "./nav";

export const Salat: FC = () => {
  const [selectedSalat, setSelectedSalat] = useState<SalahTime>("Fajr");
  // TODO: Will update with prayer times

  const allFilter = ({ time, name }: SalatData) => {
    // Get today's date
    const today = new Date();
    // Subtract three days from today's date
    // const threeDaysAgo = new Date(today);
    // threeDaysAgo.setDate(today.getDate() - 3);

    const day = today.toDateString().slice(0, 3);

    if (time === "Zuhr" && day !== "Fri") {
      return time === selectedSalat && name === "Zuhr";
    } else if (time === "Zuhr" && day === "Fri") {
      return time === selectedSalat && name === "Jumuah";
    }

    return time === selectedSalat;
  };

  return (
    <section id="salat" className="space-y-5">
      <SalatNav selected={selectedSalat} setSelectedSalat={setSelectedSalat} />
      <section
        id="salat-section"
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 place-content-center place-items-center"
        className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto"
      >
        {allSalat.filter(allFilter).map((salat, i) => (
          <SalatCard key={i} {...salat} />
        ))}
      </section>
    </section>
  );
};
