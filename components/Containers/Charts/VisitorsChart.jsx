"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import dynamic from "next/dynamic";
const CurrentMonthVisitorsChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function VisitorsChart() {
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

  const trueValues = data.series.map((item) => item.true);
  const falseValues = data.series.map((item) => item.false);

  const visitorsCount = [
    {
      name: "Количество пользователей",
      data: trueValues,
      color: "#7e22ce",
    },
    {
      name: "Количество посетителей",
      data: falseValues,
      color: "#40AB00",
    },
  ];

  return (
    <div className="chart-box z-0">
      <div className="flex-row-center items-center gap-2 pl-4 h-10">
        <p className="text-keppel-600 font-bold">Посетители</p>
      </div>
      <CurrentMonthVisitorsChart
        type="bar"
        options={daysOfMonth}
        series={visitorsCount}
        height={"400px"}
        width={"100%"}
      />
    </div>
  );
}
