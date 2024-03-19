"use client";

import { useTranslations } from "next-intl";
import { FC, useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

const Error: FC<Props> = ({ error, reset }) => {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className="flex justify-center items-center w-full h-screen">
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-destructive-foreground underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          ),
        })}
      </div>
    </main>
  );
};

export default Error;
