"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline, IoImageOutline } from "react-icons/io5";

export default function NewNotificationPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [acceptsOrders, setAcceptsOrders] = useState(true);
  const textRef = useRef();

  function getFile(e) {
    const file = e.target.files[0];
    setSelectedFile(file || null);
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("text", textRef.current.value);
      formData.append("boolean", acceptsOrders);
      const response = await fetch("http://localhost:3001/banner/new/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        SuccessToast({ successText: responseData.message });
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
        <h2>Новое объявление</h2>
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
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] h-fit md:max-w-[50%]">
          <input
            name="title"
            type="text"
            ref={textRef}
            placeholder="Текст"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <div className="bg-white border rounded-lg shadow-sm flex-row-center gap-4 px-4 h-10">
            <p>Заказы принимаются:</p>
            <div className="flex flex-row gap-4 ml-auto">
              <label>
                <input
                  type="radio"
                  name="acceptsOrders"
                  value={true}
                  checked={acceptsOrders === true}
                  onChange={() => setAcceptsOrders(true)}
                />
                Да
              </label>
              <label>
                <input
                  type="radio"
                  name="acceptsOrders"
                  value={false}
                  checked={acceptsOrders === false}
                  onChange={() => setAcceptsOrders(false)}
                />
                Нет
              </label>
            </div>
          </div>
          <input
            type="file"
            name="image"
            onChange={getFile}
            accept="image/*"
            placeholder="Добавить фото"
            className="custom-file-input"
          ></input>
        </div>
        <div className="bg-white shadow-md rounded-lg text-center center flex-col gap-2 p-4 h-72 md:flex-[50%] md:max-w-[50%] w-full">
          <>Рекомендуемый размер изображения 500 x 500</>
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
            <div className="bg-mercury rounded-lg animate-pulse center h-40 w-40">
              <IoImageOutline className="h-20 w-20" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
