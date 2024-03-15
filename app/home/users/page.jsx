"use client";

import { UseFetcher } from "utils/UseFetcher";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UsersTable } from "components/Containers/Tables/UsersTable";

export default function UsersPage() {
  const { data, error, isLoading } = UseFetcher(
    "http://localhost:3001/users/all"
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <h2>Все пользователи</h2>
      <UsersTable rows={data} />
    </div>
  );
}
