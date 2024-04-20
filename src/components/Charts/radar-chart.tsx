"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { FC, memo } from "react";
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
    const t = useTranslations("HomePage.analysis");
    if (active && payload && payload?.length > 0) {
      return (
        <div className="p-2 px-3 bg-slate-800/95 rounded-lg chart-tooltip">
          <h3 className="text-center border-b-2 border-dotted text-accent border-secondary">
            {t("radar-tooltip")}
          </h3>
          <p className="mt-2 text-primary">
            {label} - {payload[0].value}
          </p>
        </div>
      );
    }

    return null;
  }
);

const RadarChartComponent: FC<{ data: IChartData[] }> = memo(({ data }) => {
  return (
    <ResponsiveContainer
      width={400}
      height={400}
      className="max-w-[300px] max-h-[300px] sm:max-w-full sm:max-h-full"
    >
      <RadarChart
        cx={190}
        cy={215}
        data={data}
        outerRadius={125}
        className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl w-[200px] lg:w-[380px] h-full shadow-inner"
      >
        <Tooltip content={<CustomizedTooltip />} />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" stroke="#e2e8f0" fill="#0eca2d" />
        <PolarRadiusAxis stroke="#f6d860" fill="#0eca2d" />
        <Radar
          name="name"
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
