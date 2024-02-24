"use client";

import dynamic from "next/dynamic";
const CurrentMonthSalesChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const CurrentMonthVisitorsChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SalesAndRevenue() {
  return (
    <div className="flex flex-col gap-4 z-0">
      <h1 className="text-lg font-semibold">Статистика за месяц</h1>
      <div className="chart-box"></div>
      <div className="chart-box"></div>
    </div>
  );
}
