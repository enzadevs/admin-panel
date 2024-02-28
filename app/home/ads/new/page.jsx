"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline, IoImageOutline } from "react-icons/io5";

export default function NewAdPage() {
  const [selectedFile, setSelectedFile] = useState();
  const descriptionRef = useRef();
  const incomeRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  function getFile(e) {
    const file = e.target.files[0];
    setSelectedFile(file || null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("posterImage", selectedFile);
      formData.append("description", descriptionRef.current.value);
      formData.append("incomeValue", incomeRef.current.value);
      formData.append(
        "startDate",
        new Date(startDateRef.current.value).toISOString().slice(0, 10)
      );
      formData.append(
        "endDate",
        new Date(endDateRef.current.value).toISOString().slice(0, 10)
      );
      const response = await fetch("http://localhost:5000/ads/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        SuccessToast({ successText: "Реклама была успешно создано." });
        setTimeout(() => {
          window.location.href = "/home/ads";
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
    <form className="flex flex-col gap-4" encType="multipart/div-data">
      <div className="flex-row-center justify-between">
        <h2 className="text-lg font-semibold w-fit">Новая реклама</h2>
        <button
          type="submit"
          onClick={handleSubmit}
          className="button-primary center gap-2 px-4 h-10 w-fit"
        >
          <IoSaveOutline className="icons" />
          Сохранить
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md flex flex-col gap-2 md:flex-row md:gap-4 p-4">
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]">
          <input
            name="description"
            type="text"
            ref={descriptionRef}
            placeholder="Описание"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="income"
            type="number"
            ref={incomeRef}
            placeholder="Прибыль (только цифры)"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <div className="flex-row-center gap-2">
            <p className="w-20">Начало</p>
            <input
              name="startDate"
              type="date"
              ref={startDateRef}
              placeholder="Начало"
              className="input-outline px-4 h-full w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <p className="w-20">Конец</p>
            <input
              name="endDate"
              type="date"
              ref={endDateRef}
              placeholder="Конец"
              className="input-outline px-4 h-full w-full"
            ></input>
          </div>
          <input
            type="file"
            name="posterImage"
            onChange={getFile}
            accept="image/*"
            placeholder="Добавить фото"
            className="custom-file-input"
          ></input>
        </div>
        <div className="bg-calm-50 shadow-md rounded-lg text-center center flex-col gap-2 p-4 h-72 md:flex-[50%] md:max-w-[50%] w-full">
          <>Рекомендуемый размер изображения 1360 x 360</>
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
            <div className="center h-52 w-72">
              <IoImageOutline className="animate-pulse h-48 w-48" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
