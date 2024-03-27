"use client";

import { useCallback, useMemo, useState } from "react";
import { IStore } from ".";

export const useContextStore = () => {
  const [date, setDate] = useState(new Date());

  const handleSetDate = useCallback((date: Date | undefined) => {
    if (date) {
      setDate(date);
    } else {
      setDate(new Date());
    }
  }, []);

  const contextValue: IStore = useMemo(
    () => ({
      date,
      setDate: handleSetDate,
    }),
    [handleSetDate, date]
  );

  return contextValue;
};
