interface SalatData {
  name: SalahName;
  time: SalahTime;
  priority: Priority;
  complete: boolean;
  rakats?: number;
  jamat?: boolean;
  firstTakbeer?: boolean;
  concentration?: number;
}

export const salatTime: I18nSalah[] = [
  "Fajr",
  "Zuhr",
  "Asr",
  "Maghrib",
  "Isha",
  "Others",
];

export const allSalat: SalatData[] = [
  {
    name: "Fajr",
    time: "Fajr",
    priority: "Farz",
    rakats: 2,
    complete: false,
    jamat: false,
    firstTakbeer: false,
    concentration: 80,
  },
  {
    name: "Zuhr",
    time: "Zuhr",
    priority: "Farz",
    rakats: 4,
    complete: true,
    jamat: true,
    firstTakbeer: true,
    concentration: 90,
  },
  {
    name: "Asr",
    time: "Asr",
    priority: "Farz",
    rakats: 4,
    complete: false,
    jamat: false,
    firstTakbeer: true,
    concentration: 10,
  },
  {
    name: "Maghrib",
    time: "Maghrib",
    priority: "Farz",
    rakats: 3,
    complete: true,
    jamat: true,
    firstTakbeer: true,
    concentration: 85,
  },
  {
    name: "Isha",
    time: "Isha",
    priority: "Farz",
    rakats: 4,
    complete: false,
    jamat: false,
    firstTakbeer: false,
    concentration: 75,
  },
];
