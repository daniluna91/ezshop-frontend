// src/components/Navbar.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext"; // Hook para el contador del carrito
import { useAuth } from "../context/AuthContext"; // HOOK DE AUTENTICACIÓN

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lógica del Carrito
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  // Lógica de Autenticación
  const { isLoggedIn, logout } = useAuth(); // Obtenemos el estado y la función para salir

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">EAZY PROJECT</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`main-nav ${isMenuOpen ? "is-open" : ""}`}>
        <ul>
          <li>
            <Link to="/products/men" onClick={toggleMenu}>
              HOMBRE
            </Link>
          </li>
          <li>
            <Link to="/products/women" onClick={toggleMenu}>
              MUJER
            </Link>
          </li>
          <li>
            <Link to="/products/sale" onClick={toggleMenu}>
              OFERTAS
            </Link>
          </li>
          <li>
            <Link to="/admin/dashboard" onClick={toggleMenu}>
              ADMIN
            </Link>
          </li>
        </ul>
      </nav>

      <div className="utility-icons">
        {/* 🚨 ICONO DE BÚSQUEDA (🔍) ELIMINADO */}

        {isLoggedIn ? (
          // Si está logeado, mostramos el botón SALIR (Logout)
          <button
            onClick={logout}
            className="btn-icon-link"
            title="Cerrar Sesión"
          >
            SALIR
          </button>
        ) : (
          // Si no está logeado, mostramos el botón LOGIN
          <Link to="/login" className="btn-icon-link">
            LOGIN
          </Link>
        )}

        {/* Icono y Contador del Carrito */}
        <Link to="/cart" className="icon-link cart-icon">
          🛒
          {itemCount > 0 && <span className="cart-count">({itemCount})</span>}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
