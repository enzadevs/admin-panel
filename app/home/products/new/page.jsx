"use client";

import Selector from "utils/Selector";
import { UseFetcher } from "utils/UseFetcher";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import ProductsSwiper from "components/Containers/SelectedImagesSwiper";
import { IoSaveOutline, IoImageOutline } from "react-icons/io5";

export default function NewProductPage() {
  const [selectedFiles, setSelectedFiles] = useState();
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

    if (!selectedFiles) {
      ErrorToast({ errorText: "Пожалуйста, загрузите изображение." });
      return;
    }

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

      const response = await fetch("http://localhost:5000/products/create", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        SuccessToast({ successText: "Продукт был успешно создан." });
        setTimeout(() => {
          window.location.href = "/home/products";
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

  const { data: unitTypes } = UseFetcher(
    "http://localhost:5000/manage/unittype/all"
  );
  const { data: categories } = UseFetcher(
    "http://localhost:5000/manage/category/all"
  );
  const { data: subCategories } = UseFetcher(
    "http://localhost:5000/manage/subcategory/all"
  );
  const { data: productStatuses } = UseFetcher(
    "http://localhost:5000/manage/status/all"
  );

  const {
    data: brands,
    isLoading,
    error,
  } = UseFetcher("http://localhost:5000/manage/brands/all");

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <form className="flex flex-col gap-4" encType="multipart/form-data">
      <div className="flex-row-center justify-between">
        <h2 className="font-bold">Новый продукт</h2>
        <button
          type="submit"
          onClick={handleSubmit}
          className="button-primary button-hover center gap-2 px-4 h-10 w-fit"
        >
          <IoSaveOutline className="icons" />
          Сохранить
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md flex flex-col gap-2 lg:flex-row lg:gap-4 p-4">
        <div className="flex flex-col gap-4 justify-between lg:flex-[50%] lg:max-w-[50%]">
          <input
            name="barcode"
            type="number"
            ref={barcodeRef}
            placeholder="Баркод"
            className="input-outline px-4 h-10 w-full"
          ></input>
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
            selectData={unitTypes}
            className="h-10"
            placeholder="Ед. измерения"
            onSelect={handleUnitTypeSelection}
          />
          <input
            name="costPrice"
            type="number"
            ref={arrivalPriceRef}
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
          <Selector
            selectData={categories}
            className="h-10"
            placeholder="Категория"
            onSelect={handleCategorySelection}
          />
          <Selector
            selectData={subCategories}
            className="h-10"
            placeholder="Под категория"
            onSelect={handleSubCategorySelection}
          />
          <Selector
            selectData={productStatuses}
            className="h-10"
            placeholder="Статус продукта"
            onSelect={handleStatusSelection}
          />
          <input
            type="file"
            name="productImages"
            onChange={getFile}
            multiple
            accept="image/*"
            placeholder="Добавить фото"
            className="custom-file-input"
          ></input>
        </div>
        <div className="bg-calm-50 shadow-md rounded-lg text-center center flex-col gap-2 p-4 lg:flex-[50%] lg:max-w-[50%] w-full">
          <p className="text-xs md:text-base">
            Рекомендуемый размер изображения 1000 x 1000
          </p>
          {selectedFiles ? (
            <ProductsSwiper images={selectedFiles} />
          ) : (
            <div className="center h-full w-72">
              <IoImageOutline className="animate-pulse h-48 w-48" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
