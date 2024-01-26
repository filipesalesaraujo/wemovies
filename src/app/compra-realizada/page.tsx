'use client';

import { Button, Grid, Section, StyledImage, Title } from "./styles";

import manGivingThumbsUp from '../../../public/svgs/compra-realizada/man-giving-thumbs-up.svg'

export default function PageCompraRealizada() {
	return (

		<main>
			<Section>
				<Grid>
					<Title>Compra realizada com sucesso!</Title>
					<StyledImage src={manGivingThumbsUp} alt=""></StyledImage>
					<Button href="/">Voltar</Button>
				</Grid>
			</Section>
		</main>

	)
}