import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export const ProductsTable = ({ rows }) => {
  const [sortedRows, setRows] = useState(rows);
  const router = useRouter();

  const filter = (event) => {
    const value = event.target.value;

    if (value) {
      setRows(
        rows.filter((row) => {
          return Object.values(row)
            .join("")
            .toLowerCase()
            .includes(value.toLowerCase());
        })
      );
    } else {
      setRows(rows);
    }
  };

  return (
    <div className="overflow-x-auto">
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
            <th>Имя</th>
            <th>Бренд</th>
            <th>Ед. измерения</th>
            <th>Цена прихода</th>
            <th>Цена продажи</th>
            <th>Описание</th>
            <th>Склад</th>
            <th>Категория</th>
            <th>Под категория</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows?.map((row, index) => (
            <tr
              onClick={() => router.push(`/home/products/${row.id}`)}
              key={index}
              className="border-b border-light cursor-pointer transition hover:bg-calm-50 hover:text-calm-600"
            >
              <td>{row.barcode}</td>
              <td>{row.title}</td>
              <td>{row.brand.title}</td>
              <td>{row.unitType.title}</td>
              <td>{row.arrivalPrice}</td>
              <td>{row.sellPrice}</td>
              <td>{row.description}</td>
              <td>{row.stock}</td>
              <td>{row.category.title}</td>
              <td>{row.subCategory.title}</td>
              <td>{row.status.title}</td>
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
