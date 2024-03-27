"use client";

import { FC, memo } from "react";
import { StoreContext } from ".";
import { useContextStore } from "./store";

export const ContextProvider: FC<IChildren> = memo(({ children }) => {
  const contextValue = useContextStore();

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
});

ContextProvider.displayName = "ContextProvider";
