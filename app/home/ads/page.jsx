"use client";

import Link from "next/link";
import useSWR from "swr";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { AdsTable } from "components/Containers/Tables/AdsTable";
import { TbDeviceDesktopPlus } from "react-icons/tb";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AdsPage() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/ads/all",
    fetcher,
    {
      refreshInterval: 1750,
    }
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;

  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-row-center justify-between">
        <h2 className="text-lg font-semibold w-fit">Реклама</h2>
        <Link
          href="/home/ads/new"
          className="button-primary flex-row-center justify-center gap-2 px-4 w-fit"
        >
          <TbDeviceDesktopPlus className="icons" />
          <>Добавить</>
        </Link>
      </div>
      <AdsTable rows={data} />
    </div>
  );
}
