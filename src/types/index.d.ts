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
declare type SalahTime = "Fajr" | "Zuhr" | "Asr" | "Maghrib" | "Isha";
declare type I18nSalah = MessageKeys<
  { Fajr: string; Zuhr: string; Asr: string; Maghrib: string; Isha: string },
  SalahTime
>;

declare type SalahName =
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
  | "Jamaah"
  | "Sunnah"
  | "Nafal";
