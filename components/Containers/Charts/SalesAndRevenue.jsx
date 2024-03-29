"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import dynamic from "next/dynamic";
const CurrentMonthSalesChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SalesAndRevenue() {
  const { data, isLoading, isError } = UseFetcher(
    "http://localhost:3001/manage/utils/currentmonthsales"
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const daysOfMonth = {
    chart: {
      id: "month-revenue",
    },
    xaxis: {
      categories: data.daysOfMonth,
    },
  };

  const salesSeries = [
    {
      name: "Сумма продаж",
      data: data.series?.[0]?.data || [],
      color: "#158c83",
    },
    {
      name: "Прибыль",
      data: data.series?.[1]?.data || [],
      color: "#22c55e",
    },
  ];

  return (
    <div className="chart-box z-0">
      <div className="flex-row-center items-center gap-2 pl-4 h-10">
        <p className="text-keppel-600 font-semibold">Сумма продаж /</p>
        <p className="text-green-500 font-bold">Прибыль</p>
        <p>(ман.)</p>
      </div>
      <CurrentMonthSalesChart
        type="area"
        options={daysOfMonth}
        series={salesSeries}
        height={"400px"}
        width={"100%"}
      />
    </div>
  );
}
