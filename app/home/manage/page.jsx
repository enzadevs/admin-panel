import Link from "next/link";
import { BsBoxSeam, BsCart2 } from "react-icons/bs";
import { TbBrandAppgallery, TbCategory2 } from "react-icons/tb";
import { MdOutlineNotificationAdd } from "react-icons/md";

export default function ManagementPage() {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h2>Панель Управления</h2>
      <div className="flex flex-row flex-wrap gap-2 lg:flex-nowrap md:gap-4">
        <Link
          href="/home/manage/brands"
          className="bg-white border rounded-lg flex-row center custom-hover-fx h-20 w-full"
        >
          <TbBrandAppgallery className="h-6 w-6 mr-2" />
          <p className="text-base">Бренды</p>
        </Link>
        <Link
          href="/home/manage/products"
          className="bg-white border rounded-lg flex-row center custom-hover-fx h-20 w-full"
        >
          <BsBoxSeam className="h-6 w-6 mr-2" />
          <p className="text-base">Настройки продуктов</p>
        </Link>
        <Link
          href="/home/manage/orders"
          className="bg-white border rounded-lg flex-row center custom-hover-fx h-20 w-full"
        >
          <BsCart2 className="h-6 w-6 mr-2" />
          <p className="text-base">Настройки заказов</p>
        </Link>
        <Link
          href="/home/manage/categories"
          className="bg-white border rounded-lg flex-row center custom-hover-fx h-20 w-full"
        >
          <TbCategory2 className="h-6 w-6 mr-2" />
          <p className="text-base">Настройки категорий</p>
        </Link>
        <Link
          href="/home/manage/notification"
          className="bg-white border rounded-lg flex-row center custom-hover-fx h-20 w-full"
        >
          <MdOutlineNotificationAdd className="h-6 w-6 mr-2" />
          <p className="text-base">Настройки уведомлений</p>
        </Link>
      </div>
    </div>
  );
}
