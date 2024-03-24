declare interface IUser {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

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

declare type Salah = "Fajr" | "Zuhr" | "Asr" | "Maghrib" | "Isha" | "Witr";
declare type Priority = "Farz" | "Wajib" | "Sunnah" | "Nafal" | "Janazah";
declare type I18nSalah = MessageKeys<
  { Fajr: string; Zuhr: string; Asr: string; Maghrib: string; Isha: string },
  Salah
>;
