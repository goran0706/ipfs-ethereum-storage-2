import axios from '../api/axios';

const fileTypesEnum = Object.freeze({
	PHOTO: 0,
	AUDIO: 1,
	VIDEO: 2,
	DOCUMENT: 3,
});

export async function getFileSize(path) {
	const fileSize = await axios(process.env.REACT_APP_ENV_IPFS_URL + path);
	const bytesToMegaBytes = bytes => bytes / 1024 ** 2;
	return parseInt(bytesToMegaBytes(fileSize?.headers['content-length']));
}

export function getFileExtension(type) {
	switch (true) {
		case !!type.match(/^image\/.*$/g):
			return fileTypesEnum.PHOTO;
		case !!type.match(/^video\/.*$/g):
			return fileTypesEnum.AUDIO;
		case !!type.match(/^audio\/.*$/g):
			return fileTypesEnum.VIDEO;
		case !!type.match(/^text\/.*$/g):
		case !!type.match('application/pdf'):
		case !!type.match('application/rtf'):
		case !!type.match('application/msword'):
		case !!type.match('application/vnd.oasis.opendocument.text'):
		case !!type.match('application/vnd.oasis.opendocument.spreadsheet'):
		case !!type.match('application/vnd.oasis.opendocument.presentation'):
		case !!type.match('application/vnd.wordperfect'):
		case !!type.match('application/vnd.ms-excel'):
		case !!type.match('application/vnd.ms-powerpoint'):
		case !!type.match('application/vnd.ms-excel.sheet.macroEnabled.12'):
		case !!type.match(
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		):
		case !!type.match(
			'application/vnd.openxmlformats-officedocument.presentationml.presentation'
		):
		case !!type.match('application/x-iwork-keynote-sffkey'):
			return fileTypesEnum.DOCUMENT;
		default:
			return fileTypesEnum.DOCUMENT;
	}
}

export function storeFile(file) {
	switch (getFileExtension(file.type)) {
		case 0:
			return 'storePhoto';
		case 1:
			return 'storeAudio';
		case 2:
			return 'storeVideo';
		case 3:
			return 'storeDocument';
		default:
			return 'storeDocument';
	}
}

export function setAsFavorite(file) {
	const id = parseInt(file.id);
	const extension = file.extension;

	switch (extension) {
		case 0:
			return ['setPhotoAsFavorite', id];
		case 1:
			return ['setAudioAsFavorite', id];
		case 2:
			return ['setVideoAsFavorite', id];
		case 3:
			return ['setDocumentAsFavorite', id];
		default:
			return ['setDocumentAsFavorite', id];
	}
}
