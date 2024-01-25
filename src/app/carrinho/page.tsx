'use client';


import imageOfAFemalePerson from '../../../public/svgs/carrinho/image-of-a-female-person.svg'
import iconMinusSign from '../../../public/svgs/carrinho/icon-minus-sign.svg'
import iconPlusSign from '../../../public/svgs/carrinho/icon-plus-sign.svg'
import iconTrash from '../../../public/svgs/carrinho/icon-trash.svg'
import loadSpinner from '../../../public/imgs/load-spinner.png'

import {
	Body,
	BodyMobile,
	BodyProduct,
	BodyProductBottom,
	BodyProductMobile,
	BodyProductTop,
	BodyProductTopBottom,
	BodyQuantity,
	BodyQuantityMobile,
	BodyRemove,
	BodyRemoveMobile,
	BodySubTotalMobileTitle,
	BodySubtotal,
	BodySubtotalMobile,
	Button,
	ButtonQuantity,
	ButtonQuantityMobile,
	FinalizeOrder,
	Footer,
	FooterTotal,
	Grid,
	GridCart,
	Header,
	HeaderEmpty,
	HeaderProduct,
	HeaderQuantity,
	HeaderSubtotal,
	LoadSpinner,
	ProductPrice,
	ProductPriceMobile,
	ProductTitle,
	ProductTitleMobile,
	ProductTitlePrice,
	Quantity,
	QuantityMobile,
	Remove,
	Section,
	StyledImage,
	Title,
	TotalPrice,
	TotalTitle
} from './styles';

import { IProduct, useCart } from '../providers/cart-provider';

import Image from 'next/image';

export default function PageCarrinho() {

	const { cart, handleDecrease, handleIncrease, handleRemove, finalizeOrder, isLoading } = useCart();

	return (

		<main>

			<Section>

				{isLoading ? (
					<LoadSpinner src={loadSpinner} alt='' width={62} height={62} />
				) : cart.length === 0 ? (
					<Grid>
						<Title>Parece que não há nada por aqui :&#40;</Title>
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
							<>
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


								<BodyMobile>

									<Image src={product.image} alt={product.title} width={64} height={82} />

									<BodyProductTopBottom>

										<BodyProductTop>

											<ProductTitleMobile>{product.title}</ProductTitleMobile>
											<ProductPriceMobile>
												{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
											</ProductPriceMobile>
											<BodyRemoveMobile>
												<Remove onClick={() => handleRemove(product.id)}><Image src={iconTrash} alt='' /></Remove>
											</BodyRemoveMobile>
										</BodyProductTop>

										<BodyProductBottom>
											<BodyQuantityMobile>
												<ButtonQuantityMobile onClick={() => handleDecrease(product.id)}><Image src={iconMinusSign} alt='' /></ButtonQuantityMobile>
												<QuantityMobile type="text" readOnly value={product.quantity} />
												<ButtonQuantityMobile onClick={() => handleIncrease(product.id)}><Image src={iconPlusSign} alt='' /></ButtonQuantityMobile>
											</BodyQuantityMobile>

											<BodySubtotalMobile>
												<BodySubTotalMobileTitle>Subtotal</BodySubTotalMobileTitle>
												{(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
											</BodySubtotalMobile>
										</BodyProductBottom>

									</BodyProductTopBottom>


								</BodyMobile>
							</>
						))}

						<Footer>
							<FinalizeOrder onClick={finalizeOrder}>Finalizar o pedido</FinalizeOrder>
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