import { Metadata } from "next";
import { FC } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proactive Muslim",
  description: "Generated by Sunnah-IT",
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
const RootLayout: FC<Readonly<IChildren>> = ({ children }) => {
  return children;
};

export default RootLayout;
