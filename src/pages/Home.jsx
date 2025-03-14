import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Bienvenido al Panel de Control</h1>
      <p>Haz clic en el botón para ir al Dashboard</p>
      <a href="/dashboard" className="btn btn-primary">Ir al Dashboard</a>
    </div>
  );
}

export default Home;
