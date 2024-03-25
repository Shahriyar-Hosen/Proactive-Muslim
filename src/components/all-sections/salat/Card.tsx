"use client";

import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { SalatData } from "./data";

export const SalatCard: FC<SalatData> = ({
  name,
  priority,
  time,
  complete,
  concentration,
  rakats,
  jamat,
  firstTakbeer,
}) => {
  const [updateConcentration, setUpdateConcentration] = useState(concentration);
  const [updateJamat, setUpdateJamat] = useState(jamat);
  const [updateFirstTakbeer, setUpdateFirstTakbeer] = useState(firstTakbeer);
  const t = useTranslations("HomePage.salat");

  useEffect(() => {
    updateFirstTakbeer && setUpdateJamat(true);
  }, [updateFirstTakbeer]);

  const salatName = t(`name.${name}`);
  const salatPriority = t(`priority.${priority}`);
  // TODO: add concentration slider

  return (
    <Card className="w-full max-w-[290px]  lg:w-fit mx-auto">
      <CardContent className="p-0">
        <CardHeader className="p-5">
          <CardTitle className="text-primary/95">{salatPriority}</CardTitle>
          <CardDescription>
            {t("card-label", { salat: salatName, priority: salatPriority })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="completed"
              className="flex flex-col space-y-1 text-primary/90"
            >
              <span>{t("completed")}</span>
              {/* <span className="font-normal leading-snug text-muted-foreground">
                {t("completed-label", { salat: salatName })}
              </span> */}
            </Label>
            <Switch id="completed" defaultChecked={complete} />
          </div>
          {priority === "Farz" && (
            <>
              <div className="flex items-center justify-between space-x-2">
                <Label
                  htmlFor="jamat"
                  className="flex flex-col space-y-1 text-primary/90"
                >
                  <span className="capitalize">{t("jamat")}</span>
                  <span className="font-normal leading-snug text-muted-foreground text-xs">
                    {t("jamat-label", { salat: salatName })}
                  </span>
                </Label>
                <Switch
                  id="jamat"
                  defaultChecked={updateJamat}
                  checked={updateJamat}
                  onCheckedChange={(checked) => setUpdateJamat(checked)}
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label
                  htmlFor="firstTakbeer"
                  className="flex flex-col space-y-1 text-primary/90"
                >
                  <span>{t("firstTakbeer")}</span>
                  <span className="font-normal leading-snug text-muted-foreground text-xs">
                    {t("firstTakbeer-label", { salat: salatName })}
                  </span>
                </Label>
                <Switch
                  id="firstTakbeer"
                  defaultChecked={updateFirstTakbeer}
                  checked={updateFirstTakbeer}
                  onCheckedChange={(checked) => setUpdateFirstTakbeer(checked)}
                />
              </div>
            </>
          )}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="concentration"
                className="flex flex-col space-y-2 text-primary/90"
              >
                <span>{t("concentration")}</span>
                <span className="font-normal leading-snug text-muted-foreground text-xs">
                  {t("concentration-label", { salat: salatName })}
                </span>
              </Label>
              <div className="w-14 h-8 border border-slate-600 flex justify-center items-center rounded-md text-slate-400">
                {updateConcentration}
              </div>
            </div>
            <Slider
              defaultValue={[updateConcentration || 0]}
              max={100}
              step={1}
              onValueChange={(value) => setUpdateConcentration(value[0])}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="rakats"
              className="flex flex-col space-y-2 text-primary/90"
            >
              <span>{t("rakats")}</span>
            </Label>
            <Input
              id="rakats"
              defaultValue={rakats}
              disabled={
                priority === "Farz" ||
                priority === "Wajib" ||
                priority === "Janazah"
              }
              className="w-10 h-8 border border-slate-600 flex justify-center items-center rounded-md text-slate-400 px-1 py-0 text-center"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="default"
            className="w-full bg-primary/60 hover:bg-primary/70"
          >
            {t("btn-text")}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
