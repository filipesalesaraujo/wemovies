'use client';

import Image from "next/image";

import iconBasket from "../../../../public/svgs/header/icon-basket.svg";

import { useCart } from "../../providers/cart-provider";

import { Cart, CartAmount, CartText, CartTitle, Grid, Header, Logo } from "./styles";

export default function LayoutHeader() {
  const { cart } = useCart();

  return (
		<Header>
		<Grid>
			<Logo href="/" aria-label="Home page">WeMovies</Logo>
			<Cart role="button" aria-label="Meu Carrinho">
				<CartText>
					<CartTitle>Meu Carrinho</CartTitle>
					<CartAmount>{cart.length} itens</CartAmount>
				</CartText>
				<Image src={iconBasket} alt="Ícone do carrinho de compras" />
			</Cart>
		</Grid>
	</Header>
  )
}