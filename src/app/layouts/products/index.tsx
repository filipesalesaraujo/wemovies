'use client';

import React, { useEffect, useState } from 'react';

import { IProduct } from "./interfaces";

import { Grid, Section } from "./styles";

import ComponentProduct from "@/app/components/product";

export default function LayoutProducts() {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		fetch('http://localhost:3001/products')
			.then(res => {
				if (!res.ok) {
					throw new Error('Failed to fetch data')
				}
				return res.json();
			})
			.then(data => setProducts(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<Section>
			<Grid>
				{products.map((product: IProduct) => (
					<ComponentProduct
						key={product.id}
						id={product.id}
						image={product.image}
						title={product.title}
						price={product.price}
					/>
				))}
			</Grid>
		</Section>
	);
}