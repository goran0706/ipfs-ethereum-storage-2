import { useContext } from 'react';
import { NftContext } from '../contexts/NftProvider';

export default function useNftContext() {
	const context = useContext(NftContext);
	if (!context) {
		throw new Error('useNftContext must be used within a NftProvider');
	}

	return { ...context };
}
