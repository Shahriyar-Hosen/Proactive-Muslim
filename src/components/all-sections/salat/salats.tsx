"use client";

import { FC, memo, useEffect, useState } from "react";

import { useStoreContext } from "@/hooks/use-store-context";
import { replaceMatchingElements, salatAllFilters } from "@/lib/utils";
import { getSalat } from "@/server/actions/salat";
import { SalatCard } from "./Card";
import { allSalat } from "./data";

export const Salats: FC<{ selectedSalatTime: SalahTime }> = memo(
  ({ selectedSalatTime }) => {
    const { date } = useStoreContext();
    const [salats, setSalats] = useState<ISalat[]>(
      allSalat.filter((data) => salatAllFilters(data, selectedSalatTime, date))
    );

    useEffect(() => {
      const specificDate = new Date(date);
      const salatsDefault = allSalat.filter((data) =>
        salatAllFilters(data, selectedSalatTime, date)
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
      <div
        id="salat-card-section"
        className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto"
      >
        {salats.map((salat, i) => (
          <SalatCard key={i} {...salat} />
        ))}
      </div>
    );
  }
);

Salats.displayName = "Salats";
