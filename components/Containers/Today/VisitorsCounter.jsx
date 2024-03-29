import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { UseFetcher } from "utils/UseFetcher";
import { LuUsers2 } from "react-icons/lu";

export default function VisitorsCounter() {
  const { data, isLoading, isError } = UseFetcher(
    "http://localhost:3001/visitor/today"
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="short-sum-box">
      <div className="flex flex-col flex-[75%] h-full max-w-[75%]">
        <p className="border-b flex items-center pl-2 h-8">Посетители</p>
        <div className="center grow">
          <p className="font-semibold text-lg lg:text-xl">{data}</p>
        </div>
      </div>
      <span className="border-l center flex-[25%] h-full max-w-[25%]">
        <LuUsers2 className="h-6 w-6 lg:h-10 lg:w-10" />
      </span>
    </div>
  );
}
