import { useIpfsContext, useNftContext, useWeb3Context } from '../../../hooks';
import { useStorageContract } from '../../../hooks/useContract';
import Uploader from '../../Uploader.jsx';
import NFTList from './NFTList';

export default function NFTs() {
    const { account } = useWeb3Context();
    const { ipfs } = useIpfsContext();
    const { nfts } = useNftContext();
    const storage = useStorageContract();

    const onSubmit = async (event) => {
        for (const file of event.target.files) {
            const uploaded = await ipfs.add(file);
            const params = [file.name, uploaded.path, uploaded.size, true, account, '', '', 4];

            const tx = await storage.addNft(...params);
            await tx.wait();
        }
    };

    return (
        <NFTList nfts={nfts}>
            <Uploader submitCallback={onSubmit} />
        </NFTList>
    );
}
