import React from "react";
import { Navbar, Container, Button, Dropdown, Badge } from "react-bootstrap";
import { FaBars, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Importar CSS

function NavBar({ setSidebarOpen }) { // Recibe setSidebarOpen como prop
  return (
    <Navbar bg="white" expand="lg" className="navbar-container">
      <Container>
        <Button
          variant="light"
          className="border-0"
          onClick={() => setSidebarOpen((prev) => !prev)} // Alternar el estado del Sidebar
        >
          <FaBars /> {/* Ícono de menú hamburguesa */}
        </Button>
        <Navbar.Brand className="ms-3 d-none d-sm-block">
          Panel de Control
        </Navbar.Brand>

        <div className="ms-auto d-flex align-items-center">
          {/* Notificaciones */}
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="light" className="border-0 position-relative">
              <i className="mdi mdi-bell-outline"></i>
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                3
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow border-0">
              <Dropdown.Header>Notificaciones</Dropdown.Header>
              <Dropdown.Item>Nueva actualización disponible</Dropdown.Item>
              <Dropdown.Item>Mensaje nuevo recibido</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-center">Ver todas</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Mensajes */}
          <Dropdown align="end" className="me-3">
            <Dropdown.Toggle variant="light" className="border-0 position-relative">
              <i className="mdi mdi-email-outline"></i>
              <Badge bg="primary" pill className="position-absolute top-0 start-100 translate-middle">
                2
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow border-0">
              <Dropdown.Header>Mensajes</Dropdown.Header>
              <Dropdown.Item>
                <strong>Carlos:</strong> Hola, ¿cómo estás?
              </Dropdown.Item>
              <Dropdown.Item>
                <strong>María:</strong> ¿Me ayudas con un problema?
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-center">Ver todos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Usuario */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" className="border-0 d-flex align-items-center">
              <img
                src="https://via.placeholder.com/36"
                alt="User"
                className="rounded-circle me-2"
                width="36"
                height="36"
              />
              <span className="d-none d-md-inline">Usuario</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="shadow border-0">
              <Dropdown.Item><i className="mdi mdi-account"></i> Perfil</Dropdown.Item>
              <Dropdown.Item><i className="mdi mdi-cog"></i> Configuración</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item><i className="mdi mdi-logout"></i> Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;