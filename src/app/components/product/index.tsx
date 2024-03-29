'use client';

import React, { useState, useEffect } from 'react';

import Image from "next/image";

import { useCart } from "../../providers/cart-provider";

import iconShoppingCartWithPlusSign from "../../../../public/svgs/products/icon-shopping-cart-with-plus-sign.svg";
import loadSpinner from '../../../../public/imgs/load-spinner.png'

import { Button, ButtonAmount, ButtonText, Card, LoadSpinner, Price, Title } from "./styles";

import { IProduct } from "./interfaces";

export default function ComponentProduct({ id, title, price, image }: IProduct) {
	const { addToCart, getQuantity } = useCart();
	const [isAdded, setIsAdded] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

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
			{!isImageLoaded && <LoadSpinner src={loadSpinner} alt='' width={62} height={62} />}
			<Image src={image} alt={title} width={147} height={188} priority onLoad={() => setIsImageLoaded(true)} style={{ display: isImageLoaded ? 'block' : 'none' }}/>
			<Title>{title}</Title>
			<Price>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
			<Button onClick={handleAddToCart} disabled={isAdded} $isadded={isAdded.toString()}>
				<ButtonAmount>
					<Image src={iconShoppingCartWithPlusSign} alt="" />
					<p>{getQuantity(id)}</p>
				</ButtonAmount>
				<ButtonText>{isAdded ? 'Item adicionado' : 'Adicionar ao carrinho'}</ButtonText>
			</Button>
		</Card>
	)
}

