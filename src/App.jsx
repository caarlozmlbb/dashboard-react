import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layouts"; // Importa el Layout
import Proyectos from "./pages/Proyectos";
import Inicio from "./pages/Inicio";
import Repre from "./pages/Repre";
import Usuario from "./pages/Usuario";
import Login from "./auth/Login"; // Importa el Login

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  const loginUser = () => {
    setIsAuthenticated(true); // Cambia el estado a autenticado
  };

  return (
    <Router>
      <Routes>
        {/* Ruta del Login */}
        <Route path="/login" element={<Login loginUser={loginUser} />} />

        {/* Rutas protegidas */}
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/usuarios" element={<Usuario />} />
          <Route path="/repre" element={<Repre />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
