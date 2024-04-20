export * from "./defaultData";
import { IChartData } from "@/types";
import { createContext } from "react";
import {
  barChartDefaultData,
  radarDefaultData,
  radialDefaultData,
} from "./defaultData";

export interface IStore {
  date: Date;
  setDate: (date: Date | undefined) => void;
  barChart7Day: {
    day: string;
    complete: number;
    jamat: number;
    firstTakbeer: number;
  }[];
  radarChart: IChartData[];
  radialChart: IChartData[];
  refetchAnalysis: () => Promise<void>;
}

export const defaultContext: IStore = {
  date: new Date(),
  setDate: (date) => date,
  barChart7Day: barChartDefaultData,
  radarChart: radarDefaultData,
  radialChart: radialDefaultData,
  refetchAnalysis: async () => {},
};

export const StoreContext = createContext(defaultContext);
