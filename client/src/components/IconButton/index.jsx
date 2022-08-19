import Button from '../Button';
import styled from '@emotion/styled/macro';

export const StyledIconButton = styled(Button)`
	color: #fff;
	background-color: crimson;
	padding: 1rem;
	opacity: 0.2;
	width: ${({ width }) => width ?? '48px'};
	height: ${({ height }) => height ?? '100%'};

	&:hover {
		opacity: 1;
		box-shadow: none;
		transform: translateY(0);
		transition: all 0.15s ease-in-out;
	}
`;

const IconButton = ({ onClick, children }) => (
	<StyledIconButton onClick={onClick}>{children}</StyledIconButton>
);

export default IconButton;
