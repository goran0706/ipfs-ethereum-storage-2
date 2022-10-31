import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useStorageContract } from '../hooks/useContract';

export const DocumentContext = createContext();

export default function DocumentProvider({ children }) {
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const storage = useStorageContract();

    const addDocument = async (document) => {
        setIsLoading(true);
        const receipt = await storage?.addDocument(document);
        await receipt.wait();
        setIsLoading(false);
    };

    const getAllDocuments = useCallback(async () => {
        setIsLoading(true);
        setDocuments(await storage?.getAllDocuments());
        setIsLoading(false);
    }, [storage]);

    const updateDocument = async (id, document) => {
        setIsLoading(true);
        const receipt = await storage?.updateDocument(id, document);
        await receipt.wait();
        setIsLoading(false);
    };

    const deleteDocument = async (id) => {
        setIsLoading(true);
        const receipt = await storage?.deleteDocument(id);
        await receipt.wait();
        setIsLoading(false);
    };

    useEffect(() => {
        getAllDocuments();
    }, [getAllDocuments, isLoading]);

    const value = {
        documents,
        isLoading,
        addDocument,
        getAllDocuments,
        updateDocument,
        deleteDocument,
    };

    return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>;
}
