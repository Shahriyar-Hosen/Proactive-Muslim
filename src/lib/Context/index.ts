export * from "./defaultData";
import { createContext } from "react";
import {
  barChartDefaultData,
  radarDefaultData,
  radialDefaultData,
} from "./defaultData";

interface IChartData {
  name: string;
  namaz: string;
  count: number;
  fill?: string;
}
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
