import styled from '@emotion/styled/macro';

const BaseCard = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: center;
	width: 180px;
	height: 250px;
	padding: 1rem;
	overflow: hidden;
	color: #333;
	background-color: #fff;
	box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px,
		rgb(0 0 0 / 8%) 0px 3px 6px 0px, rgb(0 0 0 / 6%) 0px 0px 1px 0px inset;
	border-radius: 5px;
	font-family: 'Roboto', sans-serif;
	font-size: 13.5px;
	font-style: normal;
	font-weight: 400;
	line-height: 16px;
	transition: all 0.15s ease-in-out;

	&:hover {
		color: #fff;
		background-color: #168be8;
		cursor: pointer;
		transition: all 0.15s ease-in-out;

		svg,
		p {
			color: #fff;
			transition: all 0.15s ease-in-out;
		}
	}
`;

export const CardNft = styled(BaseCard)`
	position: relative;
	gap: 5px;
`;

export const CardPhoto = styled(BaseCard)`
	position: relative;
	gap: 5px;
`;

export const CardAudio = styled(BaseCard)`
	position: relative;
	gap: 5px;
`;

export const CardVideo = styled(BaseCard)`
	position: relative;
	gap: 5px;
`;

export const CardDocument = styled(BaseCard)``;
export const CardUploader = styled(BaseCard)`
	display: inline-block;
	padding: 0;
`;

export default function Card({ children }) {
	return <BaseCard>{children}</BaseCard>;
}
