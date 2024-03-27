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

export const salatAllFilters = (
  { time, name }: ISalat,
  selectedSalat: SalahTime
) => {
  if (time === "Zuhr") {
    const today = new Date();
    const day = today.toDateString().slice(0, 3);
    const selectSalah = day === "Fri" ? "Jumuah" : "Zuhr";
    return time === selectedSalat && name === selectSalah;
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
