"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline, IoImageOutline } from "react-icons/io5";

export default function NewBrandPage() {
  const [selectedFile, setSelectedFile] = useState();
  const titleRef = useRef();

  function getFile(e) {
    const file = e.target.files[0];
    setSelectedFile(file || null);
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("brandLogo", selectedFile);
      formData.append("title", titleRef.current.value);
      const response = await fetch("http://localhost:3001/manage/brands/new/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        SuccessToast({ successText: responseData.message });
        setTimeout(() => {
          window.location.href = "/home/manage/brands";
        }, 1250);
      } else {
        const responseData = await response.json();
        ErrorToast({ errorText: responseData.message });
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
        <h2>Новый бренд</h2>
        <button
          type="submit"
          onClick={handleUpload}
          className="button-primary center gap-2 px-4 h-10 w-fit"
        >
          <IoSaveOutline className="icons" />
          Сохранить
        </button>
      </div>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-4">
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]">
          <input
            name="title"
            type="text"
            ref={titleRef}
            placeholder="Имя бренда"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            type="file"
            name="brandLogo"
            onChange={getFile}
            accept="image/*"
            placeholder="Добавить фото"
            className="custom-file-input"
          ></input>
        </div>
        <div className="bg-white shadow-md rounded-lg text-center center flex-col gap-2 p-4 h-40 md:flex-[50%] md:max-w-[50%] w-full">
          <>Рекомендуемый размер изображения 100 x 100</>
          {selectedFile ? (
            <div className="relative block h-20 w-full">
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
            <div className="bg-mercury rounded-lg animate-pulse center h-20 w-20">
              <IoImageOutline className="h-10 w-10" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
