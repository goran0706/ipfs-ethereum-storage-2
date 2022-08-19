import { useIpfsContext, usePhotoContext } from '../../../hooks';
import { useStorageContract } from '../../../hooks/useContract';
import PhotoList from './PhotoList';
import Uploader from '../../Uploader.jsx';

export default function Photos() {
	const { photos } = usePhotoContext();
	const { ipfs } = useIpfsContext();
	const storage = useStorageContract();

	const onSubmit = async event => {
		for (const file of event.target.files) {
			const uploaded = await ipfs.add(file);
			const params = [file.name, uploaded.path, uploaded.size, false, ''];

			const tx = await storage.addPhoto(...params);
			await tx.wait();
		}
	};

	return (
		<PhotoList photos={photos}>
			<Uploader submitCallback={onSubmit} />
		</PhotoList>
	);
}
