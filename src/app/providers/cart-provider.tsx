'use client';

import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

export interface IProduct {
	id: string;
	title: string;
	price: number;
	image: string;
	quantity: number;
}

export interface CartState {
	isLoading: boolean;
	cart: IProduct[];
	totalQuantity: number;
	addToCart: (product: IProduct) => void;
	getQuantity: (productTitle: string) => number;
	handleIncrease: (productTitle: string) => void;
	handleDecrease: (productTitle: string) => void;
	handleRemove: (productId: string) => void;
	finalizeOrder: () => void;
}

export const CartContext = createContext<CartState | undefined>(undefined);

const ADD_TO_CART = 'ADD_TO_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

function cartReducer(state: IProduct[], action: { type: string; product: IProduct }) {
	switch (action.type) {
		case ADD_TO_CART:
			const productExists = state.find(product => product.id === action.product.id);
			if (productExists) {
				return state.map(product =>
					product.id === action.product.id ? { ...product, quantity: product.quantity + 1 } : product
				);
			} else {
				return [...state, { ...action.product, quantity: 1 }];
			}
		case INCREASE_QUANTITY:
			return state.map(product =>
				product.id === action.product.id ? { ...product, quantity: product.quantity + 1 } : product
			);
		case DECREASE_QUANTITY:
			return state.map(product =>
				product.id === action.product.id ? { ...product, quantity: product.quantity - 1 } : product
			);
		case REMOVE_FROM_CART:
			return state.filter(product => product.id !== action.product.id);
		case CLEAR_CART:
			return [];
		default:
			return state;
	}
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const initialState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : [];
	const [cart, dispatch] = useReducer(cartReducer, initialState);
	const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	const addToCart = (product: IProduct) => {
		dispatch({ type: ADD_TO_CART, product });
	};

	const getQuantity = (productId: string) => {
		const product = cart.find(product => product.id === productId);
		return product ? product.quantity : 0;
	};

	const handleIncrease = (productId: string) => {
		const product = cart.find(product => product.id === productId);
		if (product) {
			dispatch({ type: INCREASE_QUANTITY, product });
		}
	};

	const handleDecrease = (productId: string) => {
		const product = cart.find(product => product.id === productId);
		if (product && product.quantity > 1) {
			dispatch({ type: DECREASE_QUANTITY, product });
		}
	};

	const handleRemove = (productId: string) => {
		const product = cart.find(product => product.id === productId);
		if (product) {
			dispatch({ type: REMOVE_FROM_CART, product });
		}
	};

	const finalizeOrder = async () => {
		setIsLoading(true);
		try {
			dispatch({ type: CLEAR_CART, product: { id: '', title: '', price: 0, image: '', quantity: 0 } });
			await router.push('/compra-realizada');
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<CartContext.Provider value={{ cart, totalQuantity, addToCart, getQuantity, handleIncrease, handleDecrease, handleRemove, finalizeOrder, isLoading }}>
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