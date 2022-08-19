import { AiFillFileAdd } from 'react-icons/ai';
import { useIpfsContext, useUpload } from '../../hooks';
import Button from '../Button';
import styled from '@emotion/styled/macro';

const UploadFileWrapper = styled.div`
	background-color: ${({ disabled }) => (disabled ? 'gray' : '#fff')};
	border-radius: 5px;
	clip-path: polygon(0 0, 0% 100%, 100% 0);
	width: 180px;
	height: 100%;
`;

const UploadFileButton = styled(Button)`
	color: #d7dbdf;
	border: 2px dotted #ebf0f4;
	width: 100%;
	height: 100%;
	svg {
		transform: translate(-30px, -60px);
	}
	&:hover {
		color: #fff;
		background-color: #168be8;
		box-shadow: none;
	}
`;

export default function FileUploader({ multiple, submitCallback }) {
	const { inputRef, handleInputClick, handleSubmission } = useUpload();
	const { isNodeOnline } = useIpfsContext();

	return (
		<UploadFileWrapper>
			<input
				type='file'
				hidden={true}
				aria-hidden='true'
				ref={inputRef}
				multiple={multiple}
				onChange={event => handleSubmission(event, submitCallback)}
			/>
			<UploadFileButton
				disabled={!isNodeOnline}
				onClick={() => handleInputClick(inputRef)}>
				<AiFillFileAdd size='80' />
			</UploadFileButton>
		</UploadFileWrapper>
	);
}
