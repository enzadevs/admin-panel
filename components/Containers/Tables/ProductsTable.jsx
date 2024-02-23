import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export const ProductsTable = ({ rows }) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const router = useRouter();

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

  const sortByField = (field) => {
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

  return (
    <div className="border rounded-lg shadow-md overflow-x-auto p-4">
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
          <tr className="border-b border-light">
            <th>Баркод</th>
            <th onClick={() => sortByField("title")}>Имя</th>
            <th onClick={() => sortByField("brand.title")}>Бренд</th>
            <th>Ед. измерения</th>
            <th onClick={() => sortByField("arrivalPrice")}>Цена прихода</th>
            <th onClick={() => sortByField("sellPrice")}>Цена продажи</th>
            <th>Описание</th>
            <th onClick={() => sortByField("stock")}>Склад</th>
            <th onClick={() => sortByField("category.title")}>Категория</th>
            <th onClick={() => sortByField("subCategory.title")}>
              Под категория
            </th>
            <th onClick={() => sortByField("status.title")}>Статус</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows?.map((row, index) => (
            <tr
              onClick={() => router.push(`/home/products/${row.id}`)}
              key={index}
              className="border-b border-light transition hover:bg-calm-50 hover:text-calm-600"
            >
              <td>{row.barcode}</td>
              <td>{row.title}</td>
              <td>{row.brand?.title}</td>
              <td>{row.unitType?.title}</td>
              <td>{row.arrivalPrice}</td>
              <td>{row.sellPrice}</td>
              <td>{row.description}</td>
              <td>{row.stock}</td>
              <td>{row.category?.title}</td>
              <td>{row.subCategory?.title}</td>
              <td>{row.status?.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!sortedRows.length && (
        <div className="border border-yellow-400 bg-yellow-300 rounded-lg center text-sm md:text-base text-center mt-2 px-2 h-20">
          Ничего не нашлось.
        </div>
      )}
    </div>
  );
};
