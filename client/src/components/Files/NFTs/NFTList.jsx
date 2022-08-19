import styled from '@emotion/styled/macro';
import { useMemo } from 'react';
import NFTListItem from './NFTListItem';

const StyledNFTList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function NFTList({ nfts, children }) {
	const items = useMemo(
		() => nfts?.map(n => <NFTListItem key={n.file.id} nft={n} />),
		[nfts]
	);

	return (
		<StyledNFTList>
			{children}
			{items}
		</StyledNFTList>
	);
}
