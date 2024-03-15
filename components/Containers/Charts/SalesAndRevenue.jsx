"use client";

import dynamic from "next/dynamic";
const CurrentMonthSalesChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const CurrentMonthVisitorsChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function SalesAndRevenue() {
  const daysOfMonth = {
    chart: {
      id: "month-revenue",
    },
    xaxis: {
      categories: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
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
      data: Array.from(
        { length: 30 },
        () => Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
      ),
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
          <p className="text-keppel-600 font-bold">Посетители /</p>
          <p>(ман.)</p>
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
