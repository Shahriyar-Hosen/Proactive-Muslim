"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Circle } from "./Circle";
import "./Clock-2.css";

const ThreeRoundedClock = () => {
  const now = new Date();
  let hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  const [hours, setHours] = useState(hh);
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [amPm, setAmPm] = useState(hours >= 12 ? "PM" : "AM");

  const [hOffset, setHOffset] = useState(220 - (220 * hh) / 12);
  const [mOffset, setMOffset] = useState(220 - (220 * mm) / 60);
  const [sOffset, setSOffset] = useState(220 - (220 * ss) / 60);

  const [hrDot, setHrDot] = useState(hh * 30);
  const [minDot, setMinDot] = useState(mm * 6);
  const [secDot, setSecDot] = useState(ss * 6);

  const animated = (h: number, m: number, s: number) => {
    setHOffset(220 - (220 * h) / 12);
    setMOffset(220 - (220 * m) / 60);
    setSOffset(220 - (220 * s) / 60);

    setHrDot(h * 30);
    setMinDot(m * 6);
    setSecDot(s * 6);
  };

  // Updating Time
  const updatingTime = () => {
    const now = new Date();

    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const AmPm = h >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    h = h % 12 || 12;

    setHours(h);
    setMinutes(m);
    setSeconds(s);
    setAmPm(AmPm);

    animated(h, m, s);
  };

  useEffect(() => {
    const intervalId = setInterval(() => updatingTime(), 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="font-thin text-foreground flex justify-center items-center gap-2.5 flex-wrap">
      <div className="flex gap-2.5 flex-wrap justify-center items-center text-foreground">
        <Circle
          title="Hours"
          clr="#ff2972"
          dot={hrDot}
          offset={hOffset}
          time={hours}
        />
        <Circle
          title="Minutes"
          clr="#fee800"
          dot={minDot}
          offset={mOffset}
          time={minutes}
        />
        <Circle
          title="Seconds"
          clr="#04fc43"
          dot={secDot}
          offset={sOffset}
          time={seconds}
        />
      </div>
      <div>
        <p className="text-start font-medium text-base">{amPm}</p>
      </div>
    </section>
  );
};

export const Clock = dynamic(() => Promise.resolve(ThreeRoundedClock), {
  ssr: false,
  loading: () => <h1>loading...</h1>,
});
