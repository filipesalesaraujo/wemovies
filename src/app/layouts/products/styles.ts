import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #2F2E41;
	
`;

export const Grid = styled.div`
	max-width: 984px;
	width: 100%;

	padding: 24px 16px;

	display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 16px;
	}
`;