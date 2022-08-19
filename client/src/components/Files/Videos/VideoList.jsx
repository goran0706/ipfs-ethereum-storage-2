import styled from '@emotion/styled/macro';
import { useMemo } from 'react';
import VideoListItem from './VideoListItem';

const StyledVideoList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function VideoList({ videos, children }) {
	const items = useMemo(
		() => videos?.map(v => <VideoListItem key={v.file.id} video={v} />),
		[videos]
	);

	return (
		<StyledVideoList>
			{children}
			{items}
		</StyledVideoList>
	);
}
