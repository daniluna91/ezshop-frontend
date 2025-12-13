// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

// NOTA: Aquí no es necesario 'import React from "react";' en versiones modernas

// 1. Definir la forma del Contexto
interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// 2. Crear el Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Crear el Proveedor (Provider)
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Inicializar el estado: verifica si existe un token en localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authToken")
  );

  const login = (token: string) => {
    // Guarda el token al iniciar sesión
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Elimina el token al cerrar sesión
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    // Opcional: Recargar la página o redirigir al home
  };

  const contextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// 4. Hook personalizado para usar el estado de Auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
