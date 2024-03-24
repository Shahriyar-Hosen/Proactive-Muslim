"use client";

import { FC, useState } from "react";
import { SalatCard } from "./Card";
import { SalatNav } from "./nav";

export const Salat: FC = () => {
  const [selectedSalat, setSelectedSalat] = useState<Salah>("Fajr");
  // TODO: Will update with prayer times

  return (
    <section id="salat" className="space-y-5">
      <SalatNav selected={selectedSalat} setSelectedSalat={setSelectedSalat} />
      <section
        id="salat-section"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 place-content-center place-items-center"
      >
        <SalatCard name="Fajr" priority="Farz" />
        <SalatCard name="Fajr" priority="Farz" />
        <SalatCard name="Fajr" priority="Farz" />
        <SalatCard name="Fajr" priority="Farz" />
        <SalatCard name="Fajr" priority="Farz" />
      </section>
    </section>
  );
};
