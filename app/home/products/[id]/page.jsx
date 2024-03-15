"use client";

import Selector from "utils/Selector";
import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import ProductsSwiper from "components/Containers/SelectedImagesSwiper";
import ImagesSwiper from "components/Containers/ImagesSwiper";
import { UseFetcher } from "utils/UseFetcher";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline, IoImageOutline } from "react-icons/io5";

export default function ProductViewPage({ params }) {
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

    try {
      const formData = new FormData();
      const updatedBarcode = barcodeRef.current.value || productData.barcode;
      const updatedTitle = titleRef.current.value || productData.title;
      const updatedBrandId = brandSelection || productData.brand.id;
      const updatedUnitTypeId = unitTypeSelection || productData.unitType.id;
      const updatedArrivalPrice =
        arrivalPriceRef.current.value || productData.arrivalPrice;
      const updatedSellPrice =
        sellPriceRef.current.value || productData.sellPrice;
      const updatedDescription =
        descriptionRef.current.value || productData.description;
      const updatedStock = stockRef.current.value || productData.stock;
      const updatedCategoryId = categorySelection || productData.category.id;
      const updatedSubCategoryId =
        subCategorySelection || productData.subCategory.id;
      const updatedStatusId = productStatus || productData.status.id;

      formData.append("barcode", updatedBarcode);
      formData.append("title", updatedTitle);
      formData.append("brandId", updatedBrandId);
      formData.append("unitTypeId", updatedUnitTypeId);
      formData.append("arrivalPrice", updatedArrivalPrice);
      formData.append("sellPrice", updatedSellPrice);
      formData.append("description", updatedDescription);
      formData.append("stock", updatedStock);
      formData.append("categoryId", updatedCategoryId);
      formData.append("subCategoryId", updatedSubCategoryId);
      formData.append("statusId", updatedStatusId);
      productData.images.forEach((image) => {
        formData.append("productImages", image);
      });
      if (selectedFiles && selectedFiles.length > 0) {
        selectedFiles.forEach((file) => {
          formData.append("productImages", file);
        });
      }

      const response = await fetch(
        `http://localhost:5000/products/update/${params.id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Продукт был успешно обновлен." });
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
  const { data: brands } = UseFetcher(
    "http://localhost:5000/manage/brands/all"
  );

  const {
    data: productData,
    isLoading,
    error,
  } = UseFetcher(`http://localhost:5000/products/fetch/${params.id}`);

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <form className="flex flex-col gap-4" encType="multipart/form-data">
      <div className="flex-row-center justify-between">
        <h2>Обновить продукт</h2>
        <button
          type="submit"
          onClick={handleSubmit}
          className="button-primary button-hover center gap-2 px-4 h-10 w-fit"
        >
          <>Обновить</>
          <IoSaveOutline className="icons" />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md flex flex-col gap-2 lg:flex-row lg:gap-4 p-4">
        <div className="flex flex-col gap-4 justify-between lg:flex-[50%] lg:max-w-[50%]">
          <input
            name="barcode"
            type="number"
            ref={barcodeRef}
            placeholder={productData.barcode + " (баркод)"}
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
            <ImagesSwiper images={productData.images} />
          )}
        </div>
      </div>
    </form>
  );
}
