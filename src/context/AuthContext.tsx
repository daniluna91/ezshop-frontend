import React, { createContext, useContext, useState, ReactNode } from "react";

// definir la forma del Contexto
interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// crear el Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// crear el Proveedor (Provider)
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // inicializar el estado: verifica si existe un token en localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authToken")
  );

  const login = (token: string) => {
    // guarda el token al iniciar sesión
    localStorage.setItem("authToken", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // elimina el token al cerrar sesión
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    // opcional: recargar la página o redirigir al home
  };

  // objeto que es accesible por cualquier componente
  const contextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// hook personalizado para usar el estado de Auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
