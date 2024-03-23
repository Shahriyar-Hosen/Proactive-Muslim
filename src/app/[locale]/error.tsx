"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";

type Props = { error: Error; reset(): void } & ParamsLocale;
const Error: FC<Props> = ({ error, reset, params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src="/error.png" width={100} height={100} alt={t("title")} />
        <p className="text-3xl md:text-4xl lg:text-5xl text-primary mt-12">
          {t("title")}
        </p>

        <Link href="/" onClick={reset} title={t("title")}>
          <Button className="flex items-center space-x-2 mt-12 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 40 40"
            >
              <path
                fill="#8bb7f0"
                stroke="#4e7ab5"
                stroke-miterlimit="10"
                d="M4.2,35.5l2.6-2.6l-0.3-0.4c-3.2-3.4-5-7.9-5-12.6C1.5,9.8,9.8,1.5,20,1.5c0.8,0,1.6,0.1,2.5,0.2v4	c-0.8-0.1-1.7-0.2-2.5-0.2C12,5.5,5.5,12,5.5,20c0,3.6,1.3,7,3.8,9.7l0.4,0.4l2.9-2.9v8.3H4.2z"
              ></path>
              <path
                fill="#8bb7f0"
                stroke="#4788c7"
                stroke-miterlimit="10"
                d="M20,38.5c-0.8,0-1.6-0.1-2.5-0.2v-4c0.8,0.1,1.7,0.2,2.5,0.2c8,0,14.5-6.5,14.5-14.5c0-3.6-1.3-7-3.8-9.7	l-0.4-0.4l-2.9,2.9V4.5h8.3l-2.6,2.6l0.3,0.4c3.2,3.4,5,7.9,5,12.6C38.5,30.2,30.2,38.5,20,38.5z"
              ></path>
            </svg>
            <span>{t("buttonText")}</span>
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Error;
