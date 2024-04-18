"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { CSSProperties, FC, useState } from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const style: CSSProperties = {
  position: "relative",
  marginTop: -45,
};

const RadialChartCompo: FC = () => {
  const t = useTranslations("HomePage.salat.time");

  const defaultData = [
    {
      name: t("Fajr"),
      count: 120,
      fill: "#8dd1e1",
    },
    {
      name: t("Zuhr", {
        option: "zuhr",
      }),
      count: 60,
      fill: "#82ca9d",
    },
    {
      name: t("Asr"),
      count: 70,
      fill: "#a4de6c",
    },
    {
      name: t("Maghrib"),
      count: 80,
      fill: "#d0ed57",
    },
    {
      name: t("Isha"),
      count: 110,
      fill: "#ffc658",
    },
  ];

  const [data, setData] = useState(defaultData);

  return (
    <ResponsiveContainer
      width={400}
      height={400}
      className="max-w-[300px] max-h-[320px] sm:max-w-full sm:max-h-full"
    >
      <RadialBarChart
        width={400}
        height={400}
        cx={200}
        cy={180}
        innerRadius={30}
        outerRadius={170}
        barSize={20}
        data={data}
        className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl"
      >
        <RadialBar
          // minAngle={15}
          // clockWise
          label={{ position: "insideStart", fill: "#000" }}
          background
          dataKey="count"
        />
        <Legend
          iconSize={10}
          layout="radial"
          verticalAlign="bottom"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export const RadialChartSkeleton = () => (
  <div className="flex justify-center items-center">
    <Skeleton className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-xl" />
  </div>
);

export const RadialChart = dynamic(() => Promise.resolve(RadialChartCompo), {
  ssr: false,
  loading: RadialChartSkeleton,
});
