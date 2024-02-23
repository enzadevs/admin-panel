import { useState } from "react";

import { capitalize } from "../../utils";
import "./table.css";

export const Table = ({ rows }) => {
  const [sortedRows, setRows] = useState(rows);
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(Object.keys(rows[0])[0]);

  const filter = (event) => {
    const value = event.target.value;

    if (value) {
      setRows([
        ...rows.filter((row) => {
          return Object.values(row).join("").toLowerCase().includes(value);
        }),
      ]);
    } else {
      setRows(rows);
    }
  };

  const sort = (value, order) => {
    const returnValue = order === "desc" ? 1 : -1;

    setSortKey(value);
    setRows([
      ...sortedRows.sort((a, b) => {
        return a[value] > b[value] ? returnValue * -1 : returnValue;
      }),
    ]);
  };

  const updateOrder = () => {
    const updatedOrder = order === "asc" ? "desc" : "asc";

    setOrder(updatedOrder);
    sort(sortKey, updatedOrder);
  };

  return (
    <>
      <div className="controls">
        <input type="text" placeholder="Filter items" onChange={filter} />
        <select onChange={(event) => sort(event.target.value, order)}>
          {Object.keys(rows[0]).map((entry, index) => (
            <option value={entry} key={index}>
              Order by {capitalize(entry)}
            </option>
          ))}
        </select>
        <button onClick={updateOrder}>Switch order ({order})</button>
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(rows[0]).map((entry, index) => (
              <th key={index}>{capitalize(entry)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((entry, columnIndex) => (
                <td key={columnIndex}>{formatEntry(entry)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!sortedRows.length && <h1>No results... Try expanding the search</h1>}
    </>
  );
};
