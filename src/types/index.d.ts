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
