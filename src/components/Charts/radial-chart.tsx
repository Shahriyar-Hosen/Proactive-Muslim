"use client";

import dynamic from "next/dynamic";
import { CSSProperties, FC } from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { Skeleton } from "../ui/skeleton";

const data = [
  {
    name: "ফজর",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "যোহর",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "আসর",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "মাগরিব",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "এশা",
    uv: 14.67,
    pv: 400,
    fill: "#ffc658",
  },
];

const style: CSSProperties = {
  position: "relative",
  marginTop: -45,
};

const RadialChartCompo: FC = () => {
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
          dataKey="pv"
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
