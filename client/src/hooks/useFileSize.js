import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_ENV_IPFS_URL;

export default function useFileSize(n, path) {
	const [size, setSize] = useState();

	const getFileSize = useCallback(async () => {
		const fileSize = await axios.get(BASE_URL + path);
		const bytesToMegaBytes = bytes => bytes / 1024 ** 2;
		setSize(bytesToMegaBytes(fileSize?.headers['content-length']).toFixed(2));
	}, [path]);

	useEffect(() => {
		getFileSize();
	}, [getFileSize]);

	return size;
}
