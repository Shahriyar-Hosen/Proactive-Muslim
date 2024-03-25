"use client";

import { FC, useState } from "react";
import { SalatCard } from "./Card";
import { allSalat } from "./data";
import { SalatNav } from "./nav";

export const Salat: FC = () => {
  const [selectedSalat, setSelectedSalat] = useState<SalahTime>("Fajr");
  // TODO: Will update with prayer times

  return (
    <section id="salat" className="space-y-5">
      <SalatNav selected={selectedSalat} setSelectedSalat={setSelectedSalat} />
      <section
        id="salat-section"
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 place-content-center place-items-center"
        className="flex justify-center items-center gap-2.5 flex-wrap"
      >
        {allSalat.map((salat, i) => (
          <SalatCard key={i} {...salat} />
        ))}
      </section>
    </section>
  );
};
