"use client";

import useSWR from "swr";
import toast from "react-simple-toasts";
import { useRef } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";

const fetcher = (url) => fetch(url).then((res) => res.json());

function SuccessToast() {
  toast("Добавлено.", {
    className:
      "bg-green-700 rounded-lg shadow-sm text-white text-center text-sm sm:text-base px-8 h-10 z-10",
    duration: 1750,
  });
}

function ErrorToast() {
  toast("Пожалуйста повторите попытку.", {
    className:
      "bg-red-300 rounded-lg shadow-sm text-center text-sm sm:text-base px-8 h-10 z-10",
    duration: 1750,
  });
}

export default function ProductSettingsPage() {
  const newStatusRef = useRef();
  const newUnitTypeRef = useRef();

  const createNewStatus = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/manage/status/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newStatusRef.current.value }),
      });

      if (res.ok) {
        SuccessToast();
        newStatusRef.current.value = "";
      }
    } catch (error) {
      ErrorToast();
      console.error(error);
    }
  };

  const createNewUnitType = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/manage/unittype/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newUnitTypeRef.current.value }),
      });

      if (res.ok) {
        SuccessToast();
        newUnitTypeRef.current.value = "";
      }
    } catch (error) {
      ErrorToast();
      console.error(error);
    }
  };

  const { data: statuses } = useSWR(
    "http://localhost:5000/manage/status/all",
    fetcher,
    { refreshInterval: 1500 }
  );

  const {
    data: unitTypes,
    error,
    isLoading,
  } = useSWR("http://localhost:5000/manage/unittype/all", fetcher, {
    refreshInterval: 1500,
  });

  if (isLoading)
    return (
      <div className="bg-calm-50 animate-pulse rounded-lg center h-20 w-full">
        Загрузка...
      </div>
    );

  if (error)
    return (
      <div className="bg-red-200 border border-red-500 rounded-lg text-red-500 center h-20 w-full">
        Упс! Вышла ошибка.
      </div>
    );

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="flex flex-col gap-4 sm:flex-[50%]">
        <h3 className="bg-calm-50 rounded-lg flex-row-center font-bold pl-4 h-10 w-full">
          Статусы продуктов
        </h3>
        <div className="flex-row-center relative">
          <input
            type="text"
            ref={newStatusRef}
            className="input-outline pl-4 pr-8 w-full"
            placeholder="Добавить новый статус продуктов"
          ></input>
          <button
            type="submit"
            onClick={createNewStatus}
            className="icons-wrapper center absolute right-0"
          >
            <FaRegSquarePlus className="icons" />
          </button>
        </div>
        <ul className="flex flex-col">
          {statuses.map((item) => {
            return (
              <li
                key={item.id}
                className="border-b flex-row-center pl-4 h-10 w-full"
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-4 sm:flex-[50%]">
        <h3 className="bg-calm-50 rounded-lg flex-row-center font-bold pl-4 h-10 w-full">
          Единицы измерений
        </h3>
        <div className="flex-row-center relative">
          <input
            type="text"
            ref={newUnitTypeRef}
            className="input-outline pl-4 pr-8 w-full"
            placeholder="Добавить новую единицу измерения"
          ></input>
          <button
            type="submit"
            onClick={createNewUnitType}
            className="icons-wrapper center absolute right-0"
          >
            <FaRegSquarePlus className="icons" />
          </button>
        </div>
        <ul className="flex flex-col">
          {unitTypes.map((item) => {
            return (
              <li
                key={item.id}
                className="border-b flex-row-center pl-4 h-10 w-full"
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
