import { IpfsContext } from '../contexts/IpfsProvider';
import { useContext } from 'react';

export default function useIpfsContext() {
    const context = useContext(IpfsContext);
    if (!context) {
        throw new Error('useIpfsContext must be used within a Web3Provider');
    }

    return { ...context };
}
