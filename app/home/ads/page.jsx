"use client";

import Link from "next/link";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { AdsTable } from "components/Containers/Tables/AdsTable";
import { TbDeviceDesktopPlus } from "react-icons/tb";

export default function AdsPage() {
  const { data, error, isLoading } = UseFetcher(
    "http://localhost:3001/ads/all"
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-row-center justify-between">
        <h2>Реклама</h2>
        <Link
          href="/home/ads/new"
          className="button-primary flex-row-center justify-center gap-2 px-4 h-10 w-fit"
        >
          <TbDeviceDesktopPlus className="icons" />
          Добавить
        </Link>
      </div>
      <AdsTable rows={data} />
    </div>
  );
}
