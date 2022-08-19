const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('FileStorage', function () {
	it('Should add new file', async function () {
		const FileStorage = await ethers.getContractFactory('FileStorage');
		const fileStorage = await FileStorage.deploy();
		await fileStorage.deployed();

		let bytesName = ethers.utils.formatBytes32String('bytes32 name');
		let bytesPath = ethers.utils.formatBytes32String('bytes32 path');

		const addDocumentTx = await fileStorage.addDocument(
			bytesName,
			bytesPath,
			1,
			false
		);
		await addDocumentTx.wait();

		let bytesNameUpdated = ethers.utils.formatBytes32String(
			'bytes32 name Updated'
		);
		let bytesPathUpdated = ethers.utils.formatBytes32String(
			'bytes32 path Updated'
		);

		const updateDocumentTx = await fileStorage.updateDocument(
			0,
			bytesNameUpdated,
			bytesPathUpdated,
			2,
			true
		);
		await updateDocumentTx.wait();

		const file = await fileStorage.getDocument(0);
		const files = await fileStorage.getAllDocuments();
		console.log(file);
		console.log(files);

		await fileStorage.deleteDocument(0);
	});
});
