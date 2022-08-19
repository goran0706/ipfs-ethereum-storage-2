import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useStorageContract } from '../hooks/useContract';

export const PhotoContext = createContext();

export default function PhotoProvider({ children }) {
	const [photos, setPhotos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const storage = useStorageContract();

	const addPhoto = async photo => {
		setIsLoading(true);
		const receipt = await storage?.addPhoto(photo);
		await receipt.wait();
		setIsLoading(false);
	};

	const getAllPhotos = useCallback(async () => {
		setIsLoading(true);
		setPhotos(await storage?.getAllPhotos());
		setIsLoading(false);
	}, [storage]);

	const updatePhoto = async (id, photo) => {
		setIsLoading(true);
		const receipt = await storage?.updatePhoto(id, photo);
		await receipt.wait();
		setIsLoading(false);
	};

	const deletePhoto = async id => {
		setIsLoading(true);
		const receipt = await storage?.deletePhoto(id);
		await receipt.wait();
		setIsLoading(false);
	};

	useEffect(() => {
		getAllPhotos();
	}, [getAllPhotos, isLoading]);

	const value = {
		photos,
		isLoading,
		addPhoto,
		getAllPhotos,
		updatePhoto,
		deletePhoto,
	};

	return (
		<PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
	);
}
