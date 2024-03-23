import { MessageKeys } from "next-intl";

interface INav {
  label: Salah;
  name: MessageKeys<
    {},
    "nav.fajr" | "nav.zuhr" | "nav.asr" | "nav.maghrib" | "nav.isha"
  >;
}
export const navItems: INav[] = [
  {
    name: "nav.fajr",
    label: "Fajr",
  },
  {
    name: "nav.zuhr",
    label: "Zuhr",
  },
  {
    name: "nav.asr",
    label: "Asr",
  },
  {
    name: "nav.maghrib",
    label: "Maghrib",
  },
  {
    name: "nav.isha",
    label: "Isha",
  },
];
