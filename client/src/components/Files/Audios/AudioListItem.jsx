import styled from '@emotion/styled/macro';
import { CardAudio } from '../../Card';
import { MdAudiotrack } from 'react-icons/md';

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

const AudioWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	${Base};
	width: 100%;
	height: 200px;
	min-height: 150px;

	border: 1px solid #ededed;
	border-radius: 5px;
	padding: 10px;

	svg {
		width: 100%;
		height: 100%;
		color: #168be8;
	}
`;

const AudioControls = styled.audio`
	${Base};
	width: 100%;
	height: 100%;
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

export default function AudioListItem({ audio }) {
	return (
		<CardAudio>
			<AudioWrapper>
				<MdAudiotrack />
				<AudioControls controls>
					<source src={BASE_URL + audio.file.path} />
				</AudioControls>
			</AudioWrapper>
			<Id>{audio.file.id.toString()}</Id>
			<Name>{`Name: ${audio.file.name}`}</Name>
			<Size>{`Size: ${audio.file.size.toString()}`}</Size>
			<UploadDate>{`Uploaded: ${audio.file.uploadedAt.toString()}`}</UploadDate>
		</CardAudio>
	);
}
