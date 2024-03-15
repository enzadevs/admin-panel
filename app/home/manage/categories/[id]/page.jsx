"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";

export default function ViewCategoryPage({ params }) {
  const subCategoryTitleRuRef = useRef();
  const subCategoryTitleTmRef = useRef();
  const subCategoryTitleEnRef = useRef();

  const createNewSubCategory = async (e) => {
    e.preventDefault();

    if (!subCategoryTitleRuRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, все заполните хотя бы одно поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/manage/subcategories/new/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleRu: subCategoryTitleRuRef.current.value,
            titleTm: subCategoryTitleTmRef.current.value,
            titleEn: subCategoryTitleEnRef.current.value,
            categoryId: params.id,
          }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Под категория создано." });
        subCategoryTitleRuRef.current.value = "";
        subCategoryTitleTmRef.current.value = "";
        subCategoryTitleEnRef.current.value = "";
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

  const { data, isLoading, isError } = UseFetcher(
    `http://localhost:3001/manage/categories/fetch/${params.id}`
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="flex flex-col gap-4">
      <h2>{data.titleRu}</h2>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
          <div className="flex-row-center justify-between h-12">
            <h3 className="font-bold">Список подкатегорий</h3>
            <button
              onClick={() =>
                document.getElementById("sub_category_modal").showModal()
              }
              className="button-outline px-2 h-8"
            >
              Добавить
            </button>
          </div>
          <dialog id="sub_category_modal" className="modal">
            <div className="modal-box bg-white rounded-lg flex flex-col p-4">
              <h2>Добавить новую под категорию</h2>
              <div className="flex flex-col gap-2">
                <div className="flex-row-center gap-2">
                  <label
                    htmlFor="subCategoryRu"
                    className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
                  >
                    Русский:
                  </label>
                  <input
                    name="subCategoryRu"
                    type="text"
                    ref={subCategoryTitleRuRef}
                    className="input-outline pl-4 pr-8 grow"
                    placeholder="Под категория"
                  ></input>
                </div>
                <div className="flex-row-center gap-2">
                  <label
                    htmlFor="subCategoryTm"
                    className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
                  >
                    Türkmençe:
                  </label>
                  <input
                    name="subCategoryTm"
                    type="text"
                    ref={subCategoryTitleTmRef}
                    className="input-outline pl-4 pr-8 grow"
                    placeholder="Pod kategoriýa"
                  ></input>
                </div>
                <div className="flex-row-center gap-2">
                  <label
                    htmlFor="subCategoryEn"
                    className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
                  >
                    English:
                  </label>
                  <input
                    name="subCategoryEn"
                    type="text"
                    ref={subCategoryTitleEnRef}
                    className="input-outline pl-4 pr-8 grow"
                    placeholder="Sub category"
                  ></input>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    type="submit"
                    onClick={createNewSubCategory}
                    className="button-primary center px-4 h-10 w-full"
                  >
                    Сохранить
                  </button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>X</button>
            </form>
          </dialog>
          <ul className="flex flex-col">
            {data.subCategories.length === 0 ? (
              <p className="bg-yellow-300 rounded-lg center px-4 h-10">
                В этой категории нет под категорий.
              </p>
            ) : (
              <>
                {data?.subCategories.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="custom-list-item border-b flex-row-center line-clamp-1 px-4 h-10 w-full"
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
          <h3 className="flex-row-center justify-between font-semibold h-12">
            Список товаров
          </h3>
          <ul className="flex flex-col">
            {data.products.length === 0 ? (
              <p className="bg-yellow-300 rounded-lg center px-4 h-10">
                В этой категории нет товаров.
              </p>
            ) : (
              <>
                {data?.products.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="custom-list-item border-b flex-row-center justify-between line-clamp-1 px-4 h-10 w-full">
                        <p>{item.titleRu}</p>
                        <p>{item.sellPrice + "М"}</p>
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
