import ErrorBlock from "components/Functions/ErrorBlock";
import LoadingBlock from "components/Functions/LoadingBlock";
import { useRef } from "react";
import { UseFetcher } from "utils/UseFetcher";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";

export default function UnitTypeForm() {
  const newUnitTypeRefRu = useRef();
  const newUnitTypeRefTm = useRef();
  const newUnitTypeRefEn = useRef();

  const createNewUnitType = async (e) => {
    e.preventDefault();

    if (
      !newUnitTypeRefRu.current.value ||
      !newUnitTypeRefTm.current.value ||
      !newUnitTypeRefEn.current.value
    ) {
      ErrorToast({ errorText: "Пожалуйста, все заполните поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/manage/unit_types/new/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleRu: newUnitTypeRefRu.current.value,
            titleTm: newUnitTypeRefTm.current.value,
            titleEn: newUnitTypeRefEn.current.value,
          }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Единица измерения создана." });
        newUnitTypeRefRu.current.value = "";
        newUnitTypeRefTm.current.value = "";
        newUnitTypeRefEn.current.value = "";
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
    data: unitTypes,
    isLoading,
    isError,
  } = UseFetcher("http://localhost:3001/manage/unit_types/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col px-2 sm:flex-[50%] pb-4 h-fit">
      <div className="flex-row-center justify-between h-12">
        <h3 className="font-bold">Единицы измерений</h3>
        <button
          onClick={() => document.getElementById("unit_type_modal").showModal()}
          className="button-outline px-2 h-8"
        >
          Добавить
        </button>
      </div>
      <dialog id="unit_type_modal" className="modal">
        <div className="modal-box bg-white rounded-lg flex flex-col p-4">
          <h2>Добавить новую единицу измерения</h2>
          <div className="flex flex-col gap-2">
            <div className="flex-row-center gap-2">
              <label
                htmlFor="unitTypeRu"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Русский:
              </label>
              <input
                name="unitTypeRu"
                type="text"
                ref={newUnitTypeRefRu}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Единица измерения"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="unitTypeTm"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                Türkmençe:
              </label>
              <input
                name="unitTypeTm"
                type="text"
                ref={newUnitTypeRefTm}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Ölçeg birligi"
              ></input>
            </div>
            <div className="flex-row-center gap-2">
              <label
                htmlFor="unitTypeEn"
                className="flex-[30%] max-w-[30%] sm:flex-[20%] sm:max-w-[20%]"
              >
                English:
              </label>
              <input
                name="unitTypeEn"
                type="text"
                ref={newUnitTypeRefEn}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Unit type"
              ></input>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="submit"
                onClick={createNewUnitType}
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
        {unitTypes?.length === 0 ? (
          <p className="bg-yellow-300 rounded-lg center text-xs md:text-sm px-4 h-10">
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
