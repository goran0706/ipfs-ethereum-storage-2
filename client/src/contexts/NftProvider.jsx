import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useStorageContract } from '../hooks/useContract';

export const NftContext = createContext();

export default function NftProvider({ children }) {
	const [nfts, setNfts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const storage = useStorageContract();

	const addNft = async nft => {
		setIsLoading(true);
		const receipt = await storage?.addNft(nft);
		await receipt.wait();
		setIsLoading(false);
	};

	const getAllNfts = useCallback(async () => {
		setIsLoading(true);
		const results = await storage?.getAllNfts();
		setNfts(results);
		setIsLoading(false);
	}, [storage]);

	const updateNft = async (id, nft) => {
		setIsLoading(true);
		const receipt = await storage?.updateNft(id, nft);
		await receipt.wait();
		setIsLoading(false);
	};

	const deleteNft = async id => {
		setIsLoading(true);
		const receipt = await storage?.deleteNft(id);
		await receipt.wait();
		setIsLoading(false);
	};

	useEffect(() => {
		getAllNfts();
	}, [getAllNfts]);

	const value = {
		nfts,
		isLoading,
		addNft,
		getAllNfts,
		updateNft,
		deleteNft,
	};

	return <NftContext.Provider value={value}>{children}</NftContext.Provider>;
}
