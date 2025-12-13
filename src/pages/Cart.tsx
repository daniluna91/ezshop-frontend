// src/pages/Cart.tsx

import { useCart } from "../context/CartContext";
import { CartItem } from "../types/models"; // Importar CartItem
import "./Cart.css";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <div className="cart-container">
      <h1>CARRITO DE COMPRAS</h1>

      {cart.length === 0 ? (
        <p className="empty-cart-message">
          Tu carrito está vacío. ¡Añade algunos productos!
        </p>
      ) : (
        <div className="cart-content">
          {/* Lista de Ítems */}
          <div className="cart-items-list">
            {cart.map((item: CartItem) => (
              <div key={item.id} className="cart-item">
                {/* 🚨 RENDERIZADO DE LA IMAGEN CON RUTA CORREGIDA */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{item.name.toUpperCase()}</h3>
                  <p>Precio: €{item.price.toFixed(2)}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: €{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  className="btn remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
              </div>
            ))}
          </div>

          {/* Resumen del Carrito */}
          <div className="cart-summary">
            <h2>RESUMEN</h2>
            <div className="summary-line total-line">
              <span>TOTAL:</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary checkout-btn">
              FINALIZAR COMPRA
            </button>
            <button className="btn clear-btn" onClick={clearCart}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
