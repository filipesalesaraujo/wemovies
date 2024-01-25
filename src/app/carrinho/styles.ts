import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Grid = styled.div`
	max-width: 950px;
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

export const GridCart = styled.div`
	max-width: 950px;
	width: 100%;
	border-radius: 4px;
	background-color: #fff;
	padding: 24px;
	margin-top: 24px;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
`;

export const HeaderProduct = styled.div`
	color: #999999;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 700;
	max-width: 446px;
	width: 100%;
`;

export const HeaderQuantity = styled.div`
	color: #999999;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 700;
	max-width: 171px;
	width: 100%;
`;

export const HeaderSubtotal = styled.div`
	color: #999999;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 700;
	max-width: 266px;
	width: 100%;
`;

export const HeaderEmpty = styled.div``;

export const Body = styled.div`
	display: flex;
	border-bottom: 1px solid #999999;
	padding: 21px 0;
	margin-bottom: 21px;
`;

export const BodyProduct = styled.div`
	max-width: 446px;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 52px;
`;

export const BodyQuantity = styled.div`
	max-width: 171px;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 11px;
`;

export const BodySubtotal = styled.div`
	max-width: 266px;
	width: 100%;
	color: #2F2E41;
	font-size: 16px;
	font-weight: 700;
	display: flex;
	align-items: center;
`;

export const BodyRemove = styled.div`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ProductTitlePrice = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ProductTitle = styled.div`
	color: #2F2E41;
	font-weight: 700;
	font-size: 14px;
`;

export const ProductPrice = styled.div`
	color: #2F2E41;
	font-weight: 700;
	font-size: 16px;
	
`;

export const ButtonQuantity = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

export const Quantity = styled.input`
	border: 1px solid #D9D9D9;
	border-radius: 4px;
	width: 100%;
	text-align: center;
	max-width: 62px;
	width: 100%;
	height: 26px;
	background-color: #fff;
	color: #2F2E41;
	cursor: default;
	outline: none;
`;

export const Remove = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	transition: opacity 0.2s ease-in-out;
	&:hover, &:active, &;focus{
		opacity: 0.5;
	}
`;

export const FinalizeOrder = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	max-width: 235px;
	width: 100%;
	height: 40px;
	background-color: #009EDD;
	border-radius: 4px;
	color: white;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FooterTotal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	padding-right: 20px;
`;

export const TotalTitle = styled.div`
	color: #999;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
`;

export const TotalPrice = styled.div`
	color: #2F2E41;
	font-size: 24px;
	font-weight: 700;
`;