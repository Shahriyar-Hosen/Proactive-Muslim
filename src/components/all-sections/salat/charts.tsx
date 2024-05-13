import { BarChart, RadarChartCompo, RadialChart } from "@/components/Charts";
import { Button } from "@/components/ui/button";
import { useStoreContext } from "@/hooks/use-store-context";
import { useChartData } from "@/hooks/use-update-chart-data";
import { useTranslations } from "next-intl";

export const Charts = () => {
  const { barChart7Day, radarChart, radialChart } = useStoreContext();
  const radarChartData = useChartData(radarChart);
  const radialChartData = useChartData(radialChart);
  const t = useTranslations("HomePage.analysis");

  return (
    <div className="space-y-5 lg:space-y-8 pt-5 lg:pt-10">
      <h1 className="text-2xl md:text-3xl xl:text-5xl text-center font-medium">
        {t.rich("title", {
          highlight: (chunks) => <span className="text-primary">{chunks}</span>,
        })}
      </h1>
      <div className="w-fit flex justify-center items-start gap-2.5 flex-wrap mx-auto">
        <BarChart data={barChart7Day} label={t("date")} />
        <RadarChartCompo data={radarChartData} label={t("radar-label")} />
        <RadialChart data={radialChartData} label={t("radial-label")} />
      </div>
      <div className="flex justify-center items-center">
        <Button>{t("button")}</Button>
      </div>
    </div>
  );
};
