import styled from '@emotion/styled/macro';
import { useMemo } from 'react';
import DocumentListItem from './DocumentListItem';

const StyledDocumentList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function DocumentList({ documents, children }) {
	const items = useMemo(
		() =>
			documents?.map(d => <DocumentListItem key={d.file.id} document={d} />),
		[documents]
	);

	return ( 
		<StyledDocumentList>
			{children}
			{items}
		</StyledDocumentList>
	);
}
