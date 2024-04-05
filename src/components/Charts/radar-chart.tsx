import { FC, memo, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const defaultData = [
  {
    namaz: "ফজর",
    count: 7,
  },
  {
    namaz: "যোহর",
    count: 7,
  },
  {
    namaz: "আসর",
    count: 7,
  },
  {
    namaz: "মাগরিব",
    count: 7,
  },
  {
    namaz: "এশা",
    count: 7,
  },
];

interface ICustomizedTooltip {
  active?: boolean;
  payload?: any[];
  label?: string;
}
interface IChartRadar {
  width: number;
  height: number;
  cx: number;
  cy: number;
  outer: number;
  data: {
    namaz: string;
    count: number;
  }[];
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

const ChartRadar: FC<IChartRadar> = ({
  data,
  width,
  height,
  cx,
  cy,
  outer,
}) => (
  <ResponsiveContainer
    width={400}
    height={400}
    className="max-w-[300px] max-h-[300px] sm:max-w-full sm:max-h-full"
  >
    <RadarChart
      cx={cx}
      cy={cy}
      data={data}
      width={width}
      height={height}
      outerRadius={outer}
    />
  </ResponsiveContainer>
);

export const RadarChartCompo = memo(() => {
  // const resData = useAppSelector((state) => state.filter.avg);
  const [data, setData] = useState(defaultData);

  // useEffect(() => {
  //   if (resData.length !== 0) {
  //     setData(resData);
  //   }
  // }, [resData]); RadarChart

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
        width={400}
        height={400}
        outerRadius={125}
        className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl w-[200px] lg:w-[380px] h-full shadow-inner"
      >
        <Tooltip content={<CustomizedTooltip />} />
        <PolarGrid />
        <PolarAngleAxis dataKey="namaz" stroke="#e2e8f0" fill="#0eca2d" />
        <PolarRadiusAxis stroke="#f6d860" fill="#0eca2d" />
        <Radar
          name="namaz"
          dataKey="count"
          stroke="#00fbff"
          fill="#24ff48"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
});

RadarChartCompo.displayName = "Calculate";
CustomizedTooltip.displayName = "CustomizedTooltip";
