import ShortSum from "components/Containers/ShortSum";
import SalesAndRevenue from "components/Containers/Charts/SalesAndRevenue";

export const metadata = {
  title: "Главная страница",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <ShortSum />
      <SalesAndRevenue />
    </div>
  );
}
