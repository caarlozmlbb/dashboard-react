// ListarUsuario.js
import React, { useEffect, useState } from "react";

function ListarUsuarios({ triggerRefresh, onUsersFetched }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/v1/usuarios");
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        const data = await response.json();
        console.log(data);
        if (!Array.isArray(data)) {
          throw new Error("Formato de datos incorrecto");
        }
        setUsuarios(data);
        if (onUsersFetched) {
          onUsersFetched(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsuarios();
  }, [triggerRefresh, onUsersFetched]); // Depende de triggerRefresh para recargar

  if (loading) return <p className="text-center p-4">Cargando usuarios...</p>;
  if (error) return <p className="text-danger text-center p-4">{error}</p>;

  return (
    <div className="container-fluid p-0">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario, index) => (
                <tr key={usuario.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{usuario.name}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-warning btn-sm">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-danger btn-sm">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No hay usuarios registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListarUsuarios;