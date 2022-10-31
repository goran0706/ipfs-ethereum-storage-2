import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { ethers } from 'ethers';
import { getNetworkDetails, toHex } from '../utils';
import Web3Modal from 'web3modal';

const providerOptions = {
    /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
});

export const Web3Context = createContext();

export default function Web3Provider({ children }) {
    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [signature, setSignature] = useState('');
    const [error, setError] = useState('');
    const [chainId, setChainId] = useState();
    const [network, setNetwork] = useState();
    const [message, setMessage] = useState('');
    const [signedMessage, setSignedMessage] = useState('');
    const [verified, setVerified] = useState();

    const connect = async () => {
        try {
            const provider = await new web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
            setNetwork(getNetworkDetails(network?.chainId));
            setChainId(network?.chainId);
            setAccount(accounts[0] || '');
        } catch (error) {
            console.error('Connection error', error);
            setError(error);
        }
    };

    const switchNetwork = useMemo(
        () => async (chainId) => {
            try {
                await library.provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: toHex(chainId) }],
                });

                setNetwork(getNetworkDetails(chainId));
                setChainId(chainId);
            } catch (error) {
                if (error.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{ chainId: toHex(chainId) }],
                        });
                    } catch (error) {
                        setError(error);
                    }
                }
            }
        },
        [library?.provider]
    );

    const handleInput = (event) => {
        const message = event.target.value;
        setMessage(message);
    };

    const signMessage = useCallback(
        () => async () => {
            if (!library) return;
            try {
                const signature = await library.provider.request({
                    method: 'personal_sign',
                    params: [message, account],
                });
                setSignedMessage(message);
                setSignature(signature);
            } catch (error) {
                setError(error);
            }
        },
        [account, library, message]
    );

    const verifyMessage = useCallback(
        () => async () => {
            if (!library) return;

            try {
                const verify = await library.provider.request({
                    method: 'personal_ecRecover',
                    params: [signedMessage, signature],
                });
                setVerified(verify === account.toLowerCase());
            } catch (error) {
                setError(error);
            }
        },
        [account, library, signature, signedMessage]
    );

    const refreshState = () => {
        setAccount(null);
        setChainId(null);
        setNetwork(null);
        setMessage(null);
        setSignature(null);
        setVerified(undefined);
    };

    const disconnect = useCallback(() => {
        web3Modal.clearCachedProvider();
        refreshState();
    }, []);

    useEffect(() => {
        if (web3Modal.cachedProvider) {
            connect();
        }
    }, []);

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts) => {
                console.log('accountsChanged', accounts);
                if (accounts) setAccount(accounts[0]);
            };

            const handleChainChanged = (_hexChainId) => {
                console.log('chainIdChanged', _hexChainId);
                setChainId(_hexChainId);
                setNetwork(getNetworkDetails(_hexChainId));
            };

            const handleDisconnect = () => {
                console.log('disconnect', error);
                disconnect();
            };

            provider.on('accountsChanged', handleAccountsChanged);
            provider.on('chainChanged', handleChainChanged);
            provider.on('disconnect', handleDisconnect);

            return () => {
                if (provider.removeListener) {
                    provider.removeListener('accountsChanged', handleAccountsChanged);
                    provider.removeListener('chainChanged', handleChainChanged);
                    provider.removeListener('disconnect', handleDisconnect);
                }
            };
        }
    }, [disconnect, error, provider]);

    const value = useMemo(
        () => ({
            provider,
            setProvider,
            library,
            setLibrary,
            account,
            setAccount,
            signature,
            setSignature,
            error,
            setError,
            chainId,
            setChainId,
            network,
            setNetwork,
            message,
            setMessage,
            signedMessage,
            setSignedMessage,
            verified,
            setVerified,
            connect,
            handleInput,
            switchNetwork,
            signMessage,
            verifyMessage,
            refreshState,
            disconnect,
        }),
        [
            account,
            chainId,
            disconnect,
            error,
            library,
            message,
            network,
            provider,
            signMessage,
            signature,
            signedMessage,
            switchNetwork,
            verified,
            verifyMessage,
        ]
    );

    return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}
