import styled from '@emotion/styled/macro';

const StyledButton = styled.button`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	cursor: pointer;
	color: #168be8;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: ${({ borderRadius }) => borderRadius ?? '5px'};
	outline: none;
	text-decoration: none;
	position: relative;
	height: 100%;
	width: ${({ width }) => width ?? '100%'};
	padding: ${({ padding }) => padding ?? '16px'};
	z-index: 1;
	will-change: transform;
	transform: perspective(1px) translateZ(0);
	transition: all 0.15s ease-in-out;

	&:hover {
		box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px,
			rgb(0 0 0 / 8%) 0px 3px 6px 0px, rgb(0 0 0 / 6%) 0px 0px 1px 0px inset;
		transform: translateY(-1px);
		transition: all 0.15s ease-in-out;
	}

	&:disabled {
		opacity: 50%;
		cursor: not-allowed;
		pointer-events: none;
		color: #333;
		background-color: #fff;
	}

	> * {
		user-select: none;
	}

	> a {
		text-decoration: none;
	}
`;

const Button = props => <StyledButton {...props} />;

export default Button;
