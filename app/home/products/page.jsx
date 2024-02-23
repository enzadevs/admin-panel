import Link from "next/link";
import ProductsTableContainer from "components/Containers/Tables/ProductsTableContainer";
import { TbShoppingCartPlus } from "react-icons/tb";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-row-center justify-between">
        <h2 className="text-xl font-semibold">Все товары</h2>
        <Link
          href="/home/products/new"
          className="button-primary flex-row-center justify-center gap-2 px-4 w-fit"
        >
          <TbShoppingCartPlus className="icons" />
          <>Добавить</>
        </Link>
      </div>
      <ProductsTableContainer />
    </div>
  );
}
