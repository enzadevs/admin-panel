"use client";

import OrderSum from "./Today/OrdersSum";
import OrdersCount from "./Today/OrdersCount";
import RevenueSummary from "./Today/RevenueSummary";
import VisitorsCounter from "./Today/VisitorsCounter";

export default function ShortSum() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full">
      <h2 className="text-lg font-semibold">Сегодня</h2>
      <div className="flex-row-center gap-2">
        <div className="flex items-center flex-col md:flex-row gap-2 flex-[50%] max-w-[50%] w-full">
          <OrderSum />
          <OrdersCount />
        </div>
        <div className="flex items-center flex-col md:flex-row gap-2 flex-[50%] max-w-[50%] w-full">
          <RevenueSummary />
          <VisitorsCounter />
        </div>
      </div>
    </div>
  );
}
