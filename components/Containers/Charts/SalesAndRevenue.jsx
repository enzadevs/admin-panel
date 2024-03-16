"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import dynamic from "next/dynamic";
const CurrentMonthSalesChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const CurrentMonthVisitorsChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SalesAndRevenue() {
  const { data, isLoading, isError } = UseFetcher(
    "http://localhost:3001/visitor/currentmonth"
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
      data: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000
      ),
      color: "#158c83",
    },
    {
      name: "Прибыль",
      data: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000
      ),
      color: "#22c55e",
    },
  ];

  const visitorsCount = [
    {
      name: "Количество посетителей",
      data: data.series,
      color: "#7e22ce",
    },
  ];

  return (
    <div className="flex flex-col gap-4 z-0">
      <h1 className="text-lg font-semibold">Статистика за месяц</h1>
      <div className="chart-box">
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
      <div className="chart-box">
        <div className="flex-row-center items-center gap-2 pl-4 h-10">
          <p className="text-keppel-600 font-bold">Посетители</p>
        </div>
        <CurrentMonthVisitorsChart
          type="area"
          options={daysOfMonth}
          series={visitorsCount}
          height={"400px"}
          width={"100%"}
        />
      </div>
    </div>
  );
}
