import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// busca el elemento 'root' en el HTML y renderiza <App />
// el root es el elemento principal de la aplicacion, es el elemento que contiene todo el contenido de la aplicacion y ReactDOM.createRoot es el metodo que crea el root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
