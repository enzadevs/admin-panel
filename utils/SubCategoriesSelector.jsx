"use client";

import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { useState, useEffect } from "react";

export default function SubCategoriesSelector({
  selectData,
  placeholder,
  onSelect,
}) {
  const [filteredSelectData, setFilteredSelectData] = useState([]);

  useEffect(() => {
    const updateFilteredData = () => {
      const filteredOptions = selectData.map((option) => ({
        label: option.titleRu,
        value: option.id,
      }));
      setFilteredSelectData(filteredOptions);
    };

    updateFilteredData();
  }, [selectData]);

  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      onSelect(selectedOption.value);
    } else {
      onSelect(null);
    }
  };

  return (
    <Select
      options={filteredSelectData}
      className="w-full"
      placeholder={placeholder}
      onChange={handleSelectChange}
    />
  );
}
