import axios from 'axios';

const BASE_URL = process.env.REACT_APP_ENV_IPFS_URL;

export default axios.create({
    baseURL: BASE_URL,
    timeout: 60000,
    headers: {},
});
