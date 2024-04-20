import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

const currentTime = new Date().getHours();
export const prayerTime =
  (currentTime >= 4 && currentTime < 11 && "Fajr") ||
  (currentTime >= 11 && currentTime < 15 && "Zuhr") ||
  (currentTime >= 15 && currentTime <= 17 && "Asr") ||
  (currentTime >= 17 && currentTime <= 18 && "Maghrib") ||
  "Isha";

export const isJumuahDay = (date: Date) => {
  const today = new Date(date);
  const day = today.toDateString().slice(0, 3);
  const isJumuah = day === "Fri";
  return isJumuah;
};

export const salatAllFilters = (
  { time, name, priority }: ISalat,
  selectedSalat: SalahTime,
  date: Date
) => {
  if (time === "Zuhr") {
    const selectSalah = isJumuahDay(date) ? "Jumuah" : "Zuhr";
    return (
      time === selectedSalat && (name === selectSalah || priority === "Nafal")
    );
  }
  return time === selectedSalat;
};

export const replaceMatchingElements = (
  defaultData: ISalat[],
  dbData?: ISalat[]
) => {
  const result = defaultData.map((defaultSalat) => {
    const matchingObj =
      dbData &&
      dbData.find(
        (dbSalat) =>
          defaultSalat.name === dbSalat.name &&
          defaultSalat.time === dbSalat.time &&
          defaultSalat.priority === dbSalat.priority
      );
    return matchingObj ? { ...matchingObj } : defaultSalat;
  });

  return result;
};

export const pastDays = (day: number) => {
  // ✅ start from today's date
  const prvDays = Array.from(Array(day || 7).keys()).map((index) => {
    const date = new Date();

    date.setDate(date.getDate() - index);

    return date;
  });

  return prvDays;

  // 👇️ [0, 1, 2, 3, 4, 5, 6]
  // console.log(Array.from(Array(day || 7).keys()));
};
