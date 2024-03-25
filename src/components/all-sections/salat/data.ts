export interface SalatData {
  name: SalahName;
  time: SalahTime;
  priority: Priority;
  complete: boolean;
  rakats?: number;
  jamat?: boolean;
  firstTakbeer?: boolean;
  concentration?: number;
  before?: boolean;
  after?: boolean;
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
    concentration: 0,
  },
  {
    name: "Fajr",
    time: "Fajr",
    priority: "Sunnah",
    rakats: 2,
    complete: false,
    concentration: 0,
    before: true,
  },
  {
    name: "Zuhr",
    time: "Zuhr",
    priority: "Sunnah",
    rakats: 4,
    complete: false,
    concentration: 0,
    before: true,
  },
  {
    name: "Zuhr",
    time: "Zuhr",
    priority: "Farz",
    rakats: 4,
    complete: false,
    jamat: false,
    firstTakbeer: false,
    concentration: 0,
  },
  {
    name: "Zuhr",
    time: "Zuhr",
    priority: "Sunnah",
    rakats: 2,
    complete: false,
    concentration: 0,
    after: true,
  },
  {
    name: "Jumuah",
    time: "Zuhr",
    priority: "Sunnah",
    rakats: 4,
    complete: false,
    concentration: 0,
    before: true,
  },
  {
    name: "Jumuah",
    time: "Zuhr",
    priority: "Farz",
    rakats: 2,
    complete: false,
    concentration: 0,
  },
  {
    name: "Jumuah",
    time: "Zuhr",
    priority: "Sunnah",
    rakats: 4,
    complete: false,
    concentration: 0,
    after: true,
  },
  {
    name: "Asr",
    time: "Asr",
    priority: "Sunnah",
    rakats: 4,
    complete: false,
    concentration: 0,
    before: true,
  },
  {
    name: "Asr",
    time: "Asr",
    priority: "Farz",
    rakats: 4,
    complete: false,
    concentration: 0,
    jamat: false,
    firstTakbeer: false,
  },
  {
    name: "Maghrib",
    time: "Maghrib",
    priority: "Farz",
    rakats: 3,
    complete: false,
    concentration: 0,
    jamat: false,
    firstTakbeer: false,
  },
  {
    name: "Maghrib",
    time: "Maghrib",
    priority: "Sunnah",
    rakats: 2,
    complete: false,
    concentration: 0,
    jamat: false,
    firstTakbeer: false,
  },
  {
    name: "Isha",
    time: "Isha",
    priority: "Farz",
    rakats: 4,
    complete: false,
    concentration: 0,
    jamat: false,
    firstTakbeer: false,
  },
  {
    name: "Isha",
    time: "Isha",
    priority: "Sunnah",
    rakats: 2,
    complete: false,
    concentration: 0,
    after: true,
  },
  {
    name: "Witr",
    time: "Isha",
    priority: "Wajib",
    rakats: 3,
    complete: false,
    concentration: 0,
  },
];
