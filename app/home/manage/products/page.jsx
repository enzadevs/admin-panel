"use client";

import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function ProductSettingsPage() {
  const newProductStatusRefRu = useRef();
  const newProductStatusRefTm = useRef();
  const newProductStatusRefEn = useRef();
  const newUnitTypeRef = useRef();

  const { data: unitTypes } = UseFetcher(
    "http://localhost:3001/manage/unit_types/all"
  );

  const {
    data: statuses,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:3001/manage/status/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const createNewStatus = async (e) => {
    e.preventDefault();

    if (
      !newProductStatusRefRu.current.value ||
      !newProductStatusRefTm.current.value ||
      !newProductStatusRefEn.current.value
    ) {
      ErrorToast({ errorText: "Пожалуйста, все заполните поле." });
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/manage/status/new/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titleRu: newProductStatusRefRu.current.value,
          titleTm: newProductStatusRefTm.current.value,
          titleEn: newProductStatusRefEn.current.value,
        }),
      });

      if (response.ok) {
        SuccessToast({ successText: "Статус был успешно создан." });
        newProductStatusRefRu.current.value = "";
        newProductStatusRefTm.current.value = "";
        newProductStatusRefEn.current.value = "";
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

    const statusValue = newProductStatusRefRu.current.value.trim();

    if (!statusValue) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/manage/status/new/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: statusValue }),
      });

      if (response.ok) {
        SuccessToast({ successText: "Статус был успешно создан." });
        newProductStatusRefRu.current.value = "";
      } else {
        const errorText = await response.text();
        ErrorToast({ errorText: errorText || "Ошибка сервера." });
      }
    } catch (error) {
      ErrorToast({
        errorText: "Ошибка сети: Пожалуйста, проверьте подключение.",
      });
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
        <div className="flex-row-center justify-between h-12">
          <h3 className="font-bold">Статусы продуктов</h3>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="button-outline px-2 h-8"
          >
            Добавить
          </button>
        </div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-white rounded-lg flex flex-col p-4">
            <h2>Добавить новый статус</h2>
            <div className="flex flex-col gap-2">
              <div className="flex-row-center gap-2">
                <label
                  htmlFor="productStatusRu"
                  className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
                >
                  Русский:
                </label>
                <input
                  name="productStatusRu"
                  type="text"
                  ref={newProductStatusRefRu}
                  className="input-outline pl-4 pr-8 grow"
                  placeholder="Статус товара"
                ></input>
              </div>
              <div className="flex-row-center gap-2">
                <label
                  htmlFor="productStatusTm"
                  className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
                >
                  Türkmençe:
                </label>
                <input
                  name="productStatusTm"
                  type="text"
                  ref={newProductStatusRefTm}
                  className="input-outline pl-4 pr-8 grow"
                  placeholder="Harydyň ýagdaýy"
                ></input>
              </div>
              <div className="flex-row-center gap-2">
                <label
                  htmlFor="productStatusTm"
                  className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
                >
                  English:
                </label>
                <input
                  name="productStatusTm"
                  type="text"
                  ref={newProductStatusRefEn}
                  className="input-outline pl-4 pr-8 grow"
                  placeholder="Status of product"
                ></input>
              </div>
              <button
                type="submit"
                onClick={createNewStatus}
                className="button-primary center h-10"
              >
                Сохранить
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>

        <ul className="flex flex-col">
          {statuses?.length === 0 ? (
            <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm px-4 h-10">
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
                    {item.titleRu} / {item.titleTm} / {item.titleEn}
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
