declare interface IUser {
  id?: string;
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
