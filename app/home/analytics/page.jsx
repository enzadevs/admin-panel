import SalesAndRevenue from "components/Containers/Charts/SalesAndRevenue";
import VisitorsChart from "components/Containers/Charts/VisitorsChart";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h2>Аналитика</h2>
      <SalesAndRevenue />
      <VisitorsChart />
    </div>
  );
}
