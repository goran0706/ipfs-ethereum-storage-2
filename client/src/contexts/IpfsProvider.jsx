import { create } from 'ipfs-core';
import { useEffect, useState, createContext } from 'react';

export const IpfsContext = createContext();

export default function IpfsProvider({ children }) {
    const [ipfs, setIpfs] = useState(null);
    const [isNodeOnline, setIsNodeOnline] = useState(false);

    useEffect(() => {
        async function init() {
            if (ipfs) {
                const nodeIsOnline = ipfs.isOnline();
                setIsNodeOnline(nodeIsOnline);
            } else {
                const node = await create();
                const nodeIsOnline = node.isOnline();
                setIpfs(node);
                setIsNodeOnline(nodeIsOnline);
            }
        }
        init();
    }, [ipfs]);

    const value = {
        ipfs,
        isNodeOnline,
    };

    return <IpfsContext.Provider value={value}>{children}</IpfsContext.Provider>;
}
