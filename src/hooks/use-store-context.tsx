"use client";

import { StoreContext } from "@/lib/Context";
import { useContext } from "react";

export const useStoreContext = () => {
  const store = useContext(StoreContext);

  return store;
};
