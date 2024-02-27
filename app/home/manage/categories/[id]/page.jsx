"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function ViewCategoryPage({ params }) {
  const subCategoryTitleRef = useRef();

  const { data, isLoading, isError } = UseFetcher(
    `http://localhost:5000/manage/category/fetch/${params.id}`
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const createNewSubCategory = async (e) => {
    e.preventDefault();

    const body = {
      title: subCategoryTitleRef.current.value,
      id: params.id,
    };

    const response = await fetch(
      `http://localhost:5000/manage/subcategory/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    try {
      if (response.ok) {
        SuccessToast({ successText: "Подкатегория успешно создано." });
        subCategoryTitleRef.current.value = "";
      } else {
        ErrorToast({ errorText: "Пожалуйста наполните все поля." });
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
      <h2>{data.title}</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
          <h3 className="flex-row-center font-semibold pl-4 h-10">
            Список подкатегорий
          </h3>
          <div className="flex-row-center relative">
            <input
              type="text"
              ref={subCategoryTitleRef}
              className="input-outline pl-4 pr-8 w-full"
              placeholder="Новая под категория"
            ></input>
            <button
              type="submit"
              onClick={createNewSubCategory}
              className="icons-wrapper center absolute right-0"
            >
              <FaRegSquarePlus className="icons" />
            </button>
          </div>
          <ul className="flex flex-col">
            {data.subCategories.length === 0 ? (
              <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm mt-4 px-4 h-10">
                В этой категории нет под категорий.
              </p>
            ) : (
              <>
                {data?.subCategories.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="border-b flex-row-center pl-4 h-10 w-full"
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
          <h3 className="flex-row-center justify-between font-semibold pl-4 h-10">
            Список товаров
          </h3>
          <ul className="flex flex-col">
            {data.products.length === 0 ? (
              <p className="bg-yellow-300 border border-yellow-400 rounded-lg center text-xs md:text-sm px-4 h-10">
                В этой категории нет товаров.
              </p>
            ) : (
              <>
                {data?.products.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="border-b flex-row-center justify-between pl-4 h-10 w-full">
                        <p>{item.title}</p>
                        <p>{item.sellPrice + " ман."}</p>
                      </div>
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
