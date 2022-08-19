import AudioListItem from './AudioListItem';
import styled from '@emotion/styled/macro';
import { useMemo } from 'react';

const StyledAudioList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function AudioList({ audios, children }) {
	const items = useMemo(
		() => audios?.map(a => <AudioListItem key={a.file.id} audio={a} />),
		[audios]
	);

	return (
		<StyledAudioList>
			{children}
			{items}
		</StyledAudioList>
	);
}
