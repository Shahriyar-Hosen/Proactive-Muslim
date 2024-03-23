"use client";

import dynamic from "next/dynamic";
import { CSSProperties, memo, useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import "./clock.css";

export const SingleRoundClock = memo(() => {
  const now = new Date();
  let hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  // Convert to 12-hour format
  hh = hh % 12 || 12;
  const [hours, setHours] = useState(hh);
  const [minutes, setMinutes] = useState(mm);
  const [seconds, setSeconds] = useState(ss);
  const [amPm, setAmPm] = useState(hours >= 12 ? "PM" : "AM");

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
    <section className="ml-5 flex justify-center items-center">
      <section id="time">
        <div
          className="circle"
          style={
            {
              "--clr": "#ff2972",
            } as CSSProperties
          }
        >
          <div
            className="dots sec_dot"
            style={{ transform: `rotateZ(${secDot}deg)` }}
          />
          <svg>
            <circle
              cx="120"
              cy="120"
              r="120"
              id="ss"
              style={{ strokeDashoffset: sOffset }}
            />
          </svg>
        </div>
        <div
          className="circle"
          style={
            {
              "--clr": "#fee800",
            } as CSSProperties
          }
        >
          <div
            className="dots min_dot"
            style={{ transform: `rotateZ(${minDot}deg)` }}
          />
          <svg>
            <circle
              cx="100"
              cy="100"
              r="100"
              id="mm"
              style={{ strokeDashoffset: mOffset }}
            />
          </svg>
        </div>
        <div
          className="circle"
          style={
            {
              "--clr": "#04fc43",
            } as CSSProperties
          }
        >
          <div
            className="dots hr_dot"
            style={{ transform: `rotateZ(${hrDot}deg)` }}
          />
          <svg>
            <circle
              cx="80"
              cy="80"
              r="80"
              id="hh"
              style={{ strokeDashoffset: hOffset }}
            />
          </svg>
        </div>
        <div className="timeBx">
          <div id="hours" style={{ "--c": "#04fc43" } as CSSProperties}>
            {hours}
          </div>
          <div id="minutes" style={{ "--c": "#fee800" } as CSSProperties}>
            {minutes}
          </div>
          <div id="seconds" style={{ "--c": "#ff2972" } as CSSProperties}>
            {seconds}
          </div>
          <div className="ap">
            <div id="ampm" style={{ "--c": "#fff" } as CSSProperties}>
              {amPm}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
});

SingleRoundClock.displayName = "Clock";

export const SingleRoundSkeleton = () => (
  <div className="flex justify-center items-center">
    <Skeleton className="w-[250px] h-[250px] rounded-full" />
  </div>
);

export const SingleRound = dynamic(() => Promise.resolve(SingleRoundClock), {
  ssr: false,
  loading: SingleRoundSkeleton,
});
