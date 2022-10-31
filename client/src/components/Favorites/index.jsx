import useFavoriteContext from '../../hooks/useFavoriteContext';
import FavoriteFilesList from './FavoriteFilesList';

export default function Favorites() {
    const { favorites } = useFavoriteContext();

    return <FavoriteFilesList favorites={favorites} />;
}
