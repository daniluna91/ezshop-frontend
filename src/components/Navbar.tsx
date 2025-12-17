import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext"; // hook para el contador del carrito
import { useAuth } from "../context/AuthContext"; // hook de autenticacion

//React.FC es un tipo de componente que recibe props, y se usa para dar tipo a los componentes
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // la logica del carrito
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  // la autenticacion
  const { isLoggedIn, logout } = useAuth(); // estado logueado y funcion de salir

  // la logica del menu, toggleMenu es una funcion que invierte el estado de isMenuOpen
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
        {/* aqui estaba el link de busqueda pero lo borre por que daba errores */}

        {isLoggedIn ? (
          // si estas logueado te muestra el error de salir
          <button
            onClick={logout}
            className="btn-icon-link"
            title="Cerrar Sesión"
          >
            SALIR
          </button>
        ) : (
          // si no estas logueado te muestra el boton de login
          <Link to="/login" className="btn-icon-link">
            LOGIN
          </Link>
        )}

        {/* icono y contador del carrito */}
        <Link to="/cart" className="icon-link cart-icon">
          🛒
          {itemCount > 0 && <span className="cart-count">({itemCount})</span>}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
