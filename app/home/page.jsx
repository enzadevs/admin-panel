export const metadata = {
  title: "Главная страница",
};

import ShortSum from "components/Containers/ShortSum";
import SalesAndRevenue from "components/Containers/Charts/SalesAndRevenue";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <ShortSum />
      <SalesAndRevenue />
    </div>
  );
}
