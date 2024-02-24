import { UseFetcher } from "utils/UseFetcher";
import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { TbDatabaseDollar } from "react-icons/tb";

export default function RevenueSummary() {
  const { data, isLoading, isError } = UseFetcher(
    "http://localhost:5000/manage/utils/today/revenue"
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;
  return (
    <div className="short-sum-box">
      <div className="flex flex-col flex-[75%] h-full max-w-[75%]">
        <p className="border-b flex items-center text-sm md:text-base text-gray-600 pl-2 h-8 md:h-10">
          Выгода
        </p>
        <div className="center grow">
          <p className="font-semibold text-lg lg:text-2xl">{data.revenue}</p>
        </div>
      </div>
      <span className="border-l center flex-[25%] h-full max-w-[25%]">
        <TbDatabaseDollar className="h-6 w-6 lg:h-10 lg:w-10" />
      </span>
    </div>
  );
}
