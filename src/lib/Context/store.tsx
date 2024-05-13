"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { get7DaySalatBarChart, getSalatCount } from "@/server/actions/analysis";
import {
  IStore,
  barChartDefaultData,
  radarDefaultData,
  radialDefaultData,
} from ".";

export const useContextStore = () => {
  const [date, setDate] = useState(new Date());
  const [barChart7Day, setBarChart7Day] = useState(barChartDefaultData);
  const [radarChart, setRadarChart] = useState(radarDefaultData);
  const [radialChart, setRadialChart] = useState(radialDefaultData);

  const handleSetDate = useCallback(
    (date?: Date) => setDate(date || new Date()),
    []
  );

  // Salat 7 Day Bar Chart function
  const handleBarChart = async () => {
    const salat = await get7DaySalatBarChart();
    if (salat.data) {
      console.log("🚀 ~ handleBarChart ~ salat:", { salat });
      setBarChart7Day(salat?.data);
    }
  };

  // Radar Chart function
  const handleRadarChart = async () => {
    const salat = await getSalatCount(40);

    const data = radarDefaultData.map((item) => {
      switch (item.namaz) {
        case "fajr":
          return { ...item, count: salat.data?.fajr || item.count };
        case "zuhr":
          return { ...item, count: salat.data?.zuhr || item.count };
        case "asr":
          return { ...item, count: salat.data?.asr || item.count };
        case "maghrib":
          return { ...item, count: salat.data?.maghrib || item.count };
        case "isha":
          return { ...item, count: salat.data?.isha || item.count };

        default:
          return item;
      }
    });
    setRadarChart(data);
  };

  // Radial Chart function
  const handleRadialChart = async () => {
    const salat = await getSalatCount(120);

    const data = radialDefaultData.map((item) => {
      switch (item.namaz) {
        case "fajr":
          return { ...item, count: salat.data?.fajr || item.count };
        case "zuhr":
          return { ...item, count: salat.data?.zuhr || item.count };
        case "asr":
          return { ...item, count: salat.data?.asr || item.count };
        case "maghrib":
          return { ...item, count: salat.data?.maghrib || item.count };
        case "isha":
          return { ...item, count: salat.data?.isha || item.count };

        default:
          return item;
      }
    });
    setRadialChart(data);
  };

  useEffect(() => {
    handleBarChart();
    handleRadarChart();
    handleRadialChart();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refetchAnalysis = async () => {
    await handleBarChart();
    await handleRadarChart();
    await handleRadialChart();
  };

  const contextValue: IStore = useMemo(
    () => ({
      date,
      radarChart,
      radialChart,
      barChart7Day,
      refetchAnalysis,
      setDate: handleSetDate,
    }),
    [
      date,
      radarChart,
      radialChart,
      barChart7Day,
      refetchAnalysis,
      handleSetDate,
    ]
  );

  return contextValue;
};
