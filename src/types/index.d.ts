declare type ILocale = "en" | "bn";

declare interface ParamsLocale {
  params: { locale: ILocale };
}
declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}
declare interface Data<T> {
  success?: string;
  error?: string;
  data?: T;
}

declare type Priority = "Farz" | "Wajib" | "Sunnah" | "Nafal" | "Janazah";
declare type SalahTime =
  | "Fajr"
  | "Zuhr"
  | "Asr"
  | "Maghrib"
  | "Isha"
  | "Others";
declare type I18nSalah = MessageKeys<
  { Fajr: string; Zuhr: string; Asr: string; Maghrib: string; Isha: string },
  SalahTime
>;

declare type ISalahName =
  | "Fajr"
  | "Zuhr"
  | "Asr"
  | "Maghrib"
  | "Isha"
  | "Witr"
  | "Jumuah"
  | "Janazah"
  | "Taraweeh"
  | "Qaza"
  | "Tahajjud"
  | "Ishraq"
  | "Chasht"
  | "Awabeen"
  | "Tasbeeh"
  | "Yadain"
  | "Tawbah"
  | "Istika"
  | "Istikhara"
  | "Hajat"
  | "Musafir"
  | "Shukr"
  | "Tahiyatul_Azu"
  | "Dukhulul_Masjid"
  | "Jama_Binas_Salatain"
  | "Kusuf"
  | "Khusuf"
  | "Maryaz"
  | "Khaoof"
  | "Jamaah";

declare interface ISalat {
  id: string;
  userId: string;
  date: Date;
  name: ISalahName;
  time: SalahTime;
  priority: Priority;
  complete: boolean;
  rakats?: number | null;
  jamat?: boolean | null;
  firstTakbeer?: boolean | null;
  concentration?: number | null;
  before?: boolean | null;
  after?: boolean | null;
}

declare interface IChartData {
  name: string;
  namaz: string;
  count: number;
  fill?: string;
}
