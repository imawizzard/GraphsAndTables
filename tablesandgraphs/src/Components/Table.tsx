import DataTable from "react-data-table-component";

interface Row {
  id: number;
  fullName: string;
  height: string;
  weight: string;
}

function Table() {
  const rows: Row[] = [
    {
      id: 1,
      fullName: "John Doe",
      height: "1.75m",
      weight: "89kg",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      height: "1.64m",
      weight: "55kg",
    },
    {
      id: 3,
      fullName: "Sheera Maine",
      height: "1.69m",
      weight: "74kg",
    },
  ];

  const columns = [
    {
      name: "ID",
      selector: (row: Row) => row.id,
    },
    {
      name: "Full Name",
      selector: (row: Row) => row.fullName,
    },
    {
      name: "Height",
      selector: (row: Row) => row.height,
    },
    {
      name: "Weight",
      selector: (row: Row) => row.weight,
    },
  ];

  return (
    <>
      <div className="container my-5">
        <DataTable columns={columns} data={rows} />
      </div>
    </>
  );
}

export default Table;
