import { useAudioContext, useIpfsContext } from '../../../hooks';
import { useStorageContract } from '../../../hooks/useContract';
import AudioList from './AudioList';
import Uploader from '../../Uploader.jsx';

export default function Audios() {
    const { audios } = useAudioContext();
    const { ipfs } = useIpfsContext();
    const storage = useStorageContract();

    const onSubmit = async (event) => {
        for (const file of event.target.files) {
            const uploaded = await ipfs.add(file);
            const params = [file.name, uploaded.path, uploaded.size, false, 0];

            const tx = await storage.addAudio(...params);
            await tx.wait();
        }
    };

    return (
        <AudioList audios={audios}>
            <Uploader submitCallback={onSubmit} />
        </AudioList>
    );
}
