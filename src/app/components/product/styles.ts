import styled, { css, keyframes } from "styled-components";

import { IButton } from "./interfaces";
import Image from "next/image";

export const Card = styled.div`
	max-width: 309px;
	width: 100%;
	height: 305px;
	background: #FFFFFF;
	border-radius: 4px;
	padding: 10px 11px 10px 11px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const Title = styled.h1`
	color: #333333;
	font-size: 12px;
	font-weight: 700;
`;

export const Price = styled.p`
	font-weight: 700;
	font-size: 16px;
	color: #2F2E41;
`;

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: #009EDD;
  height: 40px;
  transition: opacity 0.2s ease-in-out;

  &:hover, &:active, &:focus {
    opacity: 0.8;
  }

	${({ $isadded }) => $isadded === 'true' && css`
    background-color: green;
    cursor: default;

    &:hover, &:active, &:focus {
      background-color: green;
      opacity: 1;
    }
  `}
`;

export const ButtonAmount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	gap: 4px;
	color: #FFFFFF;
`;

export const ButtonText = styled.p`
	font-weight: 700;
	font-size: 12px;
	color: #FFFFFF;
	text-transform: uppercase;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadSpinner = styled(Image)`
  animation: ${spin} 2s linear infinite;
	margin-top: 25px;
`;