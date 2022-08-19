import { FaCheck } from 'react-icons/fa';
import { GrTransaction } from 'react-icons/gr';
import styled from '@emotion/styled/macro';

const TransactionItem = styled.li`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 1rem;
`;

const TransactionLink = styled.a`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	color: #333;
	background: #fff;
	border-radius: 5px;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	font-family: 'Roboto', sans-serif;
	font-size: 13.5px;
	font-style: normal;
	font-weight: 400;
	line-height: 16px;
	padding: 0 10px;
	overflow: hidden;
	width: 180px;
	height: 48px;
	opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
	transition: color background-color 0.15s ease-in-out;
	&:hover {
		background-color: #168be8;
		color: #fff;
		cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
		transition: all 0.15s ease-in-out;
		a,
		p {
			color: #fff;
			transition: all 0.15s ease-in-out;
		}
	}
`;

const TransactionHash = styled.p`
	color: #333;
	margin-left: 10px;
	white-space: nowrap;
`;

export default function TransactionListItem({ transaction }) {
	return (
		<TransactionItem>
			<TransactionLink
				href='https://www.blockchain.com/explorer'
				target='_blank'
				rel='noopener noreferrer'>
				<GrTransaction size='24' />
				<TransactionHash>{23}</TransactionHash>
				<FaCheck size='24' color='green' />
			</TransactionLink>
		</TransactionItem>
	);
}
