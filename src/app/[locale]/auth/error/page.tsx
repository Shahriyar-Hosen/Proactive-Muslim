import { ErrorCard } from "@/components/auth/error-card";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

const AuthErrorPage: NextPage<ParamsLocale> = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  return <ErrorCard />;
};

export default AuthErrorPage;
