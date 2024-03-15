import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";

import { auth } from "@/auth";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";
import { locales } from "@/config";

const inter = Inter({ subsets: ["latin"] });

interface ILocaleLayoutProps extends IChildren, ParamsLocale {}

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

const LocaleLayout = async ({
  children,
  params: { locale },
}: Readonly<ILocaleLayoutProps>) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang={locale} suppressHydrationWarning>
        <body className={inter.className}>
          <Providers locale={locale}>
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
};

export default LocaleLayout;
