import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login({ loginUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Usa useNavigate para redirigir al usuario

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "admin" && password === "admin123") {
      loginUser(); // Cambia el estado a autenticado
      navigate("/inicio"); // Redirige a la página de inicio (dashboard)
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container"> {/* Aquí se aplica la clase login-container */}
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input 
              type="text" 
              value={userName}
              placeholder="Nombre Usuario" 
              onChange={(e) => setUserName(e.target.value)}
              required 
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña" 
              required 
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot contraseña?</a>
          </div>

          <button type="submit">Login</button>
          
          {error && <p className="error">{error}</p>}
          
          <div className="register-link">
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
