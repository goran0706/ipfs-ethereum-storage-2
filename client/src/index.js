import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import IpfsProvider from './contexts/IpfsProvider';
import Web3Provider from './contexts/Web3Provider';
import NftProvider from './contexts/NftProvider';
import PhotoProvider from './contexts/PhotoProvider';
import AudioProvider from './contexts/AudioProvider';
import VideoProvider from './contexts/VideoProvider';
import DocumentProvider from './contexts/DocumentProvider';
import App from './App';
import './index.css';
import FavoriteProvider from './contexts/FavoriteProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Web3Provider>
			<IpfsProvider>
				<NftProvider>
					<PhotoProvider>
						<AudioProvider>
							<VideoProvider>
								<DocumentProvider>
									<FavoriteProvider>
										<App />
									</FavoriteProvider>
								</DocumentProvider>
							</VideoProvider>
						</AudioProvider>
					</PhotoProvider>
				</NftProvider>
			</IpfsProvider>
		</Web3Provider>
	</BrowserRouter>
);
