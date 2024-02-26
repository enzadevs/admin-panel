"use client";

import useSWR from "swr";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { CategoriesTable } from "components/Containers/Tables/CategoriesTable";
import { HiOutlinePlusSm } from "react-icons/hi";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CategoriesPage() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/manage/category/all",
    fetcher,
    {
      refreshInterval: 1750,
    }
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <h2>Управление категориями</h2>
      <CategoriesTable rows={data} />
    </div>
  );
}
