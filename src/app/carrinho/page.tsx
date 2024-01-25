'use client';

import imageOfAFemalePerson from '../../../public/svgs/carrinho/image-of-a-female-person.svg'

import { Button, Grid, Section, StyledImage, Title } from './styles';

export default function PageCarrinho() {
	return (
		<main>
			<Section>
				<Grid>
					<Title>Parece que não há nada por aqui :(</Title>
					<StyledImage src={imageOfAFemalePerson} alt="" />
					<Button href="/">Voltar</Button>
				</Grid>
			</Section>
		</main >
	)
}