"use client";

import Link from "next/link";
import Image from "next/image";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { UseFetcher } from "utils/UseFetcher";

export default function OrderPage({ params }) {
  const { data: orderStatuses } = UseFetcher(
    "http://localhost:3001/manage/order_statuses/all"
  );

  const { data, isLoading, isError } = UseFetcher(
    `http://localhost:3001/orders/fetch/${params.id}`
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const {
    address,
    comment,
    customer,
    deliveryType,
    paymentType,
    orderStatus,
    createdAt,
    updatedAt,
    productsList,
    sum,
  } = data;

  const handleStatusUpdate = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/manage/utils/update/${params.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            orderStatusId: id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Заказ был успешно изменен." });
      } else {
        ErrorToast({ errorText: "Произошла непредвиденная ошибка.." });
      }
    } catch (error) {
      if (error.response) {
        ErrorToast({
          errorText: "Ошибка сервера: " + error.response.statusText,
        });
      } else if (error.request) {
        ErrorToast({
          errorText: "Ошибка сети: Пожалуйста, проверьте подключение.",
        });
      } else {
        console.error(error);
        ErrorToast({ errorText: "Произошла непредвиденная ошибка." });
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2>Номер заказа: {params.id}</h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="bg-white rounded-lg shadow-md flex flex-col gap-2 px-4 w-full">
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Клиент:</p>
            <p className="font-semibold">{customer.firstName}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Номер телефона:</p>
            <p className="font-semibold">{customer.phoneNumber}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Адрес:</p>
            <p className="font-semibold">{address}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Комментарий:</p>
            <p className="font-semibold">{comment ? comment : "Нет"}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Вид доставки:</p>
            <p className="font-semibold">{deliveryType.titleRu}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Способ оплаты:</p>
            <p className="font-semibold">{paymentType.titleRu}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Статус заказа:</p>
            <p className="font-semibold">{orderStatus.titleRu}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Создано:</p>
            <p className="font-semibold">{createdAt}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-2 h-10">
            <p>Обновлено:</p>
            <p className="font-semibold">{updatedAt}</p>
          </li>
          <li className="flex-row-center justify-between gap-2 h-10">
            <p>Сумма:</p>
            <p className="font-semibold">{sum}</p>
          </li>
        </div>
        <div className="bg-white rounded-lg shadow-md flex flex-col gap-2 px-4 w-full">
          <h3 className="flex-row-center justify-between gap-2 font-bold h-10">
            Продукты
          </h3>
          <div className="flex flex-col gap-2">
            {productsList.map((item) => {
              let value;
              return (
                <div
                  key={item.id}
                  className="bg-mercury rounded-lg flex-row-center gap-2 px-2 h-10"
                >
                  <div className="relative h-10 w-10">
                    <Image
                      src={
                        `http://localhost:3001/images/` + item.product?.images
                      }
                      alt="image"
                      className="object-contain"
                      sizes="20vw"
                      fill
                    ></Image>
                  </div>
                  <Link
                    href={`/home/products/` + item.product?.id}
                    className="nav-link"
                  >
                    {item.product?.titleRu}
                  </Link>
                  <div className="ml-auto flex-row-center gap-2">
                    <p className="text-end font-bold w-16">
                      {item.quantity} шт.
                    </p>
                    <p className="text-end font-bold w-16">
                      {(value = item.quantity * item.product.sellPrice)} М
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-row-center gap-4">
            <h3 className="flex-row-center justify-between gap-2 font-bold h-10">
              Изменить статус:
            </h3>
            {orderStatuses?.map((item) => {
              return (
                <button
                  type="submit"
                  onClick={() => handleStatusUpdate(item.id)}
                  className="button-primary center gap-2 px-4 h-10 w-fit"
                  key={item.id}
                >
                  {item.titleRu}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
