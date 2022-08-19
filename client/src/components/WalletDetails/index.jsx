import { copyAddress } from '../../utils';
import { TbPlugConnected, TbPlugConnectedX } from 'react-icons/tb';
import { useCallback, useMemo } from 'react';
import { useWeb3Context } from '../../hooks';
import Identicon from './Identicon';
import styled from '@emotion/styled/macro';
import WalletAction from './WalletAction';
import WalletAddress from './WalletAddress';

const Wallet = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	background-color: #ebf0f4;
	border: 1px solid #fff;
	border-radius: 5px;
	height: 36px;
`;

const CopyAddress = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;
	cursor: copy;
`;

export default function WalletDetails() {
	const { account, connect, disconnect } = useWeb3Context();

	const copy = useCallback(() => copyAddress(account), [account]);

	const action = useMemo(
		() => (!account ? connect : disconnect),
		[account, connect, disconnect]
	);

	const icon = useMemo(
		() =>
			!account ? <TbPlugConnectedX size='24' /> : <TbPlugConnected size='24' />,
		[account]
	);

	return (
		<Wallet>
			<CopyAddress onClick={() => copy()}>
				<Identicon account={account} size='24' />
				<WalletAddress account={account} />
			</CopyAddress>
			<WalletAction action={action}>{icon}</WalletAction>
		</Wallet>
	);
}
