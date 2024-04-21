"use client";

import { useTranslations } from "next-intl";
import { FC, memo, useCallback, useEffect, useState } from "react";

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
import { useStoreContext } from "@/hooks/use-store-context";
import { isJumuahDay } from "@/lib/utils";
import { createOrUpdateSalat } from "@/server/actions/salat";

export const SalatCard: FC<ISalat> = memo((salat) => {
  const { date, refetchAnalysis } = useStoreContext();
  const [data, setData] = useState<ISalat>(salat);
  const [loading, setLoading] = useState(false);

  useEffect(() => setData(salat), [salat]);

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

  const updateComplete = useCallback((checked: boolean) => {
    setData((prv) => ({ ...prv, complete: checked }));
  }, []);

  const updateJamat = useCallback((checked: boolean) => {
    setData((prv) => ({ ...prv, jamat: checked }));
  }, []);
  const updateFirstTakbeer = useCallback((checked: boolean) => {
    setData((prv) => ({ ...prv, firstTakbeer: checked }));
  }, []);
  const updateConcentration = useCallback((value: number) => {
    if (value <= 100) {
      setData((prv) => ({ ...prv, concentration: value }));
    } else {
      setData((prv) => ({ ...prv, concentration: 100 }));
    }
  }, []);
  const updateRakats = useCallback(
    (value: number) => {
      const updateRakats = (value: number) =>
        setData((prv) => ({ ...prv, rakats: value }));

      // Conditional update
      name === "Taraweeh"
        ? value <= 20
          ? updateRakats(value)
          : updateRakats(20)
        : updateRakats(value);
    },
    [name]
  );

  useEffect(() => {
    firstTakbeer && updateJamat(true);
  }, [firstTakbeer, updateJamat]);

  const handleSubmit = async () => {
    setLoading(true);
    const { id, userId, ...salatUpdateData } = data || {};
    salatUpdateData.date = date;
    await createOrUpdateSalat(salatUpdateData)
      .then((data) => {
        setLoading(false);
        if (data?.data) {
          setData(data.data);
          refetchAnalysis();
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const t = useTranslations("HomePage.salat");
  const salatName = t(`name.${name}`);
  const salatPriority = t(`priority.${priority}`);
  const salatTime = t(`time.${time}`, {
    option: time === "Zuhr" && isJumuahDay(date) && "jumuah",
  });

  return (
    <Card className="w-full max-w-[290px]  lg:w-fit mx-auto">
      <CardContent className="p-0">
        <CardHeader className="p-5 space-y-2">
          <CardTitle className="text-primary/95 text-center">
            {((priority === "Farz" ||
              name === "Witr" ||
              priority === "Nafal") &&
              salatName) ||
              t("card-title", { priority: salatPriority, name: salatName })}
          </CardTitle>
          <CardDescription className="text-center">
            {priority !== "Nafal" &&
              priority !== "Janazah" &&
              t("card-label", {
                salatTime: name === "Witr" ? salatName : salatTime,
                priority: salatPriority,
                option:
                  (priority === "Sunnah" && before && "before") ||
                  (after && "after") ||
                  "other",
              })}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label
              htmlFor={`completed-${name}-${priority}-${time}-${
                (after && "after") || (before && "before")
              }`}
              className="flex flex-col space-y-1 text-primary/90 cursor-pointer"
            >
              <span>{t("completed")}</span>
            </Label>
            <Switch
              id={`completed-${name}-${priority}-${time}-${
                (after && "after") || (before && "before")
              }`}
              checked={complete}
              onCheckedChange={(checked) => updateComplete(checked)}
            />
          </div>
          {priority === "Farz" && (
            <>
              <div className="flex items-center justify-between space-x-2">
                <Label
                  htmlFor={`jamat-${name}-${priority}-${time}-${
                    (after && "after") || (before && "before")
                  }`}
                  className="flex flex-col space-y-1 text-primary/90 cursor-pointer"
                >
                  <span className="capitalize">{t("jamat")}</span>
                  <span className="font-normal leading-snug text-muted-foreground text-xs">
                    {t("jamat-label", { salat: salatName })}
                  </span>
                </Label>
                <Switch
                  id={`jamat-${name}-${priority}-${time}-${
                    (after && "after") || (before && "before")
                  }`}
                  checked={jamat || false}
                  onCheckedChange={(checked) => updateJamat(checked)}
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label
                  htmlFor={`firstTakbeer-${name}-${priority}-${time}-${
                    (after && "after") || (before && "before")
                  }`}
                  className="flex flex-col space-y-1 text-primary/90 cursor-pointer"
                >
                  <span>{t("firstTakbeer")}</span>
                  <span className="font-normal leading-snug text-muted-foreground text-xs">
                    {t("firstTakbeer-label", { salat: salatName })}
                  </span>
                </Label>
                <Switch
                  id={`firstTakbeer-${name}-${priority}-${time}-${
                    (after && "after") || (before && "before")
                  }`}
                  checked={firstTakbeer || false}
                  onCheckedChange={(checked) => updateFirstTakbeer(checked)}
                />
              </div>
            </>
          )}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between space-x-5">
              <Label
                htmlFor={`concentration-${name}-${priority}-${time}-${
                  (after && "after") || (before && "before")
                }`}
                className="flex flex-col space-y-2 text-primary/90 cursor-pointer"
              >
                <span>{t("concentration")}</span>
                <span className="font-normal leading-snug text-muted-foreground text-xs">
                  {t("concentration-label", { salat: salatName })}
                </span>
              </Label>
              <Input
                id={`concentration-${name}-${priority}-${time}-${
                  (after && "after") || (before && "before")
                }`}
                value={concentration || 0}
                onChange={(e) => updateConcentration(Number(e.target.value))}
                className="w-10 h-8 border border-slate-600 flex justify-center items-center rounded-md text-slate-300 px-1 py-0 text-center"
              />
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
              htmlFor={`rakats-${name}-${priority}-${time}-${
                (after && "after") || (before && "before")
              }`}
              className="flex flex-col space-y-2 text-primary/90 cursor-pointer"
            >
              <span>{t("rakats")}</span>
            </Label>
            <Input
              id={`rakats-${name}-${priority}-${time}-${
                (after && "after") || (before && "before")
              }`}
              value={rakats || 0}
              onChange={(e) => updateRakats(Number(e.target.value))}
              disabled={priority === "Farz" || priority === "Janazah"}
              className="w-10 h-8 border border-slate-600 flex justify-center items-center rounded-md text-slate-300 px-1 py-0 text-center"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            variant="default"
            onClick={handleSubmit}
            disabled={loading || salat === data}
            className="w-full bg-primary/60 hover:bg-primary/70 disabled:opacity-40"
          >
            {t("btn-text")}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
});

SalatCard.displayName = "SalatCard";
