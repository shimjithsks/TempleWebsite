import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of a single cart item
export interface CartItem {
  cartId: number; // Unique ID for the cart entry
  id: number; // Pooja ID
  name: string;
  price: number;
  quantity: number;
  bookingName: string;
  bookingStar: string;
  bookingDate: Date | null;
}

// Define the shape of the context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'cartId'>) => void;
  removeFromCart: (cartId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

// Create the context with a default value of undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'cartId'>) => {
    setCart((prevItems) => {
      // Add the new item with a unique cartId
      const newCartItem = { ...item, cartId: Date.now() };
      return [...prevItems, newCartItem];
    });
  };

  const removeFromCart = (cartId: number) => {
    setCart((prevItems) => prevItems.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
