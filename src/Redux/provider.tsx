"use client";

import { Provider } from "react-redux";
import { store } from "./store";

import { FC, PropsWithChildren } from "react";

export const ReduxProviders: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}> {children} </Provider>
);
