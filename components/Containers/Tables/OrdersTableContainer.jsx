"use client";

import useSWR from "swr";
import { AllOrdersTable } from "./AllOrdersTable";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OrdersTableContainer() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/orders/all",
    fetcher
  );
  if (isLoading)
    return (
      <div className="bg-calm-50 animate-pulse rounded-lg center h-20 w-full">
        Загрузка...
      </div>
    );

  if (error)
    return (
      <div className="bg-red-200 border border-red-500 rounded-lg text-red-500 center h-20 w-full">
        Упс! Вышла ошибка.
      </div>
    );

  return <AllOrdersTable rows={data} />;
}
