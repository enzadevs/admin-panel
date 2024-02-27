"use client";

import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function ProductSettingsPage() {
  const newStatusRef = useRef();
  const newUnitTypeRef = useRef();

  const { data: unitTypes } = UseFetcher(
    "http://localhost:5000/manage/unittype/all"
  );

  const {
    data: statuses,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:5000/manage/status/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const createNewStatus = async (e) => {
    e.preventDefault();

    if (!newStatusRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/manage/status/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newStatusRef.current.value }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Статус был успешно создан." });
        newStatusRef.current.value = "";
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

  const createNewUnitType = async (e) => {
    e.preventDefault();

    if (!newUnitTypeRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/manage/unittype/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newUnitTypeRef.current.value }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Статус был успешно создан." });
        newUnitTypeRef.current.value = "";
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
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
        <h3 className="flex-row-center font-semibold pl-4 h-10">
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
          {statuses?.length === 0 ? (
            <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm mt-4 px-4 h-10">
              Статусов нет.
            </p>
          ) : (
            <>
              {statuses?.map((item) => {
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
          {unitTypes?.length === 0 ? (
            <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm mt-4 px-4 h-10">
              Единиц нет.
            </p>
          ) : (
            <>
              {unitTypes?.map((item) => {
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
