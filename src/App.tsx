import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 🚨 1. IMPORTAR EL FOOTER
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// Contenedor principal para componentes que requieren el Navbar y el Footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
        <Navbar />    {/* Padding para liberar espacio del Navbar sticky */}   {" "}
    <main style={{ paddingTop: "85px", minHeight: "100vh", width: "100%" }}>
            {children}   {" "}
    </main>
        <Footer /> {/* EL FOOTER VA AQUÍ */} {" "}
  </>
);

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
            {/* 🚨 TODAS las rutas usan el Layout para tener Navbar y Footer */}
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
            {/* 🚨 RUTAS DE AUTH: AHORA USAN EL LAYOUT PARA TENER NAVBAR Y FOOTER */}
                       {" "}
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
                        {/* Puedes añadir una ruta para 404 aquí si quieres */} 
                   {" "}
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
