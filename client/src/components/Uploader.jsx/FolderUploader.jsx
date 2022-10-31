import { AiFillFolderAdd } from 'react-icons/ai';
import { useIpfsContext, useUpload } from '../../hooks';
import Button from '../Button';
import styled from '@emotion/styled/macro';

const UploadFolderWrapper = styled.div`
    background-color: ${({ disabled }) => (disabled ? 'gray' : '#fff')};
    border-radius: 5px;
    transform: translate(0, -250px);
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    width: 180px;
    height: 100%;
`;

const UploadFolderButton = styled(Button)`
    color: #d7dbdf;
    border: 2px dotted #ebf0f4;
    width: 100%;
    height: 100%;
    svg {
        transform: translate(30px, 60px);
    }
    &:hover {
        color: #fff;
        background-color: #168be8;
        box-shadow: none;
    }
`;

export default function FolderUploader({ submitCallback }) {
    const { inputRef, handleInputClick, handleSubmission } = useUpload();
    const { isNodeOnline } = useIpfsContext();

    return (
        <UploadFolderWrapper>
            <input
                type='file'
                hidden={true}
                aria-hidden='true'
                ref={inputRef}
                webkitdirectory='true'
                onChange={(event) => handleSubmission(event, submitCallback)}
            />
            <UploadFolderButton disabled={!isNodeOnline} onClick={() => handleInputClick(inputRef)}>
                <AiFillFolderAdd size='80' />
            </UploadFolderButton>
        </UploadFolderWrapper>
    );
}
