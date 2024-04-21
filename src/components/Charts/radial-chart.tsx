"use client";

import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { CSSProperties, FC } from "react";
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

const RadialChartCompo: FC<{ data: IChartData[]; label: string }> = ({
  data,
  label,
}) => {
  return (
    <div className="relative">
      <div className="absolute top-0 z-50 w-full">
        <h1 className="pt-2.5 text-center text-lg text-slate-300/80">
          {label}
        </h1>
      </div>
      <ResponsiveContainer
        width={400}
        height={400}
        className="max-w-[300px] max-h-[320px] sm:max-w-full sm:max-h-full"
      >
        <RadialBarChart
          cx={200}
          cy={195}
          innerRadius={30}
          outerRadius={150}
          barSize={20}
          data={data}
          className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl"
        >
          <RadialBar
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
    </div>
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
