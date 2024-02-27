"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline } from "react-icons/io5";

export default function SettingsPage() {
  const { data, isLoading, isError } = UseFetcher(
    `http://localhost:5000/users/get/${99362934985}`
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const {
    firstName,
    phoneNumber,
    address,
    role,
    wishList,
    shoppingCart,
    orders,
  } = data;

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <ul className="bg-white rounded-lg shadow-md flex flex-col gap-4 px-4 w-full">
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Имя:</p>
          <p className="font-semibold">{firstName}</p>
        </li>
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Номер телефона:</p>
          <p className="font-semibold">{phoneNumber}</p>
        </li>
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Адрес:</p>
          <p className="font-semibold line-clamp-1">{address}</p>
        </li>
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Роль:</p>
          <p className="font-semibold">{role}</p>
        </li>
      </ul>
      <div className="bg-white rounded-lg shadow-md flex flex-col gap-4 px-4 w-full">
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Товары в избранных:</p>
          <p className="font-semibold">{wishList.length}</p>
        </li>
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Товары в корзине:</p>
          <p className="font-semibold">{shoppingCart.length}</p>
        </li>
        <li className="border-b flex-row-center justify-between gap-4 h-10">
          <p>Заказы:</p>
          <p className="font-semibold">{orders.length}</p>
        </li>
      </div>
    </div>
  );
}
