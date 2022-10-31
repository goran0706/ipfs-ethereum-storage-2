import { Route, Routes } from 'react-router-dom';
import NFTs from './NFTs';
import Photos from './Photos';
import Audios from './Audios';
import Videos from './Videos';
import Documents from './Documents';

export default function Files() {
    return (
        <Routes>
            <Route path='/nfts' element={<NFTs />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/audios' element={<Audios />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/documents' element={<Documents />} />
        </Routes>
    );
}
