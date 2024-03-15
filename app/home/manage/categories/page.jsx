"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import NewCategoryForm from "components/Containers/Forms/NewCategoryForm";
import { UseFetcher } from "utils/UseFetcher";
import { CategoriesTable } from "components/Containers/Tables/CategoriesTable";

export default function CategoriesPage() {
  const { data, error, isLoading } = UseFetcher(
    "http://localhost:3001/manage/categories/all"
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <NewCategoryForm />
      <CategoriesTable rows={data} />
    </div>
  );
}
