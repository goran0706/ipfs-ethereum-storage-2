require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: require('find-config')('.env') });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {
			throwOnTransactionFailures: true,
			throwOnCallFailures: true,
			allowUnlimitedContractSize: true,
			// blockGasLimit: 0x1fffffffffffff,
		},
		goerli: {
			throwOnTransactionFailures: true,
			throwOnCallFailures: true,
			allowUnlimitedContractSize: true,
			// blockGasLimit: 0x1fffffffffffff,
			url: process.env.RPC_URL || '',
			accounts:
				process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
		},
	},
	solidity: {
		version: '0.8.9',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS !== undefined,
		currency: 'USD',
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
	paths: {
		sources: './contracts',
		tests: './test',
		cache: './cache',
		artifacts: './artifacts',
	},
	mocha: {
		// timeout: 120000,
	},
};
