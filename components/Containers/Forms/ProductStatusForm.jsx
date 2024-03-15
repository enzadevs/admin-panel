import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";

export default function ProductStatusForm() {
  const newProductStatusRefRu = useRef();
  const newProductStatusRefTm = useRef();
  const newProductStatusRefEn = useRef();

  const createNewProductStatus = async (e) => {
    e.preventDefault();

    if (!newProductStatusRefRu.current.value) {
      ErrorToast({ errorText: "Пожалуйста, все заполните хотя бы одно поле." });
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

  const {
    data: statuses,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:3001/manage/status/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
      <div className="flex-row-center justify-between h-12">
        <h3 className="font-bold">Статусы продуктов</h3>
        <button
          onClick={() =>
            document.getElementById("product_status_modal").showModal()
          }
          className="button-outline px-2 h-8"
        >
          Добавить
        </button>
      </div>
      <dialog id="product_status_modal" className="modal">
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
                htmlFor="productStatusEn"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                English:
              </label>
              <input
                name="productStatusEn"
                type="text"
                ref={newProductStatusRefEn}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Status of product"
              ></input>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="submit"
                onClick={createNewProductStatus}
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
        {statuses?.length === 0 ? (
          <p className="bg-yellow-300 rounded-lg center text-xs md:text-sm px-4 h-10">
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
  );
}
