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
import { FC } from "react";

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

const LocaleLayout: FC<Readonly<ILocaleLayoutProps>> = async ({
  children,
  params: { locale },
}) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang={locale} suppressHydrationWarning>
        <body className={inter.className}>
          <Providers locale={locale}>
            <div className="pb-20 bg-slate-900 text-slate-300 relative bg-fixed min-h-screen">
              <div className="dark:opacity-30 fixed right-[28%] top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter lg:top-44 lg:right-[10%] lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]" />
              <div className="fixed bottom-44 -left-64 h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter lg:bottom-24 lg:left-[10%] lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-52 xl:w-[400px]" />
              {children}
              <Toaster />
              <Analytics />
              <SpeedInsights />
            </div>
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
};

export default LocaleLayout;
