'use client';

import Image from "next/image";

import iconBasket from "../../../../public/svgs/header/icon-basket.svg";

import { Cart, CartAmount, CartText, CartTitle, Grid, Header, Logo } from "./styles";

export default function LayoutHeader() {
	return (
		<Header>
			<Grid>
				<Logo href="/" aria-label="Home page">WeMovies</Logo>
				<Cart role="button" aria-label="Meu Carrinho">
					<CartText>
						<CartTitle>Meu Carrinho</CartTitle>
						<CartAmount>0 itens</CartAmount>
					</CartText>
					<Image src={iconBasket} alt="Ícone do carrinho de compras" />
				</Cart>
			</Grid>
		</Header>
	)
}
