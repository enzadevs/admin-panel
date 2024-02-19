"use client";

import useSWR from "swr";
import Image from "next/image";
import { useState, useRef } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Selector from "utils/Selector";
import ProductsSwiper from "components/Containers/SelectedImagesSwiper";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function NewProductPage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [brandSelection, setBrandSelection] = useState(undefined);
  const [categorySelection, setCategorySelection] = useState(undefined);
  const [countrySelection, setCountrySelection] = useState(undefined);
  const [productStatus, setProductStatus] = useState(undefined);
  const [unitTypeSelection, setUnitTypeSelection] = useState(undefined);
  const titleRef = useRef();
  const costPriceRef = useRef();
  const sellPriceRef = useRef();
  const descriptionRef = useRef();
  const barcodeRef = useRef();
  const stockRef = useRef();
  const router = useRouter();

  const handleBrandSelection = (selectedOption) => {
    setBrandSelection(selectedOption ? selectedOption.id : null);
  };

  const handleCategorySelection = (selectedOption) => {
    setCategorySelection(selectedOption ? selectedOption.id : null);
  };

  const handleCountrySelection = (selectedOption) => {
    setCountrySelection(selectedOption ? selectedOption.id : null);
  };

  const handleStatusSelection = (selectedOption) => {
    setProductStatus(selectedOption ? selectedOption.id : null);
  };

  const handleUnitTypeSelection = (selectedOption) => {
    setUnitTypeSelection(selectedOption ? selectedOption.id : null);
  };

  function getFile(e) {
    const files = e.target.files;
    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", titleRef.current.value);
      formData.append("cost_price", costPriceRef.current.value);
      formData.append("sell_price", sellPriceRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("barcode", barcodeRef.current.value);
      formData.append("stock", stockRef.current.value);
      formData.append("brandId", brandSelection);
      formData.append("product_status_id", productStatus);
      formData.append("countryId", countrySelection);
      formData.append("categoryId", categorySelection);
      formData.append("unit_type_id", unitTypeSelection);
      selectedFiles.forEach((file) => {
        formData.append("images_array", file);
      });

      await fetch("http://localhost:5000/products/create", {
        method: "POST",
        body: formData,
      });
      setTimeout(() => {
        router.push("/home/products");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const { data: brands } = useSWR("http://localhost:5000/brands", fetcher);
  const { data: categories } = useSWR(
    "http://localhost:5000/categories",
    fetcher
  );
  const { data: countries } = useSWR(
    "http://localhost:5000/countries",
    fetcher
  );
  const { data: product_statuses } = useSWR(
    "http://localhost:5000/product_statuses",
    fetcher
  );
  const {
    data: unit_types,
    isLoading,
    error,
  } = useSWR("http://localhost:5000/unit_types", fetcher);

  if (error)
    return (
      <div className="border border-red-500 bg-red-100 rounded-lg center h-20 w-full">
        Упс! Вышла ошибка.
      </div>
    );
  if (isLoading)
    return (
      <div className="bg-calm-100 rounded-lg animate-pulse center h-20 w-full">
        Загрузка...
      </div>
    );

  return (
    <form className="flex flex-col gap-4" encType="multipart/form-data">
      <h2 className="font-bold">Добавить новый продукт</h2>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-4">
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]">
          <input
            name="title"
            type="text"
            ref={titleRef}
            placeholder="Имя продукта"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <Selector
            selectData={brands}
            className="h-10"
            placeholder="Бренд"
            onSelect={handleBrandSelection}
          />
          <Selector
            selectData={categories}
            className="h-10"
            placeholder="Категория"
            onSelect={handleCategorySelection}
          />
          <Selector
            selectData={countries}
            className="h-10"
            placeholder="Страна производитель"
            onSelect={handleCountrySelection}
          />
          <Selector
            selectData={product_statuses}
            className="h-10"
            placeholder="Статус продукта"
            onSelect={handleStatusSelection}
          />
          <Selector
            selectData={unit_types}
            className="h-10"
            placeholder="Ед. измерения"
            onSelect={handleUnitTypeSelection}
          />
          <input
            name="costPrice"
            type="number"
            ref={costPriceRef}
            placeholder="Цена (приход)"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="sellPrice"
            type="number"
            ref={sellPriceRef}
            placeholder="Цена (продажа)"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="barcode"
            type="number"
            ref={barcodeRef}
            placeholder="Баркод"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="description"
            type="text"
            ref={descriptionRef}
            placeholder="Описание"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="stock"
            type="number"
            ref={stockRef}
            placeholder="Количество"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            type="file"
            name="images_array"
            onChange={getFile}
            multiple
            accept="image/*"
            placeholder="Добавить фото"
            className="bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full"
          ></input>
        </div>
        <div className="border rounded-lg text-center center flex-col gap-4 p-2 md:flex-[50%] md:max-w-[50%] w-full">
          <p>Рекомендуемый размер изображения 1000 x 1000</p>
          <div
            className={
              selectedFiles.length > 0
                ? "relative block min-h-[360px] md:max-h-[500px] w-full"
                : "hidden relative h-72"
            }
          >
            <ProductsSwiper images={selectedFiles} />
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="button-primary button-hover center gap-2 px-4 h-10 w-full"
      >
        <>Сохранить</>
        <IoSaveOutline className="icons" />
      </button>
    </form>
  );
}
