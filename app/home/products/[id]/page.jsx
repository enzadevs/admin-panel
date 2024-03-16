"use client";

import LoadingBlock from "components/Functions/LoadingBlock";
import ErrorBlock from "components/Functions/ErrorBlock";
import Selector from "utils/Selector";
import BrandSelector from "utils/BrandSelector";
import SubCategoriesSelector from "utils/SubCategoriesSelector";
import ProductsSwiper from "components/Containers/SelectedImagesSwiper";
import ImagesSwiper from "components/Containers/ImagesSwiper";
import { UseFetcher } from "utils/UseFetcher";
import { useState, useRef } from "react";
import { SuccessToast, ErrorToast } from "components/Functions/Toaster";
import { IoSaveOutline } from "react-icons/io5";

export default function ProductViewPage({ params }) {
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const updatedBarcode = barcodeRef.current.value || productData.barcode;
      const updatedRuTitle = titleRuRef.current.value || productData.titleRu;
      const updatedTmTitle = titleTmRef.current.value || productData.titleTm;
      const updatedEnTitle = titleEnRef.current.value || productData.titleEn;
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
      formData.append("titleRu", updatedRuTitle);
      formData.append("titleTm", updatedTmTitle);
      formData.append("titleEn", updatedEnTitle);
      formData.append("brandId", updatedBrandId);
      formData.append("arrivalPrice", updatedArrivalPrice);
      formData.append("sellPrice", updatedSellPrice);
      formData.append("description", updatedDescription);
      formData.append("stock", updatedStock);
      formData.append("categoryId", updatedCategoryId);
      formData.append("subCategoryId", updatedSubCategoryId);
      formData.append("unitTypeId", updatedUnitTypeId);
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
        `http://localhost:3001/products/update/${params.id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (response.ok) {
        SuccessToast({ successText: "Продукт обновлен." });
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

  const { data: brands } = UseFetcher(
    "http://localhost:3001/manage/brands/all"
  );

  const {
    data: productData,
    isLoading,
    error,
  } = UseFetcher(`http://localhost:3001/products/fetch/${params.id}`);

  if (isLoading) return <LoadingBlock height={"h-20 lg:h-32"} width="w-full" />;
  if (error) return <ErrorBlock height={"h-20 lg:h-32"} width="w-full" />;

  return (
    <form className="flex flex-col gap-4" encType="multipart/form-data">
      <div className="flex-row-center justify-between">
        <h2>Обновить продукт</h2>
        <button
          type="submit"
          onClick={handleUpdate}
          className="button-primary button-hover center gap-2 px-4 h-10 w-fit"
        >
          <IoSaveOutline className="icons" />
          Обновить
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md flex flex-col gap-2 lg:flex-row lg:gap-4 p-4">
        <div className="flex flex-col gap-4 justify-between lg:flex-[50%] lg:max-w-[50%]">
          <div className="flex-row-center gap-2">
            <label htmlFor="barcode" className="flex-[20%] max-w-[20%]">
              Баркод:
            </label>
            <input
              name="barcode"
              type="number"
              ref={barcodeRef}
              placeholder={productData.barcode}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="titleRu" className="flex-[20%] max-w-[20%]">
              Имя (русский):
            </label>
            <input
              name="titleRu"
              type="text"
              ref={titleRuRef}
              placeholder={productData.titleRu}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="titleTm" className="flex-[20%] max-w-[20%]">
              Имя (ткм.):
            </label>
            <input
              name="titleTm"
              type="text"
              ref={titleTmRef}
              placeholder={productData.titleTm ? productData.titleTm : "Нет"}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="titleEn" className="flex-[20%] max-w-[20%]">
              Имя (англ.):
            </label>
            <input
              name="titleEn"
              type="text"
              ref={titleEnRef}
              placeholder={productData.titleEn ? productData.titleEn : "Нет"}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <p className="flex-[20%] max-w-[20%]">Ед. измерения:</p>
            <Selector
              selectData={unitTypes}
              placeholder={productData.unitType.titleRu}
              onSelect={handleUnitTypeSelection}
            />
          </div>
          <div className="flex-row-center gap-2">
            <p className="flex-[20%] max-w-[20%]">Бренд:</p>
            <BrandSelector
              selectData={brands}
              className="h-10 w-full"
              placeholder={productData.brand.title}
              onSelect={handleBrandSelection}
            />
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="arrivalPrice" className="flex-[20%] max-w-[20%]">
              Цена (приход):
            </label>
            <input
              name="arrivalPrice"
              type="number"
              ref={arrivalPriceRef}
              placeholder={productData.arrivalPrice}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="costPrice" className="flex-[20%] max-w-[20%]">
              Цена (продажа):
            </label>
            <input
              name="sellPrice"
              type="number"
              ref={sellPriceRef}
              placeholder={productData.sellPrice}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="description" className="flex-[20%] max-w-[20%]">
              Описание:
            </label>
            <input
              name="description"
              type="text"
              ref={descriptionRef}
              placeholder={
                productData.description ? productData.description : "Нет"
              }
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <label htmlFor="stock" className="flex-[20%] max-w-[20%]">
              Склад:
            </label>
            <input
              name="stock"
              type="number"
              ref={stockRef}
              placeholder={productData.stock}
              className="input-outline px-4 h-10 w-full"
            ></input>
          </div>
          <div className="flex-row-center gap-2">
            <p className="flex-[20%] max-w-[20%]">Категория:</p>
            <Selector
              selectData={categories}
              placeholder={productData.category.titleRu}
              onSelect={handleCategorySelection}
            />
          </div>
          <div className="flex-row-center gap-2">
            <p className="flex-[20%] max-w-[20%]">Под категория:</p>
            <SubCategoriesSelector
              selectData={subCategories}
              placeholder={productData.subCategory.titleRu}
              onSelect={handleSubCategorySelection}
            />
          </div>
          <div className="flex-row-center gap-2">
            <p className="flex-[20%] max-w-[20%]">Статус продукта:</p>
            <Selector
              selectData={productStatuses}
              className="h-10"
              placeholder={productData.status.titleRu}
              onSelect={handleStatusSelection}
            />
          </div>
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
        <div className="bg-mercury shadow-md rounded-lg text-center center flex-col gap-2 p-4 lg:flex-[50%] lg:max-w-[50%] w-full">
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
