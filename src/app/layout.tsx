import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import { ReduxProviders } from "@/redux/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proactive Muslim",
  description: "Generated by Sunnah-IT",
};

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => (
  <html lang="en">
    <body
      className={`${inter.className} flex justify-center items-center min-h-screen`}
    >
      <ReduxProviders>
        {children}
        <Analytics />
        <SpeedInsights />
      </ReduxProviders>
    </body>
  </html>
);

export default RootLayout;
