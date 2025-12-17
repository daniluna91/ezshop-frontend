import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product } from "../types/models";

// definir la forma del Contexto (lo que proveerá el hook)
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// crear el Contexto con valores iniciales
const CartContext = createContext<CartContextType | undefined>(undefined);

// crear el Proveedor (Provider) que envuelve la App
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // usamos localStorage para que el carrito se guarde al cerrar el navegador
  const [cart, setCart] = useState<CartItem[]>(() => {
    const localData = localStorage.getItem("ezshopCart");
    return localData ? JSON.parse(localData) : [];
  });

  // funcion para actualizar el estado y localStorage
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("ezshopCart", JSON.stringify(newCart));
  };

  const addToCart = (product: Product) => {
    const newCart = cart.map((item) => ({ ...item })); // crear copia profunda para inmutabilidad

    const existingItem = newCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    updateCart(newCart);
  };

  // funcion para eliminar un producto del carrito
  const removeFromCart = (productId: number) => {
    const newCart = cart.map((item) => ({ ...item }));
    const existingItem = newCart.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        // disminuir la cantidad
        existingItem.quantity -= 1;
      } else {
        // eliminar el ítem si solo queda 1
        const index = newCart.findIndex((item) => item.id === productId);
        newCart.splice(index, 1);
      }
    }
    updateCart(newCart);
  };

  // funcion para vaciar el carrito
  const clearCart = () => updateCart([]);

  // funcion para obtener el total de items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // funcion para obtener el total de precio
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // objeto que es accesible por cualquier componente
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

// hook personalizado para usar el carrito facilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
