import React, { useState, useEffect } from 'react';

import Image from "next/image";

import { useCart } from "../../providers/cart-provider";

import iconShoppingCartWithPlusSign from "../../../../public/svgs/products/icon-shopping-cart-with-plus-sign.svg";

import { Button, ButtonAmount, ButtonText, Card, Price, Title } from "./styles";

import { IProduct } from "./interfaces";

export default function ComponentProduct({ id, title, price, image }: IProduct) {
	const { addToCart, getQuantity } = useCart();
	const [isAdded, setIsAdded] = useState(false);

	useEffect(() => {
			if (getQuantity(String(id)) > 0) {
					setIsAdded(true);
			}
	}, []);

	const handleAddToCart = () => {
			const quantity = 1; 
			addToCart({ id, title, price, image, quantity });
			setIsAdded(true);
	};

	return (
			<Card>
					<Image src={image} alt={title} width={147} height={188} />
					<Title>{title}</Title>
					<Price>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
					<Button onClick={handleAddToCart} disabled={isAdded} isAdded={isAdded}>
							<ButtonAmount>
									<Image src={iconShoppingCartWithPlusSign} alt="" />
									<p>{getQuantity(id)}</p>
							</ButtonAmount>
							<ButtonText>{isAdded ? 'Item adicionado' : 'Adicionar ao carrinho'}</ButtonText>
					</Button>
			</Card>
	)
}