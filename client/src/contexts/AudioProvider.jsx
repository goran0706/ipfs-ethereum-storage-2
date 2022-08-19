import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useStorageContract } from '../hooks/useContract';

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
	const [audios, setAudios] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const storage = useStorageContract();

	const addAudio = async audio => {
		setIsLoading(true);
		const receipt = await storage?.addAudio(audio);
		await receipt.wait();
		setIsLoading(false);
	};

	const getAllAudios = useCallback(async () => {
		setIsLoading(true);
		setAudios(await storage?.getAllAudios());
		setIsLoading(false);
	}, [storage]);

	const updateAudio = async (id, audio) => {
		setIsLoading(true);
		const receipt = await storage?.updateAudio(id, audio);
		await receipt.wait();
		setIsLoading(false);
	};

	const deleteAudio = async id => {
		setIsLoading(true);
		const receipt = await storage?.deleteAudio(id);
		await receipt.wait();
		setIsLoading(false);
	};

	useEffect(() => {
		getAllAudios();
	}, [getAllAudios, isLoading]);

	const value = {
		audios,
		isLoading,
		addAudio,
		getAllAudios,
		updateAudio,
		deleteAudio,
	};

	return (
		<AudioContext.Provider value={value}>{children}</AudioContext.Provider>
	);
}
