import { addLeadingZero } from "@/lib/helpers";
import { pastDays } from "@/lib/utils";

export const barChartDefaultData = pastDays(7)
  .reverse()
  .map((date) => {
    const day = new Date(date).getDate();
    const formattedDay = addLeadingZero(day);
    return {
      day: formattedDay,
      complete: 5,
      jamat: 4,
      firstTakbeer: 3,
    };
  });

export const radarDefaultData = [
  {
    name: "Fajr",
    namaz: "fajr",
    count: 7,
  },
  {
    name: "Zuhr",
    namaz: "zuhr",
    count: 7,
  },
  {
    name: "Asr",
    namaz: "asr",
    count: 7,
  },
  {
    name: "Maghrib",
    namaz: "maghrib",
    count: 7,
  },
  {
    name: "Isha",
    namaz: "isha",
    count: 7,
  },
];

export const radialDefaultData = [
  {
    name: "Fajr",
    namaz: "fajr",
    count: 120,
    fill: "#8dd1e1",
  },
  {
    name: "Zuhr",
    namaz: "zuhr",
    count: 60,
    fill: "#82ca9d",
  },
  {
    name: "Asr",
    namaz: "asr",
    count: 70,
    fill: "#a4de6c",
  },
  {
    name: "Maghrib",
    namaz: "maghrib",
    count: 80,
    fill: "#d0ed57",
  },
  {
    name: "Isha",
    namaz: "isha",
    count: 110,
    fill: "#ffc658",
  },
  // {
  //   name: " ",
  //   namaz: "",
  //   count: 120,
  //   fill: "#24ff4850",
  // },
];
