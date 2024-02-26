import Link from "next/link";
import { IoStorefrontOutline, IoSettingsOutline } from "react-icons/io5";
import { BsBoxSeam, BsCart2 } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { TbDeviceDesktopCheck } from "react-icons/tb";
import { PiChartLineUp } from "react-icons/pi";

export default function SideBarMenu() {
  return (
    <div className="flex flex-col gap-2 px-4 mt-2 md:mt-4">
      <Link
        href="/home/manage"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <IoStorefrontOutline className="icons" />
        <p>Панель управления</p>
      </Link>
      <Link
        href="/home/orders"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <BsCart2 className="icons" />
        <p>Заказы</p>
      </Link>
      <Link
        href="/home/products"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <BsBoxSeam className="icons" />
        <p>Товары</p>
      </Link>
      <Link
        href="/home/users"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <LuUsers2 className="icons" />
        <p>Пользователи</p>
      </Link>
      <Link
        href="/home/ads"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <TbDeviceDesktopCheck className="icons" />
        <p>Реклама</p>
      </Link>
      {/* <Link
        href="/home/analytics"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <PiChartLineUp className="icons" />
        <p>Аналитика</p>
      </Link> */}
      <Link
        href="/home/settings"
        className="button-outline flex-row-center gap-2 px-2 h-10"
      >
        <IoSettingsOutline className="icons" />
        <p>Настройки</p>
      </Link>
    </div>
  );
}
