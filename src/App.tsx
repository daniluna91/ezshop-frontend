import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// Contenedor principal para componentes que requieren el Navbar y el Footer
// usamos children para que el layout sea flexible y pueda contener cualquier componente, children es un prop que recibe el componente padre y lo renderiza en el lugar donde se encuentra {children}
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
        <Navbar />    {/* padding para liberar espacio del navbar sticky */}   {" "}
    <main style={{ paddingTop: "85px", minHeight: "100vh", width: "100%" }}>
            {children}   {" "}
    </main>
        <Footer /> {/* footer */} {" "}
  </>
);
// usamos {""} para que el codigo sea visible, son espacios en blanco
const App = () => {
  return (
    <AuthProvider>
           {" "}
      <CartProvider>
               {" "}
        <Router>
                   {" "}
          <Routes>
                       {" "}
            {/* todas las rutas usan el layout para tener navbar y footer */}   
                   {" "}
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
                       {" "}
            <Route
              path="/products/:id"
              element={
                <Layout>
                  <ProductDetail />
                </Layout>
              }
            />
                       {" "}
            <Route
              path="/cart"
              element={
                <Layout>
                  <Cart />
                </Layout>
              }
            />
                       {" "}
            <Route
              path="/products/:category"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
                       {" "}
            <Route
              path="/admin/:section"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
                       {" "}
            {/* rutas de auth, ahora usan el layout para tener navbar y footer */}
                       {" "}
            {/* el layout es un componente que envuelve a las rutas para que tengan navbar y footer */}
            <Route
              path="/login"
              element={
                <Layout>
                  <Login />
                </Layout>
              }
            />
                       {" "}
            <Route
              path="/register"
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
                        {/* alomejor añado la ruta 404 aqui */}         {" "}
          </Routes>
                 {" "}
        </Router>
             {" "}
      </CartProvider>
         {" "}
    </AuthProvider>
  );
};

export default App;
