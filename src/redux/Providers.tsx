"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export const ReduxProviders = ({ children }: IChildren) => (
  <Provider store={store}> {children} </Provider>
);
