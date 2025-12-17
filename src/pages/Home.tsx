import ProductCard from "../components/ProductCard";
import { Product } from "../types/models";
import "./home.css";

// mocks de productos
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
      {/* hero, debajo del navbar */}
      <section className="hero-section">
        <h1>MODA DE ALTO IMPACTO</h1>
        <p>The best world apparels. EAZY style.</p>
        <button className="btn btn-primary">VER COLECCIÓN</button>
      </section>

      {/* product grid, para mostrar los productos */}
      <section className="products-listing">
        <h2>NUESTROS PRODUCTOS</h2>
        <div className="product-grid">
          {/* .map() es como un bucle que recorre el array y ejecuta la funcion por cada elemento */}
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
