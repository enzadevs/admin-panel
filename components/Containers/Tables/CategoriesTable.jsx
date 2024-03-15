import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

export const CategoriesTable = ({ rows }) => {
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
      <table className="table w-full">
        <thead>
          <tr className="border-b border-mercury-200">
            <th onClick={() => toggleSortByField("id")}>
              Номер
              {renderArrows("id")}
            </th>
            <th onClick={() => toggleSortByField("titleRu")}>
              Имя (Ru)
              {renderArrows("titleRu")}
            </th>
            <th onClick={() => toggleSortByField("titleTm")}>
              Ady (Tm)
              {renderArrows("titleTm")}
            </th>
            <th onClick={() => toggleSortByField("titleEn")}>
              Name (En)
              {renderArrows("titleEn")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 cursor-pointer transition hover:bg-mercury hover:text-keppel-600"
            >
              {Object.values(row)
                .slice(0, 4)
                .map((entry, columnIndex) => (
                  <td
                    onClick={() =>
                      router.push(`/home/manage/categories/${row.id}`)
                    }
                    key={columnIndex}
                  >
                    {entry}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!sortedRows.length && (
        <div className="bg-yellow-300  rounded-lg center text-xs md:text-sm mt-4 px-4 h-20">
          Ничего не нашлось.
        </div>
      )}
    </div>
  );
};
