import { useMemo } from 'react';
import styled from '@emotion/styled/macro';
import TransactionListItem from './TransactionListItem';

const StyledTransactionList = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

export default function TransactionList({ transactions }) {
	const items = useMemo(
		() =>
			transactions.map(t => (
				<TransactionListItem key={t.hash} transaction={t} />
			)),
		[transactions]
	);

	return <StyledTransactionList>{items}</StyledTransactionList>;
}
