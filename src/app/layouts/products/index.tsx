'use client';

import { Product } from "./interfaces";

import { Grid, Section } from "./styles";

import ComponentProduct from "@/app/components/product";

export async function getData() {
	const res = await fetch('http://localhost:3001/products');
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export default async function LayoutProducts() {

	const products = await getData()

	return (
		<Section>
			<Grid>
				{products.map((product: Product) => (
					<ComponentProduct
						key={product.id}
						image={product.image}
						title={product.title}
						price={product.price}
					/>
				))}
			</Grid>
		</Section>
	);
}