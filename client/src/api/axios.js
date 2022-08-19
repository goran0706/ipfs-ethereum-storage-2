import axios from 'axios';

export default axios.create({
	baseURL: process.env.REACT_APP_ENV_IPFS_URL,
	timeout: 60000,
	headers: {},
});
