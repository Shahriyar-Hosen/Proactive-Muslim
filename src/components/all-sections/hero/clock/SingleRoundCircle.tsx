import { cn } from "@/lib/utils";
import { CSSProperties, FC } from "react";

interface ISingleRoundCircleCircle {
  clr: string;
  dot: number;
  offset: number;
  circle: number;
  circleStroke: number;
  size: string;
}

export const SingleRoundCircle: FC<ISingleRoundCircleCircle> = ({
  circle,
  clr,
  dot,
  offset,
  size,
  circleStroke,
}) => (
  <div
    className={cn("circle absolute flex justify-center items-center")}
    style={{ "--clr": clr } as CSSProperties}
  >
    <div
      className={cn(
        "single-rounded-clock-dot-shadow",
        "absolute w-full h-full flex justify-center items-center z-10",
        "before:absolute before:-top-[3px] before:w-[15px] before:h-[15px] before:bg-[--clr] before:rounded-full"
      )}
      style={{ transform: `rotateZ(${dot}deg)` }}
    />
    <svg className={cn("relative rotate-[270deg]", size)}>
      <circle
        cx={circle}
        cy={circle}
        r={circle}
        className="w-full h-full fill-transparent stroke-[var(--clr)] stroke-[5px] translate-x-[5px] translate-y-[5px] opacity-50"
        style={{
          strokeDashoffset: offset,
          strokeDasharray: circleStroke,
          strokeOpacity: circleStroke,
        }}
      />
    </svg>
  </div>
);
