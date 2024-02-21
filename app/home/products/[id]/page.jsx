"use client";

import useSWR from "swr";
import toast from "react-simple-toasts";
import Selector from "utils/Selector";
import ProductsSwiper from "components/Containers/SelectedImagesSwiper";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { IoSaveOutline } from "react-icons/io5";

const fetcher = (url) => fetch(url).then((res) => res.json());

const fetchAdData = async (id) => {
  const response = await fetch(`http://localhost:5000/products/fetch/${id}`);
  const data = await response.json();
  return data;
};

function SuccessToast() {
  toast("Продукт был успешно обновлен.", {
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

export default function ProductViewPage({ params }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [brandSelection, setBrandSelection] = useState(undefined);
  const [categorySelection, setCategorySelection] = useState(undefined);
  const [subCategorySelection, setSubCategorySelection] = useState(undefined);
  const [productStatus, setProductStatus] = useState(undefined);
  const [unitTypeSelection, setUnitTypeSelection] = useState(undefined);
  const titleRef = useRef();
  const barcodeRef = useRef();
  const arrivalPriceRef = useRef();
  const sellPriceRef = useRef();
  const descriptionRef = useRef();
  const stockRef = useRef();
  const router = useRouter();

  const handleBrandSelection = (selectedOption) => {
    setBrandSelection(selectedOption ? selectedOption.id : null);
  };

  const handleCategorySelection = (selectedOption) => {
    setCategorySelection(selectedOption ? selectedOption.id : null);
  };

  const handleSubCategorySelection = (selectedOption) => {
    setSubCategorySelection(selectedOption ? selectedOption.id : null);
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
      formData.append("barcode", barcodeRef.current.value);
      formData.append("title", titleRef.current.value);
      formData.append("brandId", brandSelection);
      formData.append("unitTypeId", unitTypeSelection);
      formData.append("arrivalPrice", arrivalPriceRef.current.value);
      formData.append("sellPrice", sellPriceRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("stock", stockRef.current.value);
      formData.append("categoryId", categorySelection);
      formData.append("subCategoryId", subCategorySelection);
      formData.append("statusId", productStatus);
      selectedFiles.forEach((file) => {
        formData.append("productImages", file);
      });

      const response = await fetch(
        `http://localhost:5000/products/update/${params.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        SuccessToast();
        setTimeout(() => {
          router.push("/home/products");
        }, 2000);
      }
    } catch (error) {
      ErrorToast();
    }
  };

  const { data: unitTypes } = useSWR(
    "http://localhost:5000/manage/unittype/all",
    fetcher
  );
  const { data: categories } = useSWR(
    "http://localhost:5000/manage/category/all",
    fetcher
  );
  const { data: subCategories } = useSWR(
    "http://localhost:5000/manage/subcategory/all",
    fetcher
  );
  const { data: productStatuses } = useSWR(
    "http://localhost:5000/manage/status/all",
    fetcher
  );
  const { data: brands } = useSWR(
    "http://localhost:5000/manage/brands/all",
    fetcher
  );

  const {
    data: productData,
    error,
    isLoading,
  } = useSWR(params.id ? [params.id] : null, fetchAdData);

  if (isLoading)
    return (
      <div className="bg-calm-50 animate-pulse rounded-lg center h-20 w-full">
        Загрузка...
      </div>
    );

  if (error)
    return (
      <div className="bg-red-200 border border-red-500 rounded-lg text-red-500 center h-20 w-full">
        Упс! Вышла ошибка.
      </div>
    );
  return (
    <form className="flex flex-col gap-4" encType="multipart/form-data">
      <h2 className="font-bold">Обновить продукт</h2>
      <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-4">
        <div className="flex flex-col gap-4 justify-between md:flex-[50%] md:max-w-[50%]">
          <input
            name="barcode"
            type="number"
            ref={barcodeRef}
            placeholder={productData.barcode}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="title"
            type="text"
            ref={titleRef}
            placeholder={productData.title}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <Selector
            selectData={brands}
            className="h-10"
            placeholder={productData.brand.title}
            onSelect={handleBrandSelection}
          />
          <Selector
            selectData={unitTypes}
            className="h-10"
            placeholder={productData.unitType.title}
            onSelect={handleUnitTypeSelection}
          />
          <input
            name="costPrice"
            type="number"
            ref={arrivalPriceRef}
            placeholder={productData.arrivalPrice + " манат (приход)"}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="sellPrice"
            type="number"
            ref={sellPriceRef}
            placeholder={productData.sellPrice + " манат (продажа)"}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="description"
            type="text"
            ref={descriptionRef}
            placeholder={productData.description}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="stock"
            type="number"
            ref={stockRef}
            placeholder={productData.stock + " (в складе)"}
            className="input-outline px-4 h-10 w-full"
          ></input>
          <Selector
            selectData={categories}
            className="h-10"
            placeholder={productData.category.title + " (категория)"}
            onSelect={handleCategorySelection}
          />
          <Selector
            selectData={subCategories}
            className="h-10"
            placeholder={productData.subCategory.title + " (под категория)"}
            onSelect={handleSubCategorySelection}
          />
          <Selector
            selectData={productStatuses}
            className="h-10"
            placeholder={productData.status.title + " (статус)"}
            onSelect={handleStatusSelection}
          />
          <input
            type="file"
            name="productImages"
            onChange={getFile}
            multiple
            accept="image/*"
            placeholder="Добавить фото"
            className="bg-calm-50 block border rounded-lg text-calm-600 file:cursor-pointer file:rounded-l-lg file:border-0 file:text-sm file:bg-calm-600 file:text-white file:px-2 file:h-10 h-10 w-full"
          ></input>
        </div>
        <div className="border rounded-lg text-center center flex-col gap-4 p-2 md:flex-[50%] md:max-w-[50%] w-full">
          <p className="px-16">
            Рекомендуемый размер изображения 1000 x 1000 (Вы можете выложить
            максимум 5 фотографий)
          </p>
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
