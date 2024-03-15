import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";

export default function OrderStatusesForm() {
  const newOrderStatusRu = useRef();
  const newOrderStatusTm = useRef();
  const newOrderStatusEn = useRef();

  const createNewOrderStatus = async (e) => {
    e.preventDefault();

    if (!newOrderStatusRu.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните хотя бы одно поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/manage/order_statuses/new/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleRu: newOrderStatusRu.current.value,
            titleTm: newOrderStatusTm.current.value,
            titleEn: newOrderStatusEn.current.value,
          }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Статус успешно создан." });
        newOrderStatusRu.current.value = "";
        newOrderStatusTm.current.value = "";
        newOrderStatusEn.current.value = "";
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
    data: orderStatuses,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:3001/manage/order_statuses/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
      <div className="flex-row-center justify-between h-12">
        <h3 className="font-bold">Статусы заказов</h3>
        <button
          onClick={() =>
            document.getElementById("order_status_modal").showModal()
          }
          className="button-outline px-2 h-8"
        >
          Добавить
        </button>
      </div>
      <dialog id="order_status_modal" className="modal">
        <div className="modal-box bg-white rounded-lg flex flex-col p-4">
          <h2>Добавить статус заказа</h2>
          <div className="flex flex-col gap-2">
            <div className="flex-row-center gap-2">
              <label
                htmlFor="orderStatusRu"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Русский:
              </label>
              <input
                name="orderStatusRu"
                type="text"
                ref={newOrderStatusRu}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Статус заказа"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="orderStatusTm"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Türkmençe:
              </label>
              <input
                name="orderStatusTm"
                type="text"
                ref={newOrderStatusTm}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Zakazyň ýagdaýy"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="orderStatusEn"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                English:
              </label>
              <input
                name="orderStatusEn"
                type="text"
                ref={newOrderStatusEn}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Status of order"
              ></input>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="submit"
                onClick={createNewOrderStatus}
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
        {orderStatuses?.length === 0 ? (
          <p className="bg-yellow-300  rounded-lg center text-xs md:text-sm px-4 h-10">
            Ничего нет.
          </p>
        ) : (
          <>
            {orderStatuses?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="custom-list-item border-b flex-row-center px-4 h-10 w-full"
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
