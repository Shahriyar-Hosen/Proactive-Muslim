import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { CSSProperties, FC } from "react";

interface IThreeRoundedCircle {
  title: "Hours" | "Minutes" | "Seconds";
  clr: string;
  dot: number;
  offset: number;
  time: number;
}

const circle =
  "circle clock-svg-circle w-full h-full fill-transparent stroke-[4px] stroke-[#191919] translate-x-[5px] translate-y-[5px]";

export const ThreeRoundedCircle: FC<IThreeRoundedCircle> = ({
  clr,
  offset,
  dot,
  time,
  title,
}) => {
  const t = useTranslations("Clock");

  return (
    <div
      className="relative w-[80px] h-[80px] flex justify-center items-center"
      style={
        {
          "--clr": clr,
        } as CSSProperties
      }
    >
      {/* Dots */}
      <div
        className="dots absolute w-full h-full z-10 flex justify-center before:absolute before:-top-0 before:w-[10px] before:h-[10px] before:bg-[--clr] before:rounded-[50%]"
        style={{ transform: `rotateZ(${dot}deg)` }}
      />

      {/* svg circle */}
      <svg className="clock-svg rotate-[270deg] relative w-[80px] h-[80px]">
        <circle cx="35" cy="35" r="35" className={circle} />
        <circle
          cx="35"
          cy="35"
          r="35"
          id="hh"
          className={cn(circle, "stroke")}
          style={{
            strokeDashoffset: offset,
            stroke: clr,
            strokeDasharray: 220,
          }}
        />
      </svg>
      <div className="absolute">
        <div className="text-center">
          <h1 className="text-lg font-bold">{t("time", { count: time })}</h1>
          <p className="text-[10px] font-light">{t(title)}</p>
        </div>
      </div>
    </div>
  );
};
