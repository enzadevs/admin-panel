"use client";

import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { useState, useEffect } from "react";

export default function SubCategoriesSelector({
  selectData,
  placeholder,
  className,
  onSelect,
}) {
  const [filteredSelectData, setFilteredSelectData] = useState([]);

  useEffect(() => {
    const updateFilteredData = () => {
      const filteredOptions = selectData.map((option) => ({
        label: option.title,
        value: option.id,
      }));
      setFilteredSelectData(filteredOptions);
    };

    updateFilteredData();
  }, [selectData]);

  const handleSelectChange = (selectedOption) => {
    onSelect(selectedOption);
  };

  // const filterItems = (inputValue) => {
  //   return selectData.filter((i) =>
  //     i.title.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  // };

  return (
    <Select
      options={filteredSelectData}
      className={className}
      placeholder={placeholder}
      onChange={handleSelectChange}
      // options={selectData}
      // className={className}
      // placeholder={placeholder}
      // getOptionLabel={(option) => option.title}
      // getOptionValue={(option) => option.id}
      // onChange={handleSelectChange}
    />
  );
}
