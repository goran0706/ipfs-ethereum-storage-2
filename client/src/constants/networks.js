import { bsc, ethereum, ethereumBlackAndWhite, polygon } from './images';

export const networks = {
	mainNetworks: {
		mainnet: {
			chainId: 1,
			chainName: 'Ethereum Mainnet',
			nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
			rpcUrls: ['https://api.harmony.one'],
			blockExplorerUrls: ['https://etherscan.io/'],
			icon: [ethereum],
			isActive: false,
		},
		bsc: {
			chainId: 56,
			chainName: 'Binance Mainnet',
			nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
			rpcUrls: ['https://bsc-dataseed.binance.org/'],
			blockExplorerUrls: ['https://bscscan.com'],
			icon: [bsc],
			isActive: false,
		},
		polygon: {
			chainId: 137,
			chainName: 'Polygon Mainnet',
			nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
			rpcUrls: ['https://polygon-rpc.com/'],
			blockExplorerUrls: ['https://polygonscan.com/'],
			icon: [polygon],
			isActive: false,
		},
	},
	testNetworks: {
		kovan: {
			chainId: 42,
			chainName: 'Kovan Testnet',
			nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
			rpcUrls: ['https://kovan.poa.network/'],
			blockExplorerUrls: ['https://kovan.etherscan.io/'],
			icon: [ethereumBlackAndWhite],
			isActive: false,
		},
		rinkeby: {
			chainId: 4,
			chainName: 'Rinkeby Testnet',
			nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
			rpcUrls: ['https://rinkeby.infura.io/v3/'],
			blockExplorerUrls: ['https://rinkeby.etherscan.io'],
			icon: [ethereumBlackAndWhite],
			isActive: false,
		},
		ropsten: {
			chainId: 3,
			chainName: 'Ropsten Testnet',
			nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
			rpcUrls: ['https://ropsten.infura.io/v3/'],
			blockExplorerUrls: ['https://ropsten.etherscan.io'],
			icon: [ethereumBlackAndWhite],
			isActive: false,
		},
		goerli: {
			chainId: 5,
			chainName: 'Goerli Testnet',
			nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
			rpcUrls: ['https://goerli.infura.io/v3/'],
			blockExplorerUrls: ['https://goerli.etherscan.io'],
			icon: [ethereumBlackAndWhite],
			isActive: true,
		},
		bsc: {
			chainId: 97,
			chainName: 'Binance Testnet',
			nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
			rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
			blockExplorerUrls: ['https://testnet.bscscan.com/'],
			icon: [bsc],
			isActive: false,
		},
		mumbai: {
			chainId: 80001,
			chainName: 'Matic Mumbai',
			nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
			rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
			blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
			icon: [polygon],
			isActive: false,
		},
	},
};

export const contracts = {
	storageAddress: process.env.FILE_STORAGE_ADDRESS,
};
