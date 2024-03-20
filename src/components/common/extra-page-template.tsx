import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IExtraPageTemplate {
  img: string;
  title: string;
  des?: string;
  btn1Link?: string;
  btn1Text?: string;
  btn2Link?: string;
  btn2Text?: string;
}

export const ExtraPageTemplate: FC<IExtraPageTemplate> = ({
  img,
  title,
  des,
  btn1Link,
  btn1Text,
  btn2Link,
  btn2Text,
}) => {
  const t = useTranslations("Extra-Page");

  return (
    <main className="flex flex-col justify-center items-center w-full h-[80vh]">
      <Image
        src={img}
        alt={title}
        width={160}
        height={160}
        className="mb-8 h-40"
      />
      <h1 className="text-slate-400 dark:text-slate-300 text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
        {title}
      </h1>
      <p className="text-slate-500 dark:text-slate-300 text-center text-lg md:text-xl lg:text-2xl mb-8">
        {des || t("des")}
      </p>
      <div className="flex space-x-4">
        <Link
          href={btn1Link || "/"}
          className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          {btn1Text || t("btn1")}
        </Link>
        <Link
          href={btn2Link || "/"}
          className="border-2 border-slate-800 text-slate-300 font-bold py-3 px-6 rounded dark:text-slate-300 dark:border-sl3text-slate-300"
        >
          {btn2Text || t("btn2")}
        </Link>
      </div>
    </main>
  );
};
