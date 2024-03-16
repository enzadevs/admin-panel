"use client";

import dynamic from "next/dynamic";
const AsyncSelect = dynamic(() => import("react-select/async"), { ssr: false });

export default function Selector({ selectData, placeholder, onSelect }) {
  const filterItems = (inputValue) => {
    return selectData.filter((i) =>
      i.titleRu.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterItems(inputValue));
    }, 1000);
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      className="w-full"
      placeholder={placeholder}
      getOptionLabel={(option) => option.titleRu}
      getOptionValue={(option) => option.id}
      onChange={onSelect}
    />
  );
}
