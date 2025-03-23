import '.././App.css';
import React, { useState } from "react";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
DataTable.use(DT);

import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap

const initialData = [
  { nombre: "Johon Doe", posicion: "Software Engineer", oficina: "New York" },
  { nombre: "Jane Doe", posicion: "Data Scientist", oficina: "San Francisco" },
  { nombre: "Mike Smith", posicion: "Project Manager", oficina: "London" },
  { nombre: "Anna White", posicion: "UX Designer", oficina: "Berlin" }
];

const columns = [
  { title: "Nombre", data: "nombre" },
  { title: "Posición", data: "posicion" },
  { title: "Oficina", data: "oficina" }
];

function Inicio() {
  const [tableData, setTableData] = useState(initialData);

  return (
    <div className="container mt-2 p-4 bg-light rounded shadow">
      <DataTable 
        data={tableData} 
        columns={columns} 
      />
    </div>
  );
}

export default Inicio;