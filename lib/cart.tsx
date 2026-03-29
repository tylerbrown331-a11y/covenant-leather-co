"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import type { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedCoverStyle: string;
  selectedPaperType: string;
  unitPrice: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; index: number }
  | { type: "UPDATE_QUANTITY"; index: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.findIndex(
        (i) =>
          i.product.id === action.item.product.id &&
          i.selectedSize === action.item.selectedSize &&
          i.selectedCoverStyle === action.item.selectedCoverStyle &&
          i.selectedPaperType === action.item.selectedPaperType
      );
      if (existing >= 0) {
        const updated = [...state.items];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + action.item.quantity,
        };
        return { items: updated };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE_ITEM": {
      return { items: state.items.filter((_, i) => i !== action.index) };
    }
    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return { items: state.items.filter((_, i) => i !== action.index) };
      }
      const updated = [...state.items];
      updated[action.index] = { ...updated[action.index], quantity: action.quantity };
      return { items: updated };
    }
    case "CLEAR_CART":
      return { items: [] };
    case "HYDRATE":
      return { items: action.items };
    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("clc_cart");
      if (stored) {
        dispatch({ type: "HYDRATE", items: JSON.parse(stored) });
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("clc_cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", item });
  const removeItem = (index: number) => dispatch({ type: "REMOVE_ITEM", index });
  const updateQuantity = (index: number, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", index, quantity });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function computePrice(product: Product, size: string): number {
  const upcharge = product.variant_pricing.size_upcharge[size] ?? 0;
  return product.price_base + upcharge;
}
