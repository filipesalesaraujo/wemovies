'use client';

import Link from "next/link";
import Image from "next/image";

import iconBasket from "../../../../public/svgs/header/icon-basket.svg";

import { Cart, CartAmount, CartText, CartTitle, Grid, Header, LogoLink } from "./styles";

export default function ComponentHeader() {
	return (
		<Header>
			<Grid>
				<Link passHref href="/">
					<LogoLink aria-label="Home page">WeMovies</LogoLink>
				</Link>
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
