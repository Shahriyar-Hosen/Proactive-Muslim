"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Circle } from ".";

const ThreeRoundedClock = () => {
  const now = new Date();
  let hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  // Convert to 12-hour format
  hh = hh % 12 || 12;
  const [hours, setHours] = useState(hh);
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [amPm, setAmPm] = useState<"am" | "pm">(hours >= 12 ? "pm" : "am");

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
    const AmPm = h >= 12 ? "pm" : "am";

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

  const t = useTranslations("Clock");

  return (
    <section className="font-thin text-foreground flex justify-center items-center gap-2 sm:gap-2.5">
      <div className="flex gap-1 sm:gap-2.5 flex-wrap justify-center items-center text-foreground">
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
      <p className="text-start font-medium text-base">{t(amPm)}</p>
    </section>
  );
};

export const ThreeRoundedClockSkeleton = () => (
  <div className="flex justify-center items-center gap-2 sm:gap-2.5">
    <div className="flex justify-center items-center space-x-5">
      <Skeleton className="w-[65px] h-[65px] rounded-full bg-slate-800 ring-4 ring-pink-600/50" />
      <Skeleton className="w-[65px] h-[65px] rounded-full bg-slate-800 ring-4 ring-yellow-500/50" />
      <Skeleton className="w-[65px] h-[65px] rounded-full bg-slate-800 ring-4 ring-green-500/50" />
    </div>
    <Skeleton className="w-10 h-5" />
  </div>
);

export const ThreeRounded = dynamic(() => Promise.resolve(ThreeRoundedClock), {
  ssr: false,
  loading: ThreeRoundedClockSkeleton,
});
