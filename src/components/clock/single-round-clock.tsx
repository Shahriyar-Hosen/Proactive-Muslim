"use client";

import dynamic from "next/dynamic";
import { CSSProperties, FC, memo, useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import { SingleRoundCircle } from "./SingleRoundCircle";

interface ITimeBx {
  c: string;
  time: number | string;
  dot?: boolean;
}

const TimeBx: FC<ITimeBx> = ({ c, time, dot }) => (
  <div
    className="text-[var(--c)] single-rounded-clock-text-shadow"
    style={{ "--c": c } as CSSProperties}
  >
    {time}
    {dot && <span>:</span>}
  </div>
);

export const SingleRoundClock = memo(() => {
  const t = useTranslations("Clock");
  const now = new Date();
  let hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  // Convert to 12-hour format
  hh = hh % 12 || 12;
  const [hours, setHours] = useState(hh);
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [amPm, setAmPm] = useState<"am" | "pm">(hh >= 12 ? "pm" : "am");

  const [hOffset, setHOffset] = useState(510 - (510 * hh) / 12);
  const [mOffset, setMOffset] = useState(630 - (630 * mm) / 60);
  const [sOffset, setSOffset] = useState(760 - (760 * ss) / 60);

  const [hrDot, setHrDot] = useState(hh * 30);
  const [minDot, setMinDot] = useState(mm * 6);
  const [secDot, setSecDot] = useState(ss * 6);

  const animated = (h: number, m: number, s: number) => {
    setHOffset(510 - (510 * h) / 12);
    setMOffset(630 - (630 * m) / 60);
    setSOffset(760 - (760 * s) / 60);

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

  return (
    <section className="ml-5 flex justify-center items-center">
      <section
        id="time"
        className="relative w-[250px] h-[250px] flex justify-center items-center"
      >
        <SingleRoundCircle
          circle={120}
          clr="#ff2972"
          dot={secDot}
          offset={sOffset}
          circleStroke={760}
          size="w-[250px] h-[250px]"
        />
        <SingleRoundCircle
          circle={100}
          clr="#fee800"
          dot={minDot}
          offset={mOffset}
          circleStroke={630}
          size="w-[210px] h-[210px]"
        />
        <SingleRoundCircle
          circle={80}
          clr="#04fc43"
          dot={hrDot}
          offset={hOffset}
          circleStroke={510}
          size="w-[170px] h-[170px]"
        />

        <div className="timeBx absolute inset-0 flex justify-center items-center w-full text-slate-300 gap-[15px] text-xl font-bold">
          <TimeBx dot c="#04fc43" time={t("time", { count: hours })} />
          <TimeBx dot c="#fee800" time={t("time", { count: minutes })} />
          <TimeBx c="#ff2972" time={t("time", { count: seconds })} />
          <div className="absolute translate-y-[-15px] text-[0.5em] right-[56px] font-extralight">
            <TimeBx c="#fff" time={t(amPm)} />
          </div>
        </div>
      </section>
    </section>
  );
});

export const SingleRoundSkeleton = () => (
  <div className="flex justify-center items-center">
    <Skeleton className="w-[250px] h-[250px] rounded-full" />
  </div>
);

export const SingleRound = dynamic(() => Promise.resolve(SingleRoundClock), {
  ssr: false,
  loading: SingleRoundSkeleton,
});

SingleRoundClock.displayName = "Clock";
