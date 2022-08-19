import { useMemo } from 'react';
import NetworkListItem from './NetworkListItem';
import styled from '@emotion/styled/macro';

const StyledNetworkList = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function NetworkList({ networks }) {
	const items = useMemo(
		() =>
			networks.map(n => <NetworkListItem key={n.chainId} networkDetails={n} />),
		[networks]
	);

	return <StyledNetworkList>{items}</StyledNetworkList>;
}
