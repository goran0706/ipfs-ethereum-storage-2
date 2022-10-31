import { CardPhoto } from '../../Card';
import styled from '@emotion/styled/macro';

const BASE_URL = process.env.REACT_APP_ENV_IPFS_URL;

const Base = styled.span`
    color: inherit;
    font-family: 'Roboto', sans-serif;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    height: 100%;
`;

const StyledImage = styled.img`
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
    width: 100%;
    height: 100%;
    min-height: 150px;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    :hover {
        transform: scale(1.04);
        transition: all 0.3s ease-in-out;
    }
`;

const Id = styled(Base)`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 5px;
    width: 24px;
    height: 24px;
`;

const Size = styled(Base)``;

const Name = styled(Base)`
    font-weight: bold;
`;

const UploadDate = styled(Base)``;

export default function PhotoListItem({ photo }) {
    return (
        <CardPhoto>
            <StyledImage src={BASE_URL + photo.file.path} alt='' />
            <Id>{photo.file.id.toString()}</Id>
            <Name>{`Name: ${photo.file.name}`}</Name>
            <Size>{`Size: ${photo.file.size.toString()}`}</Size>
            <UploadDate>{`Uploaded: ${photo.file.uploadedAt.toString()}`}</UploadDate>
        </CardPhoto>
    );
}
