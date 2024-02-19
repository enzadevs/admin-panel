"use client";

import useSWR from "swr";
import { useRef } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UsersPage() {
  const { data: deliveryTypesData } = useSWR(
    "http://localhost:5000/delivery_types",
    fetcher
  );
  const { data: productStatusesData } = useSWR(
    "http://localhost:5000/product_statuses",
    fetcher
  );
  const { data: paymentTypes } = useSWR(
    "http://localhost:5000/payment_types",
    fetcher
  );
  const {
    data: unitTypesData,
    error,
    isLoading,
  } = useSWR("http://localhost:5000/unit_types", fetcher);

  const deliveryTypeRef = useRef();
  const productStatusRef = useRef();
  const unitTypeRef = useRef();
  const paymentTypeRef = useRef();

  const handleDeliveryTypeSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/delivery_types/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: deliveryTypeRef.current.value }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductStatusSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/product_statuses/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: productStatusRef.current.value }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnitTypeSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/unit_types/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: unitTypeRef.current.value }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaymentTypeSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/payment_types/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: paymentTypeRef.current.value }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (error)
    return (
      <div className="border border-red-500 bg-red-100 rounded-lg center h-20 w-full">
        Упс! Вышла ошибка.
      </div>
    );
  if (isLoading)
    return (
      <div className="bg-calm-100 rounded-lg animate-pulse center h-20 w-full">
        Загрузка...
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Настройки продуктов</h2>
      <div className="flex flex-col gap-4">
        <div className="border rounded-[4px] text-base flex flex-col gap-2 sm:flex-row sm:gap-4 p-2 sm:p-4">
          <div className="flex flex-col gap-2 h-auto w-full">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-semibold">Способы доставки :</h2>
              <form name="unit-type" className="relative flex-row-center">
                <input
                  name="title"
                  type="text"
                  ref={deliveryTypeRef}
                  placeholder="Новый способ доставки"
                  className="input-outline px-4 h-10 w-full"
                ></input>
                <button
                  name="unit-type"
                  onClick={handleDeliveryTypeSubmit}
                  type="submit"
                  className="icons-wrapper center absolute right-0"
                >
                  <HiOutlinePlusSm className="icons" />
                </button>
              </form>
              <div className="flex flex-col gap-2 h-auto w-full">
                {deliveryTypesData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="border-b flex-row-center h-10"
                    >
                      <p className="font-bold">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-semibold">Статус продукта :</h2>
              <form name="unit-type" className="relative flex-row-center">
                <input
                  name="title"
                  type="text"
                  ref={productStatusRef}
                  placeholder="Новый статус продукта"
                  className="input-outline px-4 h-10 w-full"
                ></input>
                <button
                  name="unit-type"
                  onClick={handleProductStatusSubmit}
                  type="submit"
                  className="icons-wrapper center absolute right-0"
                >
                  <HiOutlinePlusSm className="icons" />
                </button>
              </form>
              <div className="flex flex-col gap-2 h-auto w-full">
                {productStatusesData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="border-b flex-row-center h-10"
                    >
                      <p className="font-bold">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-semibold">Единицы измерения :</h2>
              <form name="unit-type" className="relative flex-row-center">
                <input
                  name="title"
                  type="text"
                  ref={unitTypeRef}
                  placeholder="Новая ед. измерения"
                  className="input-outline px-4 h-10 w-full"
                ></input>
                <button
                  name="unit-type"
                  onClick={handleUnitTypeSubmit}
                  type="submit"
                  className="icons-wrapper center absolute right-0"
                >
                  <HiOutlinePlusSm className="icons" />
                </button>
              </form>
              <div className="flex flex-col gap-2 h-auto w-full">
                {unitTypesData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="border-b flex-row-center h-10"
                    >
                      <p className="font-bold">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl font-semibold">Способы оплаты :</h2>
              <form name="unit-type" className="relative flex-row-center">
                <input
                  name="title"
                  type="text"
                  ref={paymentTypeRef}
                  placeholder="Новый способ оплаты"
                  className="input-outline px-4 h-10 w-full"
                ></input>
                <button
                  name="unit-type"
                  onClick={handlePaymentTypeSubmit}
                  type="submit"
                  className="icons-wrapper center absolute right-0"
                >
                  <HiOutlinePlusSm className="icons" />
                </button>
              </form>
              <div className="flex flex-col gap-2 h-auto w-full">
                {paymentTypes.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="border-b flex-row-center h-10"
                    >
                      <p className="font-bold">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
