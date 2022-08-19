import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useStorageContract } from '../hooks/useContract';

export const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
	const [favorites, setFavorites] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const storage = useStorageContract();

	const getAllFavorites = useCallback(async () => {
		setIsLoading(true);
		const [nfts, photos, audios, videos, documents] = await Promise.all([
			storage?.getAllNfts() || [],
			storage?.getAllPhotos() || [],
			storage?.getAllAudios() || [],
			storage?.getAllVideos() || [],
			storage?.getAllDocuments() || [],
		]);
		setFavorites(
			[...nfts, ...photos, ...audios, ...videos, ...documents].filter(
				item => item.file.isFavorite === true
			)
		);
		setIsLoading(false);
	}, [storage]);

	useEffect(() => {
		getAllFavorites();
	}, [getAllFavorites, isLoading]);

	const value = {
		favorites,
		isLoading,
		getAllFavorites,
	};

	return (
		<FavoriteContext.Provider value={value}>
			{children}
		</FavoriteContext.Provider>
	);
}
