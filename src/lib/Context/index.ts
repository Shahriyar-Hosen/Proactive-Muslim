import { createContext } from "react";

export interface IStore {
  date: Date;
  setDate: (date: Date | undefined) => void;
}

export const defaultContext: IStore = {
  date: new Date(),
  setDate: (date) => date,
};

export const StoreContext = createContext(defaultContext);
