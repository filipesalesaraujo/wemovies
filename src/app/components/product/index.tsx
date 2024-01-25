import Image from "next/image";

import iconShoppingCartWithPlusSign from "../../../../public/svgs/products/icon-shopping-cart-with-plus-sign.svg";

import { Button, ButtonAmount, ButtonText, Card, Price, Title } from "./styles";

import { Product } from "./interfaces";

export default function ComponentProduct({title, price, image }: Product) {
	return (
		<Card>
			<Image src={image} alt={title} width={147} height={188} />
			<Title>{title}</Title>
			<Price>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Price>
			<Button>
				<ButtonAmount>
					<Image src={iconShoppingCartWithPlusSign} alt="" />
					<p>0</p>
				</ButtonAmount>
				<ButtonText>Adicionar ao carrinho</ButtonText>
			</Button>
		</Card>
	)
}