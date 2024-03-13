import { ReduxProviders } from "@/redux/Providers";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import { locales } from "@/config";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface ILocaleLayoutProps extends PropsWithChildren, ParamsLocale {}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const generateMetadata = async ({
  params: { locale },
}: Omit<ILocaleLayoutProps, "children">): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
};

const LocaleLayout: FC<Readonly<ILocaleLayoutProps>> = ({
  children,
  params: { locale },
}) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang={locale} suppressHydrationWarning>
        <body className={inter.className}>
          <ReduxProviders>
            {children}
            <Analytics />
            <SpeedInsights />
          </ReduxProviders>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default LocaleLayout;
