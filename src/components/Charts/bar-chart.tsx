"use client";

import { pastDays } from "@/lib/utils";
import { scaleOrdinal } from "d3-scale";
import { schemePaired } from "d3-scale-chromatic";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { memo, useState } from "react";
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Skeleton } from "../ui/skeleton";

const colors = scaleOrdinal(schemePaired).range();

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
): string => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = memo((props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
});

interface ICustomizedTooltip {
  active?: boolean;
  payload?: any[];
  label?: string;
}
const CustomizedTooltip = memo(
  ({ active, payload, label }: ICustomizedTooltip) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="p-2 px-3 bg-white rounded-lg chart-tooltip">
          <div className="">
            <h3 className="text-center border-b-2 border-dotted text-accent border-secondary">
              তারিখ - {label}
            </h3>
          </div>
          <div className="">
            <p className="text-primary">নামাজ - {payload[0]?.value}</p>
            <p className="text-accent">জামাত - {payload[1]?.value}</p>
            <p className="text-[#c9bc00]">তাকবীরে উলা - {payload[2]?.value}</p>
          </div>
        </div>
      );
    }

    return null;
  }
);

export const BarChartCompo = memo(() => {
  const prvDays = pastDays(7);
  const t = useTranslations("HomePage.analysis");

  const [chartData, setChartData] = useState(
    prvDays.reverse().map((date) => ({
      day: date.slice(0, 2),
      Namaz: 5,
      Jamat: 4,
      Takbire_Ula: 3,
    }))
  );

  return (
    <ResponsiveContainer
      width={400}
      height={400}
      className="max-w-[300px] max-h-[300px] sm:max-w-full sm:max-h-full"
    >
      <ComposedChart
        width={400}
        height={400}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 30,
          left: -20,
        }}
        className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl"
      >
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="0.5 5" />

        <XAxis
          className="text-slate-200"
          dataKey="day"
          label={{
            value: t("date"),
            position: "insideBottom",
            offset: -15,
            fill: "#0eca2d",
          }}
          scale="band"
          stroke="#e2e8f0"
        />

        <YAxis stroke="#e2e8f0" type="number" domain={[0, 6]} tickCount={7} />

        <Tooltip content={<CustomizedTooltip />} />

        <Bar
          dataKey="Namaz"
          fill="#0eca2d"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[(index + 4) % 7]} />
          ))}
        </Bar>

        <Line
          type="monotone"
          dataKey="Takbire_Ula"
          stroke="#00fbff"
          fill="#ff6161"
        />

        <Line type="monotone" dataKey="Jamat" stroke="#33a02c" fill="#daadff" />
      </ComposedChart>
    </ResponsiveContainer>
  );
});

TriangleBar.displayName = "TriangleBar";
CustomizedTooltip.displayName = "CustomizedTooltip";
BarChartCompo.displayName = "BarChart";

export const BarChartSkeleton = () => (
  <div className="flex justify-center items-center rounded-lg">
    <Skeleton className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-xl" />
  </div>
);

export const BarChart = dynamic(() => Promise.resolve(BarChartCompo), {
  ssr: false,
  loading: BarChartSkeleton,
});
