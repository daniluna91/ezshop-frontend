// src/context/CartContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product } from "../types/models";
// NOTA: Recuerda que aquí ya no va 'import React from "react";'

// 1. Definir la forma del Contexto (lo que proveerá el hook)
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// 2. Crear el Contexto con valores iniciales
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Crear el Proveedor (Provider) que envuelve la App
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Usamos localStorage para que el carrito se guarde al cerrar el navegador
  const [cart, setCart] = useState<CartItem[]>(() => {
    const localData = localStorage.getItem("ezshopCart");
    return localData ? JSON.parse(localData) : [];
  });

  // Función para actualizar el estado y localStorage
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("ezshopCart", JSON.stringify(newCart));
  };

  const addToCart = (product: Product) => {
    const newCart = cart.map((item) => ({ ...item })); // Crear copia profunda para inmutabilidad

    const existingItem = newCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    updateCart(newCart);
  };

  const removeFromCart = (productId: number) => {
    const newCart = cart.map((item) => ({ ...item }));
    const existingItem = newCart.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // Disminuir la cantidad
        existingItem.quantity -= 1;
      } else {
        // Eliminar el ítem si solo queda 1
        const index = newCart.findIndex((item) => item.id === productId);
        newCart.splice(index, 1);
      }
    }
    updateCart(newCart);
  };

  const clearCart = () => updateCart([]);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Objeto que será accesible por cualquier componente
  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// 4. Hook personalizado para usar el carrito fácilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
