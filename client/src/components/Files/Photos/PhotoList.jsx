import styled from '@emotion/styled/macro';
import { useMemo } from 'react';
import PhotoListItem from './PhotoListItem';

const StyledPhotoList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function PhotoList({ photos, children }) {
	const items = useMemo(
		() => photos?.map(p => <PhotoListItem key={p.file.id} photo={p} />),
		[photos]
	);

	return (
		<StyledPhotoList>
			{children} 
			{items}
		</StyledPhotoList>
	);
}
