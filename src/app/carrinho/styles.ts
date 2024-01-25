import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Grid = styled.div`
	max-width: 984px;
	width: 100%;
	padding: 64px 0;
	border-radius: 4px;
	background-color: #fff;
	margin: 24px 16px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 36px;
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 700;
	color: #2F2E41;
	text-align: center;
	@media (max-width: 768px) {
		max-width: 200px;
		width: 100%;
	}
`;

export const StyledImage = styled(Image)`
	max-width: 100%;
`;

export const Button = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	max-width: 180px;
	width: 100%;
	height: 40px;
	border-radius: 4px;
	font-size: 14px;
	font-weight: 700;
	background-color: #009EDD;
	transition: opacity 0.2s ease-in-out;
	&:hover, &:focus , &:active {
		opacity: 0.8;
	}
`;
