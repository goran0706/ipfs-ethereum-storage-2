import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useStorageContract } from '../hooks/useContract';

export const VideoContext = createContext();

export default function VideoProvider({ children }) {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const storage = useStorageContract();

    const addVideo = async (video) => {
        setIsLoading(true);
        const receipt = await storage?.addVideo(video);
        await receipt.wait();
        setIsLoading(false);
    };

    const getAllVideos = useCallback(async () => {
        setIsLoading(true);
        setVideos(await storage?.getAllVideos());
        setIsLoading(false);
    }, [storage]);

    const updateVideo = async (id, video) => {
        setIsLoading(true);
        const receipt = await storage?.updateVideo(id, video);
        await receipt.wait();
        setIsLoading(false);
    };

    const deleteVideo = async (id) => {
        setIsLoading(true);
        const receipt = await storage?.deleteVideo(id);
        await receipt.wait();
        setIsLoading(false);
    };

    useEffect(() => {
        getAllVideos();
    }, [getAllVideos, isLoading]);

    const value = {
        videos,
        isLoading,
        addVideo,
        getAllVideos,
        updateVideo,
        deleteVideo,
    };

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}
