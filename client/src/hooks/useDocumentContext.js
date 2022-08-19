import { useContext } from 'react';
import { DocumentContext } from '../contexts/DocumentProvider';

export default function useDocumentContext() {
	const context = useContext(DocumentContext);
	if (!context) {
		throw new Error(
			'useDocumentContext must be used within a DocumentProvider'
		);
	}

	return { ...context };
}
