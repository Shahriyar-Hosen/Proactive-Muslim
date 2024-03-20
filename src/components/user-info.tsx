import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExtendedUser } from "@/next-auth";
import { Button } from "./ui/button";

interface UserInfoProps {
  user?: ExtendedUser;
  label?: string;
}

const InfoBox: FC<IChildren> = ({ children }) => (
  <div className="flex flex-row items-center justify-between rounded-lg border border-slate-600 p-3 shadow-sm">
    {children}
  </div>
);
const Label: FC<IChildren> = ({ children }) => (
  <p className="text-sm font-medium">{children}</p>
);
type ITruncate = { label?: string | null };
const Truncate: FC<ITruncate> = ({ label }) => (
  <p
    className="truncate text-xs max-w-[180px] font-mono p-1 px-2 bg-slate-800 rounded-md"
    title={label || ""}
  >
    {label}
  </p>
);

export const UserInfo: FC<UserInfoProps> = ({ user, label }) => {
  const t = useTranslations("ProfilePage");

  return (
    <Card className="w-full mt-5 max-w-screen-lg mx-auto bg-slate-900/70 text-white border-slate-600 relative shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{t("page-label")}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <InfoBox>
          <Label>{t("user.name")}</Label>
          <Truncate label={user?.name} />
        </InfoBox>
        <InfoBox>
          <Label>{t("user.email")}</Label>
          <Truncate label={user?.email} />
        </InfoBox>
        <InfoBox>
          <Label>{t("user.phone")}</Label>
          <Truncate label={user?.phone} />
        </InfoBox>
        <InfoBox>
          <Label>{t("user.gender")}</Label>
          <Truncate label={user?.gender} />
        </InfoBox>
        <InfoBox>
          <Label>{t("user.role")}</Label>
          <Truncate label={user?.role} />
        </InfoBox>

        <InfoBox>
          <Label>{t("user.two-factor-authentication")}</Label>
          <Badge
            variant="destructive"
            className={cn(user?.isTwoFactorEnabled && "bg-green-600")}
          >
            {user?.isTwoFactorEnabled ? t("user.on") : t("user.off")}
          </Badge>
        </InfoBox>
      </CardContent>
      <CardFooter>
        <Link href="/user/profile/update">
          <Button className="bg-cyan-400/75 hover:bg-cyan-400/90">
            {t("user.edit-button")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
