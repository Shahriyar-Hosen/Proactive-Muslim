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
      <div>
        {t.rich("description", {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-white underline underline-offset-2"
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
