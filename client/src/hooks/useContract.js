import { ethers } from 'ethers';
import { STORAGE_CONTRACT_ADDRESS } from '../constants/contracts';
import { useMemo } from 'react';
import FileStorageAbi from '../abi/FileStorage.json';
import useWeb3Context from './useWeb3Context';

export default function useContract(address, ABI, withSigner) {
	const { library, chainId, account } = useWeb3Context();

	return useMemo(() => {
		if (!address || !ABI || !library || !chainId) return null;

		const _withSigner = withSigner
			? library?.getSigner(account).connectUnchecked()
			: library;

		try {
			return new ethers.Contract(address, ABI, _withSigner);
		} catch (error) {
			console.error('Failed to get contract', error);
			return null;
		}
	}, [ABI, account, address, chainId, library, withSigner]);
}

export function useStorageContract() {
	return useContract(STORAGE_CONTRACT_ADDRESS, FileStorageAbi, true);
}
