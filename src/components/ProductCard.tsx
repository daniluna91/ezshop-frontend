// src/components/ProductCard.tsx

import { Link } from "react-router-dom";
import { Product } from "../types/models";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const productLink = `/products/${product.id}`;

  // LLAMAR AL HOOK Y OBTENER LA FUNCIÓN
  const { addToCart } = useCart();

  // Usamos el id del producto para el enlace
  return (
    <div className="product-card">
      <Link to={productLink}>
        <div className="product-image">
          {/* Usamos el imageUrl del mock */}
          <img src={product.imageUrl} alt={product.name} />
        </div>
      </Link>

      <div className="product-details">
        <h3 className="product-name">{product.name.toUpperCase()}</h3>

        <p className="product-price">€{product.price.toFixed(2)}</p>

        {/* 🚨 3. ASIGNAR LA FUNCIÓN AL BOTÓN */}
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          AÑADIR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
