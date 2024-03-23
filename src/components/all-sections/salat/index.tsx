"use client";

import { FC, useState } from "react";
import { SalatNav } from "./nav";

export const Salat: FC = () => {
  const [selectedSalat, setSelectedSalat] = useState<Salah>("Fajr");
  // TODO: Will update with prayer times

  return (
    <section id="salat">
      <SalatNav selected={selectedSalat} setSelectedSalat={setSelectedSalat} />
    </section>
  );
};
