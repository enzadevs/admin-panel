"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(
  () => import("react-apexcharts").then((module) => module.default),
  { ssr: false }
);

export default function AnalyticsPage() {
  const yearlyVisitors = {
    chart: {
      id: "yearly-sales",
    },
    xaxis: {
      categories: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    },
  };
  const visitorsCount = [
    {
      name: "Продажи",
      data: [
        76338, 6784, 711467, 9784, 6788, 678678, 623434, 234, 92361, 234234,
        324213, 2314,
      ],
      color: "#7e22ce",
    },
  ];

  return (
    <div className="h-[750px] z-10">
      <Chart
        type="bar"
        options={yearlyVisitors}
        series={visitorsCount}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
