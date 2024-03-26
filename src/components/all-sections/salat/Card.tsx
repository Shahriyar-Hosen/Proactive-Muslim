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
import { setSalat } from "@/server/actions/salat";

export const SalatCard: FC<ISalat> = (props) => {
  const [data, setData] = useState<ISalat>(props);
  const [loading, setLoading] = useState(false);

  const {
    name,
    priority,
    time,
    complete,
    concentration,
    rakats,
    jamat,
    firstTakbeer,
    after,
    before,
  } = data || {};

  const updateComplete = (checked: boolean) => {
    setData((prv) => ({ ...prv, complete: checked }));
  };
  const updateJamat = (checked: boolean) => {
    setData((prv) => ({ ...prv, jamat: checked }));
  };
  const updateFirstTakbeer = (checked: boolean) => {
    setData((prv) => ({ ...prv, firstTakbeer: checked }));
  };
  const updateConcentration = (value: number) => {
    setData((prv) => ({ ...prv, concentration: value }));
  };
  const updateRakats = (value: number) => {
    setData((prv) => ({ ...prv, rakats: value }));
  };

  useEffect(() => {
    firstTakbeer && updateJamat(true);
  }, [firstTakbeer]);

  const handleSubmit = async () => {
    setLoading(true);
    await setSalat(data)
      .then((data) => {
        setLoading(false);
        setData(data?.data!);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const t = useTranslations("HomePage.salat");
  const salatName = t(`name.${name}`);
  const salatPriority = t(`priority.${priority}`);
  const salatTime = t(`time.${time}`);

  return (
    <Card className="w-full max-w-[290px]  lg:w-fit mx-auto">
      <CardContent className="p-0">
        <CardHeader className="p-5 space-y-2">
          <CardTitle className="text-primary/95 text-center">
            {(priority === "Farz" && salatName) ||
              t("card-title", { priority: salatPriority, name: salatName })}
          </CardTitle>
          <CardDescription className="text-center">
            {t("card-label", {
              salatTime: name === "Witr" ? salatName : salatTime,
              priority: salatPriority,
              option: (before && "before") || (after && "after") || "other",
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor="completed"
              className="flex flex-col space-y-1 text-primary/90"
            >
              <span>{t("completed")}</span>
            </Label>
            <Switch
              id="completed"
              checked={complete}
              onCheckedChange={(checked) => updateComplete(checked)}
            />
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
                  checked={jamat || false}
                  onCheckedChange={(checked) => updateJamat(checked)}
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
                  checked={firstTakbeer || false}
                  onCheckedChange={(checked) => updateFirstTakbeer(checked)}
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
                {concentration}
              </div>
            </div>
            <Slider
              max={100}
              step={1}
              value={[concentration || 0]}
              onValueChange={(value) => updateConcentration(value[0])}
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
              value={rakats || 0}
              onChange={(e) => updateRakats(Number(e.target.value))}
              disabled={priority === "Farz" || priority === "Janazah"}
              className="w-10 h-8 border border-slate-600 flex justify-center items-center rounded-md text-slate-400 px-1 py-0 text-center"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            variant="default"
            onClick={handleSubmit}
            disabled={loading || props === data}
            className="w-full bg-primary/60 hover:bg-primary/70 disabled:opacity-40"
          >
            {t("btn-text")}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
