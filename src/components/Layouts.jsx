import React, { useState, useEffect } from "react";
import { Nav, Container, Button, Badge, Dropdown } from "react-bootstrap";
import NavBar from "./Navbar";
import {
  FaBars,
  FaHome,
  FaUser,
  FaCog,
  FaBell,
  FaEnvelope,
  FaSignOutAlt,
  FaChartLine,
  FaFolder,
  FaCalendarAlt,
} from "react-icons/fa";
import { Outlet, Link } from "react-router-dom"; // Outlet para renderizar el contenido dinámico
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DashboardNavbar.css";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Efecto para manejar el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mostrar sidebar permanentemente en pantallas grandes
  useEffect(() => {
    if (windowWidth >= 992) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false); // Colapsar el Sidebar en pantallas pequeñas
    }
  }, [windowWidth]);

  const MenuItems = [
    { icon: <FaHome />, title: "Inicio", link: "/inicio" },
    { icon: <FaChartLine />, title: "Dashboard", link: "/dashboard" },
    { icon: <FaFolder />, title: "Proyectos", link: "/proyectos" },
    { icon: <FaCalendarAlt />, title: "Modelo", link: "/repre" },
    { icon: <FaUser />, title: "Perfil", link: "/perfil" },
    { icon: <FaCog />, title: "Configuración", link: "/configuracion" },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="p-3">
          <h4 className="text-center py-3 border-bottom mb-4">
            <span className="text-primary">M</span>inible
          </h4>
          <Nav className="flex-column">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="nav-link"
              >
                <span className="me-3">{item.icon}</span>
                {sidebarOpen && item.title} {/* Muestra el texto solo si el Sidebar está abierto */}
              </Link>
            ))}
          </Nav>
        </div>
        <div className="mt-auto p-3 border-top">
          <Link to="/logout" className="text-white d-flex align-items-center">
            <FaSignOutAlt className="me-3" />
            {sidebarOpen && "Cerrar sesión"} {/* Muestra el texto solo si el Sidebar está abierto */}
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className={`content-wrapper ${sidebarOpen ? "" : "closed"}`}>
        {/* Navbar */}
        <NavBar setSidebarOpen={setSidebarOpen} /> {/* Pasa la función setSidebarOpen */}

        {/* Contenido dinámico */}
        <div className="page-content">
          <Outlet /> {/* Aquí se renderizará el contenido de la ruta */}
        </div>
      </div>
    </div>
  );
}

export default Layout;





// import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";
// import NavBar from "./Navbar"; // Importa el Navbar
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/DashboardNavbar.css"; // Importa los estilos

// function Layout() {
//   const [sidebarOpen, setSidebarOpen] = useState(true); // Estado para controlar el Sidebar

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
//         <div className="p-3">
//           <h4 className="text-center py-3 border-bottom mb-4">
//             <span className="text-primary">M</span>inible
//           </h4>
//           <nav className="flex-column">
//             <Link to="/dashboard" className="nav-link">
//               <span className="me-3">🏠</span>
//               {sidebarOpen && "Dashboard"} {/* Muestra el texto solo si el Sidebar está abierto */}
//             </Link>
//             <Link to="/proyectos" className="nav-link">
//               <span className="me-3">📁</span>
//               {sidebarOpen && "Proyectos"} {/* Muestra el texto solo si el Sidebar está abierto */}
//             </Link>
//             <Link to="/calendario" className="nav-link">
//               <span className="me-3">📅</span>
//               {sidebarOpen && "Calendario"} {/* Muestra el texto solo si el Sidebar está abierto */}
//             </Link>
//             <Link to="/perfil" className="nav-link">
//               <span className="me-3">👤</span>
//               {sidebarOpen && "Perfil"} {/* Muestra el texto solo si el Sidebar está abierto */}
//             </Link>
//             <Link to="/configuracion" className="nav-link">
//               <span className="me-3">⚙️</span>
//               {sidebarOpen && "Configuración"} {/* Muestra el texto solo si el Sidebar está abierto */}
//             </Link>
//           </nav>
//         </div>
//         <div className="mt-auto p-3 border-top">
//           <Link to="/logout" className="text-white d-flex align-items-center">
//             <span className="me-3">🚪</span>
//             {sidebarOpen && "Cerrar sesión"} {/* Muestra el texto solo si el Sidebar está abierto */}
//           </Link>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className={`content-wrapper ${sidebarOpen ? "" : "closed"}`}>
//         {/* Navbar */}
//         <NavBar setSidebarOpen={setSidebarOpen} /> {/* Pasa la función setSidebarOpen */}

//         {/* Contenido dinámico */}
//         <div className="page-content">
//           <Outlet /> {/* Aquí se renderiza el contenido de la ruta */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layout;