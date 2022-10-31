import { CardUploader } from '../Card';
import { useIpfsContext } from '../../hooks';
import { useMemo } from 'react';
import FileUploader from './FileUploader';
import FolderUploader from './FolderUploader';
import OfflineText from './OfflineText';

export default function Uploader({ submitCallback }) {
    const { isNodeOnline } = useIpfsContext();

    const uploader = useMemo(
        () =>
            isNodeOnline ? (
                <CardUploader>
                    <FileUploader multiple={true} submitCallback={submitCallback} />
                    <FolderUploader submitCallback={submitCallback} />
                </CardUploader>
            ) : (
                <CardUploader>
                    <OfflineText text='Connecting to IPFS node...' />
                </CardUploader>
            ),
        [isNodeOnline, submitCallback]
    );

    return uploader;
}
