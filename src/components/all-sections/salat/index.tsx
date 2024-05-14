"use client";

import { FC, memo, useState } from "react";

import { prayerTime } from "@/lib/utils";
import { Charts } from "./charts";
import { SalatNav } from "./nav";
import { Salats } from "./salats";

export const SalatsSection: FC = memo(() => {
  const [selectedSalatTime, setSelectedSalatTime] =
    useState<SalahTime>(prayerTime);

  return (
    <section id="salat" className="space-y-5">
      <SalatNav
        selected={selectedSalatTime}
        setSelectedSalat={setSelectedSalatTime}
      />
      <Salats selectedSalatTime={selectedSalatTime} />
      <Charts />
    </section>
  );
});

SalatsSection.displayName = "SalatsSection";
