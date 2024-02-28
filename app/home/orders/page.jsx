"use client";

import useSWR from "swr";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { OrdersTable } from "components/Containers/Tables/Orders";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AdsPage() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/orders/all",
    fetcher,
    {
      refreshInterval: 1750,
    }
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <h2>Заказы</h2>
      <OrdersTable rows={data} />
    </div>
  );
}
