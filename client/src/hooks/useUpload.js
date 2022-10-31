import { useRef, useState } from 'react';

export default function useUpload() {
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef();

    const handleInputClick = (ref) => {
        ref.current.click();
    };

    const handleSubmission = async (event, submitCallback) => {
        setIsUploading(true);
        submitCallback(event);
        setIsUploading(false);
    };

    return {
        isUploading,
        inputRef,
        handleInputClick,
        handleSubmission,
    };
}
