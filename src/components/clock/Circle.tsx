import { cn } from "@/lib/utils";
import { CSSProperties, FC } from "react";
import { center } from "./three-rounded-clock";

interface ICircle {
  title: "Hours" | "Minutes" | "Seconds";
  clr: string;
  dot: number;
  offset: number;
  time: number;
}

const circle =
  "circle clock-svg-circle w-full h-full fill-transparent stroke-[4px] stroke-[#191919] translate-x-[5px] translate-y-[5px]";

export const Circle: FC<ICircle> = ({ clr, offset, dot, time, title }) => (
  <div
    className={cn(
      "circle circle-container relative w-[150px] h-[150px]",
      center
    )}
    style={
      {
        "--clr": clr,
      } as CSSProperties
    }
  >
    {/* Dots */}
    <div
      className="dots absolute w-full h-full z-10 flex justify-center before:absolute before:-top-[3px] before:w-[15px] before:h-[15px] before:bg-[--clr] before:rounded-[50%]"
      style={{ transform: `rotateZ(${dot}deg)` }}
    />

    {/* svg circle */}
    <svg className="clock-svg rotate-[270deg] relative w-[150px] h-[150px]">
      <circle cx="70" cy="70" r="70" className={circle} />
      <circle
        cx="70"
        cy="70"
        r="70"
        id="hh"
        className={cn(circle, "stroke")}
        style={{ strokeDashoffset: offset, stroke: clr, strokeDasharray: 440 }}
      />
    </svg>
    <div id="hours" className="absolute">
      <div className="text-center space-y-1">
        <h1 className="font-medium text-3xl">{time}</h1>
        <p className="text-xs font-light uppercase text-slate-300">{title}</p>
      </div>
    </div>
  </div>
);
