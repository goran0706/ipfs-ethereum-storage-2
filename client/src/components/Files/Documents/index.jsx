import { useDocumentContext } from '../../../hooks';
import DocumentList from './DocumentList';
import Uploader from '../../Uploader.jsx';

export default function Documents() {
    const { documents } = useDocumentContext();

    return (
        <DocumentList documents={documents}>
            <Uploader />
        </DocumentList>
    );
}
