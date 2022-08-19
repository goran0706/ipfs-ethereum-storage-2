import styled from '@emotion/styled/macro';
import React from 'react';

const StyledLogo = styled.div`
	color: ${({ color }) => color ?? '#fff'};
	font-size: 18px;
	letter-spacing: 2px;
	& > span:nth-of-type(1),
	& > span:nth-of-type(4) {
		font-size: 3rem;
		font-weight: bold;
	}
	& > span:nth-of-type(2),
	& > span:nth-of-type(5) {
		font-size: 1.5rem;
		font-weight: bolder;
		line-height: 18px;
	}
`;

export default function Logo({ color }) {
	return (
		<StyledLogo color={color}>
			<span>0</span>
			<span>x</span>
			<span>{'\u00A0|\u00A0'}</span>
			<span>S</span>
			<span>torage</span>
		</StyledLogo>
	);
}
