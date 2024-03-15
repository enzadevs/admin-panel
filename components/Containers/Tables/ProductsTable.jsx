import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

export const ProductsTable = ({ rows }) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const filter = (event) => {
    const value = event.target.value;

    if (value) {
      setSortedRows(
        rows.filter((row) => {
          return Object.values(row)
            .join("")
            .toLowerCase()
            .includes(value.toLowerCase());
        })
      );
    } else {
      setSortedRows(rows);
    }
  };

  const toggleSortByField = (field) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }

    const sorted = [...sortedRows].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setSortedRows(sorted);
  };

  const sortIcon = (field) =>
    sortBy === field ? (
      sortOrder === "asc" ? (
        <FaArrowUp />
      ) : (
        <FaArrowDown />
      )
    ) : (
      <FaArrowDown />
    );

  const renderArrows = (field) => (
    <span className="inline-flex float-right">{sortIcon(field)}</span>
  );

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-x-auto p-4">
      <div className="flex-row-center gap-2 h-10">
        <div className="relative flex-row-center w-full">
          <input
            className="input-outline pl-4 pr-8 w-full"
            type="text"
            placeholder="Поиск..."
            onChange={filter}
          />
          <button className="center absolute right-0 h-10 w-10">
            <CiSearch className="icons" />
          </button>
        </div>
      </div>
      <table className="w-full table">
        <thead>
          <tr className="border-b border-gray-200">
            <th onClick={() => toggleSortByField("id")}>
              Номер
              {renderArrows("id")}
            </th>
            <th onClick={() => toggleSortByField("barcode")}>
              Баркод
              {renderArrows("barcode")}
            </th>
            <th onClick={() => toggleSortByField("titleRu")}>
              Имя
              {renderArrows("titleRu")}
            </th>
            <th onClick={() => toggleSortByField("brand.title")}>
              Бренд
              {renderArrows("brand.title")}
            </th>
            <th onClick={() => toggleSortByField("arrivalPrice")}>
              Цена (приход)
              {renderArrows("arrivalPrice")}
            </th>
            <th onClick={() => toggleSortByField("sellPrice")}>
              Цена (продажа)
              {renderArrows("sellPrice")}
            </th>
            <th onClick={() => toggleSortByField("stock")}>
              Склад
              {renderArrows("stock")}
            </th>
            <th onClick={() => toggleSortByField("unitType.title")}>
              Ед. измерения
              {renderArrows("unitType.title")}
            </th>
            <th onClick={() => toggleSortByField("category.title")}>
              Категория
              {renderArrows("category.title")}
            </th>
            <th onClick={() => toggleSortByField("status.title")}>
              Статус
              {renderArrows("status.title")}
            </th>
            <th onClick={() => toggleSortByField("createdAt")}>
              Создано
              {renderArrows("createdAt")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedRows?.map((row, index) => (
            <tr
              onClick={() =>
                (window.location.href = `/home/products/${row.id}`)
              }
              key={index}
              className="border-b border-gray-200 cursor-pointer transition hover:bg-calm-50 hover:text-calm-600"
            >
              <td>{row.id}</td>
              <td>{row.barcode}</td>
              <td>{row.titleRu}</td>
              <td>{row.brand?.title}</td>
              <td>{row.arrivalPrice}</td>
              <td>{row.sellPrice}</td>
              <td>{row.stock}</td>
              <td>{row.unitType?.titleRu}</td>
              <td>{row.category?.titleRu}</td>
              <td>{row.status?.titleRu}</td>
              <td>{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!sortedRows.length && (
        <div className="bg-yellow-300 rounded-lg center text-center mt-2 px-2 h-20">
          Ничего не нашлось.
        </div>
      )}
    </div>
  );
};
