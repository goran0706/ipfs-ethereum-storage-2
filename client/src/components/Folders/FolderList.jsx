import FolderListItem from './FolderListItem';
import styled from '@emotion/styled/macro';

const StyledList = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function FolderList({ folders }) {
	const items = folders.map(f => <FolderListItem key={f} folder={f} />);

	return <StyledList>{items}</StyledList>;
}
