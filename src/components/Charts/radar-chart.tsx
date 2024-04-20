"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { get40DaySalat } from "@/server/actions/analysis/salat";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { FC, memo, useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ICustomizedTooltip {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomizedTooltip: FC<ICustomizedTooltip> = memo(
  ({ active, payload, label }) => {
    if (active && payload && payload?.length > 0) {
      return (
        <div className="p-2 px-3 bg-white rounded-lg chart-tooltip">
          <div className="">
            <h3 className="text-center border-b-2 border-dotted text-accent border-secondary">
              {payload[0].payload.days} - দিন
            </h3>
          </div>
          <div className="">
            <p className="mt-2 text-primary">
              {label} - {payload[0].value}
            </p>
          </div>
        </div>
      );
    }

    return null;
  }
);

const RadarChartComponent = memo(() => {
  const t = useTranslations("HomePage.salat.time");
  const defaultData = [
    {
      label: t("Fajr"),
      namaz: "fajr",
      count: 7,
    },
    {
      label: t("Zuhr", {
        option: "zuhr",
      }),
      namaz: "zuhr",
      count: 7,
    },
    {
      label: t("Asr"),
      namaz: "asr",
      count: 7,
    },
    {
      label: t("Maghrib"),
      namaz: "maghrib",
      count: 7,
    },
    {
      label: t("Isha"),
      namaz: "isha",
      count: 7,
    },
  ];

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const handleUpdateData = async () => {
      const salat = await get40DaySalat();

      const data = defaultData.map((item) => {
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
      setData(data);
    };
    handleUpdateData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResponsiveContainer
      width={400}
      height={400}
      className="max-w-[300px] max-h-[300px] sm:max-w-full sm:max-h-full"
    >
      <RadarChart
        cx={190}
        cy={205}
        data={data}
        outerRadius={125}
        className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl w-[200px] lg:w-[380px] h-full shadow-inner"
      >
        <Tooltip content={<CustomizedTooltip />} />
        <PolarGrid />
        <PolarAngleAxis dataKey="label" stroke="#e2e8f0" fill="#0eca2d" />
        <PolarRadiusAxis stroke="#f6d860" fill="#0eca2d" />
        <Radar
          name="label"
          dataKey="count"
          stroke="#00fbff"
          fill="#24ff48"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
});

RadarChartComponent.displayName = "RadarChart";
CustomizedTooltip.displayName = "CustomizedTooltip";

export const RadarChartSkeleton = () => (
  <div className="flex justify-center items-center">
    <Skeleton className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-xl" />
  </div>
);

export const RadarChartCompo = dynamic(
  () => Promise.resolve(RadarChartComponent),
  {
    ssr: false,
    loading: RadarChartSkeleton,
  }
);
