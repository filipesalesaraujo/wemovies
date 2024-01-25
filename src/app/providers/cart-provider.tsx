'use client'

import React, { createContext, useReducer, useContext, useEffect } from 'react';

interface Product {
	title: string;
	price: number;
	image: string;
}

interface CartState {
	cart: Product[];
	addToCart: (product: Product) => void;
	getQuantity: (productTitle: string) => number;
}

export const CartContext = createContext<CartState | undefined>(undefined);

const ADD_TO_CART = 'ADD_TO_CART';

function cartReducer(state: Product[], action: { type: string; product: Product }) {
	switch (action.type) {
		case ADD_TO_CART:
			return [...state, action.product];
		default:
			return state;
	}
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
	const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('cart') || '[]'));

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product: Product) => {
		dispatch({ type: ADD_TO_CART, product });
	};

	const getQuantity = (productTitle: string) => {
		return cart.filter(product => product.title === productTitle).length;
	};

	return (
    <CartContext.Provider value={{ cart, addToCart, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}