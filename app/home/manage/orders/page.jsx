"use client";

import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function ProductSettingsPage() {
  const newPaymentTypeRef = useRef();
  const newDeliveryTypeRef = useRef();
  const newOrderStatusRef = useRef();

  const { data: paymentTypes } = UseFetcher(
    "http://localhost:5000/manage/payment_type/all"
  );

  const { data: deliveryTypes } = UseFetcher(
    "http://localhost:5000/manage/delivery_type/all"
  );

  const {
    data: orderStatuses,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:5000/manage/order_status/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const createNewPaymentType = async (e) => {
    e.preventDefault();

    if (!newPaymentTypeRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/manage/payment_type/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newPaymentTypeRef.current.value }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Статус был успешно создан." });
        newPaymentTypeRef.current.value = "";
      } else {
        ErrorToast({ errorText: "Пожалуйста, заполните поле." });
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

  const createNewDeliveryType = async (e) => {
    e.preventDefault();

    if (!newDeliveryTypeRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/manage/delivery_type/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newDeliveryTypeRef.current.value }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Способ доставки успешно создан." });
        newDeliveryTypeRef.current.value = "";
      } else {
        ErrorToast({ errorText: "Пожалуйста, заполните поле." });
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

  const createNewOrderStatus = async (e) => {
    e.preventDefault();

    if (!newOrderStatusRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/manage/order_status/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newOrderStatusRef.current.value }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Статус заказа успешно создан." });
        newOrderStatusRef.current.value = "";
      } else {
        ErrorToast({ errorText: "Пожалуйста, заполните поле." });
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
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
        <h3 className="flex-row-center font-semibold pl-4 h-10">
          Способы оплаты
        </h3>
        <div className="flex-row-center relative">
          <input
            type="text"
            ref={newPaymentTypeRef}
            className="input-outline pl-4 pr-8 w-full"
            placeholder="Новый способ оплаты"
          ></input>
          <button
            type="submit"
            onClick={createNewPaymentType}
            className="icons-wrapper center absolute right-0"
          >
            <FaRegSquarePlus className="icons" />
          </button>
        </div>
        <ul className="flex flex-col">
          {paymentTypes?.length === 0 ? (
            <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm mt-4 px-4 h-10">
              Ничего нет.
            </p>
          ) : (
            <>
              {paymentTypes?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="custom-list-item border-b flex-row-center pl-4 h-10 w-full"
                  >
                    {item.title}
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
        <h3 className="flex-row-center font-semibold pl-4 h-10">
          Способы доставки
        </h3>
        <div className="flex-row-center relative">
          <input
            type="text"
            ref={newDeliveryTypeRef}
            className="input-outline pl-4 pr-8 w-full"
            placeholder="Новый способ доставки"
          ></input>
          <button
            type="submit"
            onClick={createNewDeliveryType}
            className="icons-wrapper center absolute right-0"
          >
            <FaRegSquarePlus className="icons" />
          </button>
        </div>
        <ul className="flex flex-col">
          {deliveryTypes?.length === 0 ? (
            <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm mt-4 px-4 h-10">
              Ничего нет.
            </p>
          ) : (
            <>
              {deliveryTypes?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="custom-list-item border-b flex-row-center pl-4 h-10 w-full"
                  >
                    {item.title}
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
        <h3 className="flex-row-center font-semibold pl-4 h-10">
          Статус заказа
        </h3>
        <div className="flex-row-center relative">
          <input
            type="text"
            ref={newOrderStatusRef}
            className="input-outline pl-4 pr-8 w-full"
            placeholder="Новый статус заказа"
          ></input>
          <button
            type="submit"
            onClick={createNewOrderStatus}
            className="icons-wrapper center absolute right-0"
          >
            <FaRegSquarePlus className="icons" />
          </button>
        </div>
        <ul className="flex flex-col">
          {orderStatuses?.length === 0 ? (
            <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm mt-4 px-4 h-10">
              Ничего нет.
            </p>
          ) : (
            <>
              {orderStatuses?.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="custom-list-item border-b flex-row-center pl-4 h-10 w-full"
                  >
                    {item.title}
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
