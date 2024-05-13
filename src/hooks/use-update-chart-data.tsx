"use client";

import { useTranslations } from "next-intl";

export const useChartData = (data: IChartData[]) => {
  const t = useTranslations("HomePage.salat.time");

  const formattedData = data.map((item) => {
    switch (item.namaz) {
      case "fajr":
        return { ...item, name: t("Fajr") };
      case "zuhr":
        return {
          ...item,
          name: t("Zuhr", {
            option: "zuhr",
          }),
        };
      case "asr":
        return { ...item, name: t("Asr") };
      case "maghrib":
        return { ...item, name: t("Maghrib") };
      case "isha":
        return { ...item, name: t("Isha") };

      default:
        return item;
    }
  });

  return formattedData;
};
