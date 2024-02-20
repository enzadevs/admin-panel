"use client";

import useSWR from "swr";
import Image from "next/image";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { IoSaveOutline } from "react-icons/io5";

const fetchAdData = async (id) => {
  const response = await fetch(`http://localhost:5000/ads/fetch/${id}`);
  const data = await response.json();
  return data;
};

function SuccessToast() {
  toast("Реклама была успешно обновлена.", {
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

export default function ChangeBrandPage({ params }) {
  const [selectedFile, setSelectedFile] = useState();
  const descriptionRef = useRef();
  const incomeRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const router = useRouter();

  const {
    data: adData,
    error,
    isLoading,
  } = useSWR(params.id ? [params.id] : null, fetchAdData);

  function getFile(e) {
    const file = e.target.files[0];
    setSelectedFile(file || null);
  }

  const handleUpdate = async (e) => {
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

      const response = await fetch(
        `http://localhost:5000/ads/update/${params.id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        SuccessToast();
        setTimeout(() => {
          router.push("/home/ads");
        }, 2000);
      }
    } catch (error) {
      ErrorToast();
      console.error(error);
    }
  };

  if (error) {
    return (
      <div className="border border-red-500 bg-red-100 rounded-lg center h-20 w-full">
        Упс! Вышла ошибка.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-calm-100 rounded-lg animate-pulse center h-20 w-full">
        Загрузка...
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" encType="multipart/div-data">
      <h2 className="font-bold">Обновить рекламу</h2>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-4">
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]">
          <input
            name="description"
            type="text"
            ref={descriptionRef}
            placeholder={adData ? adData.description : ""}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="income"
            type="number"
            ref={incomeRef}
            placeholder={adData ? adData.incomeValue + " ман." : ""}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <span className="flex-row-center gap-2">
            <p className="w-20">Начало</p>
            <input
              name="start_date"
              type="date"
              ref={startDateRef}
              placeholder="Начало"
              className="input-outline px-4 h-full w-full"
            ></input>
          </span>
          <span className="flex-row-center gap-2">
            <p className="w-20">Конец</p>
            <input
              name="end_date"
              type="date"
              ref={endDateRef}
              placeholder="Конец"
              className="input-outline px-4 h-full w-full"
            ></input>
          </span>
          <input
            type="file"
            name="posterImage"
            onChange={getFile}
            accept="image/*"
            placeholder="Добавить фото"
            className="bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full"
          ></input>
        </div>
        <div className="border rounded-lg text-center center flex-col p-2 md:flex-[50%] md:max-w-[50%] w-full">
          <p>Рекомендуемый размер изображения 1360 x 360</p>
          <div
            className={
              selectedFile
                ? "relative block min-h-[360px] md:max-h-[500px] w-full"
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
        onClick={handleUpdate}
        className="button-primary button-hover center gap-2 px-4 h-10 w-full"
      >
        <>Обновить</>
        <IoSaveOutline className="icons" />
      </button>
    </form>
  );
}
