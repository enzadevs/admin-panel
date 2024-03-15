import { useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { AiOutlinePlus } from "react-icons/ai";

export default function NewCategoryForm() {
  const newCategoryRefRu = useRef();
  const newCategoryRefTm = useRef();
  const newCategoryRefEn = useRef();

  const createNewCategory = async (e) => {
    e.preventDefault();

    if (!newCategoryRefRu.current.value) {
      ErrorToast({ errorText: "Пожалуйста, заполните хотя бы одно поле." });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/manage/categories/new/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titleRu: newCategoryRefRu.current.value,
            titleTm: newCategoryRefTm.current.value,
            titleEn: newCategoryRefEn.current.value,
          }),
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Категория создана." });
        newCategoryRefRu.current.value = "";
        newCategoryRefTm.current.value = "";
        newCategoryRefEn.current.value = "";
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
    <>
      <div className="flex-row-center items-center justify-between ">
        <h2>Управление категориями</h2>
        <button
          type="submit"
          onClick={() => document.getElementById("category_modal").showModal()}
          className="button-primary flex-row-center justify-center gap-2 px-4 h-10   w-fit"
        >
          <AiOutlinePlus className="icons" />
          Добавить
        </button>
      </div>
      <dialog id="category_modal" className="modal">
        <div className="modal-box bg-white rounded-lg flex flex-col p-4">
          <h2>Добавить новую категорию</h2>
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
                ref={newCategoryRefRu}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Категория"
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
                ref={newCategoryRefTm}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Kategoriýanyň ady"
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
                ref={newCategoryRefEn}
                className="input-outline pl-4 pr-8 grow"
                placeholder="Category name"
              ></input>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                type="submit"
                onClick={createNewCategory}
                className="button-primary center px-4 h-10"
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
    </>
  );
}
