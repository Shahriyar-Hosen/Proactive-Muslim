"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface ISalatCard {
  name: Salah;
  priority: Priority;
}

export const SalatCard: FC<ISalatCard> = ({ priority, name }) => {
  const t = useTranslations("HomePage.salat");

  const salatName = t(`name.${name}`);
  const salatPriority = t(`priority.${priority}`);

  return (
    <Card className="w-full max-w-[300px]  lg:w-fit mx-auto">
      <CardContent className="p-0">
        <CardHeader className="p-5">
          <CardTitle>{salatPriority}</CardTitle>
          <CardDescription>
            {t("card-label", { salat: salatName, priority: salatPriority })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="completed" className="flex flex-col space-y-1">
              <span>{t("completed")}</span>
              <span className="font-normal leading-snug text-muted-foreground">
                {t("completed-label", { salat: salatName })}
              </span>
            </Label>
            <Switch id="completed" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="jamat" className="flex flex-col space-y-1">
              <span className="capitalize">{t("jamat")}</span>
              <span className="font-normal leading-snug text-muted-foreground">
                {t("jamat-label", { salat: salatName })}
              </span>
            </Label>
            <Switch id="jamat" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="firstTakbeer" className="flex flex-col space-y-1">
              <span>{t("firstTakbeer")}</span>
              <span className="font-normal leading-snug text-muted-foreground">
                {t("firstTakbeer-label", { salat: salatName })}
              </span>
            </Label>
            <Switch id="firstTakbeer" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="secondary"
            className="w-full bg-secondary/60 hover:bg-secondary/70"
          >
            Save preferences
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
