import { CSSProperties, FC } from "react";

interface ICircle {
  title: "Hours" | "Minutes" | "Seconds";
  clr: string;
  dot: number;
  offset: number;
  time: number;
}

export const Circle: FC<ICircle> = ({ clr, offset, dot, time, title }) => (
  <div
    className="div circle"
    style={
      {
        "--clr": clr,
      } as CSSProperties
    }
  >
    <div
      className="dots div hr_dot"
      style={{ transform: `rotateZ(${dot}deg)` }}
    />
    <svg className="svg">
      <circle cx="70" cy="70" r="70" className="circle" />
      <circle
        cx="70"
        cy="70"
        r="70"
        id="hh"
        className="circle"
        style={{ strokeDashoffset: offset }}
      ></circle>
    </svg>
    <div id="hours" className="div">
      {time}
      <br />
      <span className="span">{title}</span>
    </div>
  </div>
);
