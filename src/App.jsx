import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts"; // Importa el Layout
import Proyectos from "./pages/Proyectos";
import Inicio from "./pages/Inicio";
import Repre from "./pages/Repre";

function App() {
  return (
    <Router>
      <Routes>
        {/* Usa el Layout como contenedor principal */}
        <Route path="/" element={<Layout />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/repre" element={<Repre />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;