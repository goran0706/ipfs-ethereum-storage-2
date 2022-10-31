import { useIpfsContext, useVideoContext } from '../../../hooks';
import { useStorageContract } from '../../../hooks/useContract';
import Uploader from '../../Uploader.jsx';
import VideoList from './VideoList';

export default function Videos() {
    const { ipfs } = useIpfsContext();
    const { videos } = useVideoContext();
    const storage = useStorageContract();

    const onSubmit = async (event) => {
        for (const file of event.target.files) {
            const uploaded = await ipfs.add(file);
            const params = [file.name, uploaded.path, uploaded.size, false, 0];

            const tx = await storage.addVideo(...params);
            await tx.wait();
        }
    };

    return (
        <VideoList videos={videos}>
            <Uploader submitCallback={onSubmit} />
        </VideoList>
    );
}
