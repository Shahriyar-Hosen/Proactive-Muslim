import { MessageKeys } from "next-intl";

interface INav {
  label: I18nSalah;
}

export const navItems: INav[] = [
  {
    label: "Fajr",
  },
  {
    label: "Zuhr",
  },
  {
    label: "Asr",
  },
  {
    label: "Maghrib",
  },
  {
    label: "Isha",
  },
];
