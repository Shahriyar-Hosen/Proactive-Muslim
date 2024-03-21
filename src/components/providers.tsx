import { ReduxProviders } from "@/redux/Providers";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { FC } from "react";

interface IProviderProps extends IChildren {
  locale: ILocale;
}

const Providers: FC<IProviderProps> = ({ children, locale }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ReduxProviders>{children}</ReduxProviders>
    </NextIntlClientProvider>
  );
};

export default Providers;
