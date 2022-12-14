import { useMemo } from 'react';

export default function useFormatDate(timestamp) {
	return useMemo(() => {
		const date = new Date(timestamp * 1000);

		return (
			date.getDate() +
			'/' +
			(date.getMonth() + 1) +
			'/' +
			date.getFullYear() +
			' ' +
			date.getHours() +
			':' +
			date.getMinutes() +
			':' +
			date.getSeconds()
		);
	}, [timestamp]);
}
 