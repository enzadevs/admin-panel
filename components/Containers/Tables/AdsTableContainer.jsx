"use client";

import useSWR from "swr";
import { AdsTable } from "./AdsTable";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AdsTableContainer() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/ads/all",
    fetcher,
    {
      refreshInterval: 1500,
    }
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

  return <AdsTable rows={data} />;
}
