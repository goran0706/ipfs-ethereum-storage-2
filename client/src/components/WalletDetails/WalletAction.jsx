import styled from '@emotion/styled/macro';

const ConnectButton = styled.button`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	cursor: pointer;
	color: #168be8;
	background-color: #fff;
	border-radius: 5px; 
	border: none;
	outline: none;
	height: 100%;
	width: 40px;
	transition: all 0.15s ease-in-out;
	&:hover {
		color: #fff;
		background-color: #168be8;
		transition: all 0.15s ease-in-out;
	}
`;

export default function WalletAction({ action, children }) {
	return <ConnectButton onClick={action}>{children}</ConnectButton>;
}
