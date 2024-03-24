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
      <SalatCard name="Fajr" priority="Farz" />
    </section>
  );
};
