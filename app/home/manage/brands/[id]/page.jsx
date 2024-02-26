"use client";

import Image from "next/image";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import { UseFetcher } from "utils/UseFetcher";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline } from "react-icons/io5";

export default function UpdateBrandPage({ params }) {
  const [selectedFile, setSelectedFile] = useState();
  const titleRef = useRef();
  const router = useRouter();

  const { data, isLoading, isError } = UseFetcher(
    `http://localhost:5000/manage/brands/fetch/${params.id}`
  );

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (isError) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  function getFile(e) {
    const file = e.target.files[0];
    setSelectedFile(file || null);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("brandLogo", selectedFile);
      formData.append("title", titleRef.current.value);
      const response = await fetch(
        `http://localhost:5000/manage/brands/update/${params.id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Бренд был успешно обновлен." });
        setTimeout(() => {
          router.push("/home/manage/brands");
        }, 1250);
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
    <form className="flex flex-col gap-4">
      <div className="flex-row-center justify-between">
        <h2 className="text-lg font-semibold w-fit">Обновить рекламу</h2>
        <button
          type="submit"
          onClick={handleUpdate}
          href="/home/manage/brands"
          className="button-primary center gap-2 px-4 h-10 w-fit"
        >
          <>Обновить</>
          <IoSaveOutline className="icons" />
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-4">
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]">
          <input
            id="title"
            type="text"
            ref={titleRef}
            placeholder={data ? data.title : ""}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            type="file"
            name="brandLogo"
            onChange={getFile}
            placeholder="Добавить фото"
            className="custom-file-input"
          ></input>
        </div>
        <div className="bg-white shadow-md rounded-lg text-center center flex-col gap-2 h-72 md:flex-[50%] md:max-w-[50%] w-full">
          <>Рекомендуемый размер изображения 100 x 100</>
          {selectedFile ? (
            <div className="relative block h-52 w-full">
              {selectedFile && selectedFile instanceof File && (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="image"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                  fill
                />
              )}
            </div>
          ) : (
            <div className="center relative h-52 w-72">
              <Image
                src={"http://localhost:5000/images/" + data.logo}
                alt="image of brand"
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
                fill
              />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
