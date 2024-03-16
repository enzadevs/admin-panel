"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { OrdersTable } from "components/Containers/Tables/OrdersTable";

export default function OrdersPage() {
  const { data, error, isLoading } = UseFetcher(
    "http://localhost:3001/orders/all"
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <h2>Список заказов</h2>
      <OrdersTable rows={data} />
    </div>
  );
}
