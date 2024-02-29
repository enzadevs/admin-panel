"use client";

import useSWR from "swr";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { CategoriesTable } from "components/Containers/Tables/CategoriesTable";
import { FaRegSquarePlus } from "react-icons/fa6";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CategoriesPage() {
  const newCategoryRef = useRef();

  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/manage/category/all",
    fetcher,
    {
      refreshInterval: 1750,
    }
  );
  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  const createNewCategory = async (e) => {
    e.preventDefault();

    if (!newCategoryRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/manage/category/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: newCategoryRef.current.value }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Категория создана." });
        newCategoryRef.current.value = "";
        window.location.href = "home/manage/categories";
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
    <div className="flex flex-col gap-4">
      <h2>Управление категориями</h2>
      <div className="flex-row-center relative">
        <input
          type="text"
          ref={newCategoryRef}
          className="input-outline pl-4 pr-8 w-full"
          placeholder="Добавить новую категорию"
        ></input>
        <button
          type="submit"
          onClick={createNewCategory}
          className="icons-wrapper center absolute right-0"
        >
          <FaRegSquarePlus className="icons" />
        </button>
      </div>
      <CategoriesTable rows={data} />
    </div>
  );
}
