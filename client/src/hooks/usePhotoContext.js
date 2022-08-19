import { useContext } from 'react';
import { PhotoContext } from '../contexts/PhotoProvider';

export default function usePhotoContext() {
	const context = useContext(PhotoContext);
	if (!context) {
		throw new Error('usePhotoContext must be used within a PhotoProvider');
	}

	return { ...context };
}
