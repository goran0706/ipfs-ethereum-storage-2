import { IoMdTrash } from 'react-icons/io';
import FavoriteFileImage from './FavoriteFileImage';
import IconButton from '../IconButton';
import Paragraph from '../shared/Paragraph';
import styled from '@emotion/styled/macro';
import { AiFillStar } from 'react-icons/ai';

const FavoriteFile = styled.li`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    text-align: left;
    gap: 1rem;
    color: #333;
    background: #fff;
    box-shadow: rgb(50 50 93 / 10%) 0px 7px 14px 0px, rgb(0 0 0 / 8%) 0px 3px 6px 0px,
        rgb(0 0 0 / 6%) 0px 0px 1px 0px inset;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    width: 100%;
    height: 48px;

    &:hover {
        cursor: pointer;
    }
`;

export default function FavoriteFilesListItem({ favorite }) {
    // const { handlePreview, handleRemoveFromFavorite } = useFileContext();

    // const renderImage = useMemo(
    // 	() =>
    // 		extension === 0 || extension === 1 ? (
    // 			<FavoriteFileImage src={process.env.REACT_APP_ENV_IPFS_URL + path} />
    // 		) : (
    // 			<AiFillStar size='48' color='orange' />
    // 		),
    // 	[extension, path]
    // );

    // const onPreviewClick = useCallback(
    // 	() => handlePreview(path),
    // 	[handlePreview, path]
    // );

    // const onRemoveClick = useCallback(
    // 	() => handleRemoveFromFavorite(id),
    // 	[handleRemoveFromFavorite, id]
    // );

    return (
        <FavoriteFile>
            <FavoriteFileImage
                src={process.env.REACT_APP_ENV_IPFS_URL + favorite.file.path}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = process.env.REACT_APP_ENV_IPFS_URL + favorite.file.path;
                }}
            />
            <Paragraph>{favorite.file.name}</Paragraph>
            <IconButton>
                <IoMdTrash size='24' />
            </IconButton>
        </FavoriteFile>
    );
}
