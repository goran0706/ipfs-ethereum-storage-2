import DropdownMenu from '../DropdownMenu';
import Paragraph from '../shared/Paragraph';
import TransactionList from './TransactionList';

export default function TransactionMenu() {
	return (
		<DropdownMenu btnContent='Transactions'>
			<Paragraph>Recent Transactions</Paragraph>
			<TransactionList transactions={[]} />
		</DropdownMenu>
	);
}
