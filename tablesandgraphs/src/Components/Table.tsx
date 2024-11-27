import DataTable from "react-data-import-component";
import "../Layout/Table.css"; // Voor extra algemene stijlen
import { useState } from "react";

interface Row {
  id: number;
  Jaar: number;
  Winst: number;
  Verlies: number;
}

function Table() {
  const initialRows: Row[] = [
    { id: 1, Jaar: 2015, Winst: 4000, Verlies: 1500 },
    { id: 2, Jaar: 2016, Winst: 5000, Verlies: 2000 },
    { id: 3, Jaar: 2017, Winst: 7000, Verlies: 3000 },
    { id: 4, Jaar: 2018, Winst: 8000, Verlies: 4000 },
    { id: 5, Jaar: 2019, Winst: 6000, Verlies: 2500 },
    { id: 6, Jaar: 2020, Winst: 9000, Verlies: 3500 },
    { id: 7, Jaar: 2021, Winst: 10000, Verlies: 4500 },
    { id: 8, Jaar: 2022, Winst: 11000, Verlies: 5000 },
    { id: 9, Jaar: 2023, Winst: 12000, Verlies: 5500 },
    { id: 10, Jaar: 2024, Winst: 13000, Verlies: 6000 },
  ];
  const [rows, setRows] = useState(initialRows);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowId: number,
    column: string
  ) => {
    const newRows = rows.map((row) => {
      if (row.id === rowId) {
        return { ...row, [column]: e.target.value }; // Update de specifieke waarde
      }
      return row;
    });
    setRows(newRows); // Update de staat van de rijen
  };

  const columns = [
    {
      name: "Jaar",
      selector: (row: Row) => row.Jaar,
    },
    {
      name: "Winst",
      cell: (row: Row) => (
        <input
          type="number"
          value={row.Winst}
          onChange={(e) => handleInputChange(e, row.id, "Winst")}
          className="editable-cell"
        />
      ),
    },
    {
      name: "Verlies",
      cell: (row: Row) => (
        <input
          type="number"
          value={row.Verlies}
          onChange={(e) => handleInputChange(e, row.id, "Verlies")}
          className="editable-cell"
        />
      ),
    },
  ];

  return (
    <>
      <div className="container my-5">
        <DataTable
          columns={columns}
          data={rows}
          fixedHeader
          title="Inkomsten / uitgaven"
        />
      </div>
    </>
  );
}

export default Table;
