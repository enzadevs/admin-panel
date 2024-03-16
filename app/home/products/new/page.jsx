"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import Selector from "utils/Selector";
import BrandSelector from "utils/BrandSelector";
import SubCategoriesSelector from "utils/SubCategoriesSelector";
import ProductsSwiper from "components/Containers/SelectedImagesSwiper";
import { UseFetcher } from "utils/UseFetcher";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline, IoImageOutline } from "react-icons/io5";

export default function NewProductPage() {
  const [selectedFiles, setSelectedFiles] = useState();
  const [brandSelection, setBrandSelection] = useState();
  const [categorySelection, setCategorySelection] = useState();
  const [subCategories, setSubCategories] = useState([]);
  const [subCategorySelection, setSubCategorySelection] = useState();
  const [productStatus, setProductStatus] = useState();
  const [unitTypeSelection, setUnitTypeSelection] = useState();

  const titleRuRef = useRef();
  const titleTmRef = useRef();
  const titleEnRef = useRef();
  const barcodeRef = useRef();
  const arrivalPriceRef = useRef();
  const sellPriceRef = useRef();
  const descriptionRef = useRef();
  const stockRef = useRef();

  const handleBrandSelection = (selectedOption) => {
    setBrandSelection(selectedOption ? selectedOption.id : null);
  };

  const handleCategorySelection = async (selectedOption) => {
    setCategorySelection(selectedOption ? selectedOption.id : null);

    if (selectedOption) {
      try {
        const response = await fetch(
          `http://localhost:3001/manage/categories/fetch/${selectedOption.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setSubCategories(data.subCategories);
        } else {
          console.error("Error fetching subcategories");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubCategorySelection = (selectedOption) => {
    setSubCategorySelection(selectedOption ? selectedOption : null);
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
      formData.append("titleRu", titleRuRef.current.value);
      formData.append("titleTm", titleTmRef.current.value);
      formData.append("titleEn", titleEnRef.current.value);
      formData.append("brandId", brandSelection);
      formData.append("arrivalPrice", arrivalPriceRef.current.value);
      formData.append("sellPrice", sellPriceRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("stock", stockRef.current.value);
      formData.append("categoryId", categorySelection);
      formData.append("subCategoryId", subCategorySelection);
      formData.append("unitTypeId", unitTypeSelection);
      formData.append("statusId", productStatus);
      selectedFiles.forEach((file) => {
        formData.append("productImages", file);
      });

      const response = await fetch("http://localhost:3001/products/new/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        SuccessToast({ successText: "Продукт добавлен." });
        setTimeout(() => {
          window.location.href = "/home/products";
        }, 500);
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
    "http://localhost:3001/manage/unit_types/all"
  );

  const { data: categories } = UseFetcher(
    "http://localhost:3001/manage/categories/all"
  );

  const { data: productStatuses } = UseFetcher(
    "http://localhost:3001/manage/status/all"
  );

  const {
    data: brands,
    isLoading,
    error,
  } = UseFetcher("http://localhost:3001/manage/brands/all");

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
            name="titleRu"
            type="text"
            ref={titleRuRef}
            placeholder="Имя продукта"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="titleTm"
            type="text"
            ref={titleTmRef}
            placeholder="Harydyň ady"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <input
            name="titleEn"
            type="text"
            ref={titleEnRef}
            placeholder="Title of product"
            className="input-outline px-4 h-10 w-full"
          ></input>
          <BrandSelector
            selectData={brands}
            placeholder="Бренд"
            onSelect={handleBrandSelection}
          />
          <Selector
            selectData={unitTypes}
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
            placeholder="Категория"
            onSelect={handleCategorySelection}
          />
          <SubCategoriesSelector
            selectData={subCategories}
            placeholder="Под категория"
            onSelect={handleSubCategorySelection}
          />
          <Selector
            selectData={productStatuses}
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
        <div className="border border-mercury-200 shadow-md rounded-lg text-center center flex-col gap-2 p-4 lg:flex-[50%] lg:max-w-[50%] w-full">
          <>Рекомендуемый размер изображения 1000 x 1000</>
          {selectedFiles ? (
            <ProductsSwiper images={selectedFiles} />
          ) : (
            <div className="rounded-lg center h-full w-72">
              <IoImageOutline className="animate-pulse h-32 w-32" />
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
