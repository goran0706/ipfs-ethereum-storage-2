import { useMemo } from 'react';
import jazzicon from '@metamask/jazzicon';
import styled from '@emotion/styled/macro';

const IconWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	color: #168be8;
	background-color: #ebf0f4;
	border-radius: 5px;
	border: none;
	outline: none;
	height: 36px;
	width: 40px;
`;

export default function Identicon({ account, size }) {
	const icon = useMemo(
		() => account && jazzicon(size, parseInt(account.slice(2, 10), 16)),
		[account, size]
	);

	return <IconWrapper dangerouslySetInnerHTML={{ __html: icon?.outerHTML }} />;
}
