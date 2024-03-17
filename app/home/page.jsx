import ShortSum from "components/Containers/ShortSum";
import SalesAndRevenue from "components/Containers/Charts/SalesAndRevenue";
import VisitorsChart from "components/Containers/Charts/VisitorsChart";

export const metadata = {
  title: "Главная страница",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <ShortSum />
      <SalesAndRevenue />
      <VisitorsChart />
    </div>
  );
}
