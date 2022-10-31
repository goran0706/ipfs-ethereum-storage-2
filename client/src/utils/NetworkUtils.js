import { networks } from '../constants/networks';

export const getNetworkDetails = chainId => {
	switch (chainId) {
		// Main networks
		case '0x1':
			return networks.mainNetworks.mainnet;
		case '0x38':
			return networks.mainNetworks.bsc;
		case '0x89':
			return networks.mainNetworks.polygon;
		// Test networks
		case '0x61':
			return networks.testNetworks.bsc;
		case '0x13881':
			return networks.testNetworks.mumbai;
		case '0x2a':
			return networks.testNetworks.kovan;
		case '0x4':
			return networks.testNetworks.rinkeby;
		case '0x3':
			return networks.testNetworks.ropsten;
		default: 
			return networks.mainNetworks.mainnet;
	}
};

export const toHex = num => '0x' + Number(num).toString(16);

export const copyAddress = address => navigator.clipboard.writeText(address);

export const shortenAddress = address => {
	if (!address) return 'No Account';
	const match = address.match(
		/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
	);
	if (!match) return address;
	return `${match[1]}…${match[2]}`;
};
