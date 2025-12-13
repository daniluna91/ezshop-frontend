// src/pages/Home.tsx

import ProductCard from "../components/ProductCard";
import { Product } from "../types/models";
import "./home.css";

// 🚨 Mocks de productos (ajusta las rutas de imagen si es necesario)
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "SUDADERA EZ BLACK EDITION",
    price: 49.95,
    imageUrl: "public/assets/images/modelosudaderaUno.png",
  },
  {
    id: 2,
    name: "BANDOLERA EZ BLUEZEBRA",
    price: 24.95,
    imageUrl: "public/assets/images/mariconerAzul.png",
  },
  {
    id: 3,
    name: "OVERSIZE EZSHIRT",
    price: 33.95,
    imageUrl: "public/assets/images/camiNegraOversize.png",
  },
  {
    id: 4,
    name: "EZ BACKPACK",
    price: 39.95,
    imageUrl: "public/assets/images/mochilaRojAzul.png",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <h1>MODA DE ALTO IMPACTO</h1>
        <p>Nuevas colecciones ya disponibles. Estilo EAZY PROJECT.</p>
        <button className="btn btn-primary">VER COLECCIÓN</button>
      </section>

      {/* 2. PRODUCT GRID - El layout que nos falló en Angular */}
      <section className="products-listing">
        <h2>NUESTROS PRODUCTOS</h2>
        <div className="product-grid">
          {/* El equivalente al *ngFor, pero usando .map() */}
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
