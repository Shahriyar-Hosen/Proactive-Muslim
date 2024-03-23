export * from "./Circle";
export * from "./single-round-clock";
export * from "./three-rounded-clock";

import { SingleRound } from "./single-round-clock";
import { ThreeRounded } from "./three-rounded-clock";

export const Clock = {
  single: SingleRound,
  three: ThreeRounded,
};
