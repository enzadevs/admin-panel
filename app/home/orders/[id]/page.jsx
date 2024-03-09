"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";

export default function OrderViewPage({ params }) {
  const [orderStatusId, setOrderStatusId] = useState();

  const { data: orderStatuses } = UseFetcher(
    "http://localhost:5000/manage/order_status/all"
  );

  const { data, isLoading, isError } = UseFetcher(
    `http://localhost:5000/orders/fetch/${params.id}`
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const {
    address,
    sum,
    comment,
    customer,
    deliveryType,
    paymentType,
    orderStatus,
    createdAt,
    updatedAt,
    products,
  } = data;

  const handleStatusUpdate = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/manage/utils/update/${params.id}`,
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
        SuccessToast({ successText: "Заказ был успешно закрыт." });
        setTimeout(() => {
          window.location.href = "/home/orders";
        }, 1250);
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
    <div className="flex flex-col gap-4">
      <div className="flex-row-center justify-between">
        <h2 className="text-lg font-semibold w-fit">
          Заказ номер : {params.id}
        </h2>
        <div className="flex-row-center gap-4">
          {orderStatuses?.map((item) => {
            return (
              <button
                type="submit"
                onClick={() => handleStatusUpdate(item.id)}
                className="button-primary center gap-2 px-4 h-10 w-fit"
                key={item.id}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="bg-white rounded-lg shadow-md flex flex-col px-4 sm:flex-[50%] pb-4 h-fit">
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Имя:</p>
            <p className="font-semibold">{customer.firstName}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Номер телефона:</p>
            <p className="font-semibold">{customer.phoneNumber}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Адрес:</p>
            <p className="font-semibold line-clamp-1">{address}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Сумма:</p>
            <p className="font-semibold">{sum} ман.</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Комментарий:</p>
            <p className="font-semibold line-clamp-1">{comment}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Вид доставки:</p>
            <p className="font-semibold">{deliveryType.title}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Способ оплаты:</p>
            <p className="font-semibold">{paymentType.title}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Статус заказа:</p>
            <p className="font-semibold line-clamp-1">{orderStatus.title}</p>
          </li>
          <li className="border-b flex-row-center justify-between gap-4 h-10">
            <p>Создано:</p>
            <p className="font-semibold">{createdAt}</p>
          </li>
        </div>
        <div className="bg-white rounded-lg shadow-md flex flex-col px-4 sm:flex-[50%] pb-4 h-fit">
          <div className="flex-row-center justify-between font-semibold h-10">
            <h3>Список продуктов</h3>
            <h3>Количество</h3>
          </div>
          {products.map((product, index) => (
            <div key={index} className="flex flex-col gap-2">
              {product.productsList.map((productListItem, index) => (
                <div
                  key={index}
                  className="bg-calm-50 rounded-lg flex-row-center justify-between h-10 w-full"
                >
                  <p>{productListItem.product.title}</p>
                  <p className="font-semibold">{productListItem.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
