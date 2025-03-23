import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListarUsuarios from "./usuarios/ListarUsuario";

function Usuario() {
  const [formData, setFormData] = useState({
    name: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    // Validaciones básicas
    if (
      !formData.name ||
      !formData.apellido ||
      !formData.email ||
      !formData.password
    ) {
      setMessage({ type: "danger", text: "Todos los campos son obligatorios" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ type: "success", text: result.mensaje });
        setFormData({ name: "", apellido: "", email: "", password: "" }); // Limpiar el formulario
        // Incrementar el trigger para forzar la recarga de usuarios
        setRefreshTrigger(prev => prev + 1);
      } else {
        setMessage({
          type: "danger",
          text: result.mensaje || "Error al registrar",
        });
      }
    } catch (error) {
      setMessage({
        type: "danger",
        text: "Error en la conexión con el servidor",
      });
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-2 p-4 bg-light rounded shadow">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow p-3 mb-5">
            <h1 className="text-center mb-4">Registrar Usuario</h1>
            {message.text && (
              <div className={`alert alert-${message.type}`} role="alert">
                {message.text}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Registrando..." : "Registrar"}
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Lista de Usuarios</h2>
            <ListarUsuarios triggerRefresh={refreshTrigger} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usuario;