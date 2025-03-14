import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap

function Inicio() {
  return (
    <div className="container mt-2 p-4 bg-light rounded shadow">
      <h1>Inicio</h1>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
}

export default Inicio;


// import React from "react";
// import { useTable } from "@tanstack/react-table"; // Importa useTable correctamente
// import "../styles/datatable.css"

// function Inicio() {
//   // Datos de ejemplo para la tabla
//   const data = React.useMemo(
//     () => [
//       { id: 1, nombre: "Juan Pérez", edad: 25, ciudad: "Lima" },
//       { id: 2, nombre: "María Gómez", edad: 30, ciudad: "Bogotá" },
//       { id: 3, nombre: "Carlos López", edad: 28, ciudad: "Santiago" },
//     ],
//     []
//   );

//   // Columnas de la tabla
//   const columns = React.useMemo(
//     () => [
//       { Header: "ID", accessor: "id" },
//       { Header: "Nombre", accessor: "nombre" },
//       { Header: "Edad", accessor: "edad" },
//       { Header: "Ciudad", accessor: "ciudad" },
//     ],
//     []
//   );

//   // Configuración de la tabla
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <div>
//       <h1>Inicio</h1>
//       <p>Bienvenido a la página de inicio.</p>

//       {/* Tabla de datos */}
//       <table {...getTableProps()} className="data-table">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Inicio;