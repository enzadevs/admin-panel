"use client";

import Link from "next/link";
import { UseFetcher } from "utils/UseFetcher";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { BrandsTable } from "components/Containers/Tables/BrandsTable";
import { HiOutlinePlusSm } from "react-icons/hi";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ManageBrandsPage() {
  const { data, error, isLoading } = UseFetcher(
    "http://localhost:3001/manage/brands/all"
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-row-center justify-between">
        <h2>Управление брендами</h2>
        <Link
          href="/home/manage/brands/new"
          className="button-primary flex-row center gap-2 px-4 h-10 w-fit"
        >
          <HiOutlinePlusSm className="icons" />
          Добавить
        </Link>
      </div>
      <BrandsTable rows={data} />
    </div>
  );
}
