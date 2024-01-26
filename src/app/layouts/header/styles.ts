import Link from "next/link";

import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2F2E41;
`;

export const Grid = styled.div`
	max-width: 960px;
	width: 100%;

	padding: 18px 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled(Link)`
	font-size: 20px;
	font-weight: 700;
	transition: 0.3s opacity;
	color: white;
	&:hover, &:active, &:focus{
		opacity: 0.6;
	}
`

export const Cart = styled(Link)`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	gap: 8px;

	transition: 0.3s opacity;
	&:hover, &:active, &:focus{
		opacity: 0.6;
	}
`;

export const CartText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const CartTitle = styled.p`
	font-size: 14px;
	font-weight: 600;
	color: white;
	@media (max-width: 768px) {
		display: none;
	}
`;


export const CartAmount = styled.p`
	color: #999999;
	font-size: 12px;
	font-weight: 600;
`;