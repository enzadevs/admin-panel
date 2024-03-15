import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";

export default function DeliveryTypesForm() {
  const newDeliveryTypeRefRu = useRef();
  const newDeliveryTypeRefTm = useRef();
  const newDeliveryTypeRefEn = useRef();
  const priceRef = useRef();

  const createNewDeliveryType = async (e) => {
    e.preventDefault();

    if (!newDeliveryTypeRefRu.current.value || !priceRef.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните все поля." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/manage/delivery_types/new/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleRu: newDeliveryTypeRefRu.current.value,
            titleTm: newDeliveryTypeRefTm.current.value,
            titleEn: newDeliveryTypeRefEn.current.value,
            price: priceRef.current.value,
          }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Способ доставки создан." });
        newDeliveryTypeRefRu.current.value = "";
        newDeliveryTypeRefTm.current.value = "";
        newDeliveryTypeRefEn.current.value = "";
        priceRef.current.value = "";
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
    data: deliveryTypes,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:3001/manage/delivery_types/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
      <div className="flex-row-center justify-between h-12">
        <h3 className="font-bold">Способы доставки</h3>
        <button
          onClick={() =>
            document.getElementById("delivery_types_modal").showModal()
          }
          className="button-outline px-2 h-8"
        >
          Добавить
        </button>
      </div>
      <dialog id="delivery_types_modal" className="modal">
        <div className="modal-box bg-white rounded-lg flex flex-col p-4">
          <h2>Добавить способ доставки</h2>
          <div className="flex flex-col gap-2">
            <div className="flex-row-center gap-2">
              <label
                htmlFor="deliveryTypeRu"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Русский:
              </label>
              <input
                name="deliveryTypeRu"
                type="text"
                ref={newDeliveryTypeRefRu}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Способ доставки"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="deliveryTypeTm"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Türkmençe:
              </label>
              <input
                name="deliveryTypeTm"
                type="text"
                ref={newDeliveryTypeRefTm}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Dostawka görnüşi"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="deliveryTypeEn"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                English:
              </label>
              <input
                name="deliveryTypeEn"
                type="text"
                ref={newDeliveryTypeRefEn}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Delivery type"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="price"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Цена :
              </label>
              <input
                name="price"
                type="number"
                ref={priceRef}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Цена доставки"
              ></input>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="submit"
                onClick={createNewDeliveryType}
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
        {deliveryTypes?.length === 0 ? (
          <p className="bg-yellow-300 rounded-lg center px-4 h-10">
            Ничего нет.
          </p>
        ) : (
          <>
            {deliveryTypes?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="custom-list-item border-b flex-row-center px-4 h-10 w-full"
                >
                  {item.titleRu} / {item.titleTm} / {item.titleEn}
                  <p className="font-bold ml-auto">{item.price} М</p>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
}
