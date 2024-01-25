'use client';

import Link from 'next/link';

import imageOfAFemalePerson from '../../../public/svgs/carrinho/image-of-a-female-person.svg'

import iconMinusSign from '../../../public/svgs/carrinho/icon-minus-sign.svg'
import iconPlusSign from '../../../public/svgs/carrinho/icon-plus-sign.svg'
import iconTrash from '../../../public/svgs/carrinho/icon-trash.svg'

import { Button, Grid, Section, StyledImage, Title } from './styles';

import { IProduct, useCart } from '../providers/cart-provider';

import Image from 'next/image';
import styled from 'styled-components';


export default function PageCarrinho() {

	const { cart, handleDecrease, handleIncrease, handleRemove } = useCart();

	return (
		<main>
			<Section>

				{cart.length === 0 ? (
					<Grid>
						<Title>Parece que não há nada por aqui :(</Title>
						<StyledImage src={imageOfAFemalePerson} alt="" />
						<Button href="/">Voltar</Button>
					</Grid>
				) : (
					<GridCart>

						<Header>
							<HeaderProduct>Produto</HeaderProduct>
							<HeaderQuantity>Qtd</HeaderQuantity>
							<HeaderSubtotal>Subtotal</HeaderSubtotal>
							<HeaderEmpty></HeaderEmpty>
						</Header>

						{cart.map((product: IProduct) => (
							<Body key={product.id}>
								<BodyProduct>
									<Image src={product.image} alt={product.title} width={89} height={114} />
									<ProductTitlePrice>
										<ProductTitle>{product.title}</ProductTitle>
										<ProductPrice>
											{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
										</ProductPrice>
									</ProductTitlePrice>
								</BodyProduct>

								<BodyQuantity>
									<ButtonQuantity onClick={() => handleDecrease(product.id)}><Image src={iconMinusSign} alt='' /></ButtonQuantity>
									<Quantity type="text" readOnly value={product.quantity} />
									<ButtonQuantity onClick={() => handleIncrease(product.id)}><Image src={iconPlusSign} alt='' /></ButtonQuantity>
								</BodyQuantity>

								<BodySubtotal>
									{(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</BodySubtotal>

								<BodyRemove>
									<Remove onClick={() => handleRemove(product.id)}><Image src={iconTrash} alt='' /></Remove>
								</BodyRemove>
							</Body>
						))}

						<Footer>
							<FinalizeOrder href="">Finalizar o pedido</FinalizeOrder>
							<FooterTotal>
								<TotalTitle>Total</TotalTitle>
								<TotalPrice>
									{cart.reduce((total, product) => total + product.price * product.quantity, 0)
										.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</TotalPrice>
							</FooterTotal>
						</Footer>

					</GridCart>
				)}
			</Section>
		</main >
	)
}