"use client";

import Image from "next/image";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { IoSaveOutline } from "react-icons/io5";

function SuccessToast() {
  toast("Бренд была успешно создан.", {
    className:
      "bg-green-700 rounded-lg shadow-sm text-white text-center text-sm sm:text-base px-8 h-10 z-10",
    duration: 1750,
  });
}

function ErrorToast() {
  toast("Пожалуйста повторите попытку.", {
    className:
      "bg-red-100 rounded-lg shadow-sm text-center text-sm sm:text-base px-8 h-10 z-10",
    duration: 1750,
  });
}

export default function NewBrandPage() {
  const [selectedFile, setSelectedFile] = useState();
  const titleRef = useRef();
  const router = useRouter();

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
      const response = await fetch(
        "http://localhost:5000/manage/brands/create",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        SuccessToast();
        setTimeout(() => {
          router.push("/home/manage/brands");
        }, 2000);
      }
    } catch (error) {
      ErrorToast();
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Новый бренд</h1>
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
            className="bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full"
          ></input>
        </div>
        <div className="border rounded-lg text-center center flex-col p-2 md:flex-[50%] md:max-w-[50%] w-full">
          <p>Рекомендуемый размер изображения 200 x 200</p>
          <div
            className={
              selectedFile
                ? "relative block h-[200px] md:h-[500px] w-full"
                : "hidden relative h-72"
            }
          >
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
        </div>
      </div>
      <button
        type="submit"
        onClick={handleUpload}
        href="/home/ads/new"
        className="button-primary button-hover center gap-2 px-4 h-10 w-full"
      >
        <>Сохранить</>
        <IoSaveOutline className="icons" />
      </button>
    </form>
  );
}
