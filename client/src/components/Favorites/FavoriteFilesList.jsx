import FavoriteFilesListItem from './FavoriteFilesListItem';
import styled from '@emotion/styled/macro';
import { useMemo } from 'react';

const FavoriteList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    padding: 0 1rem;
`;

export default function FavoriteFilesList({ favorites }) {
    const items = useMemo(
        () =>
            favorites?.map((f, index) => {
                return <FavoriteFilesListItem key={index} favorite={f} />;
            }),
        [favorites]
    );

    return (
        <FavoriteList>
            <p>FAVORITES</p>
            {items}
        </FavoriteList>
    );
}
