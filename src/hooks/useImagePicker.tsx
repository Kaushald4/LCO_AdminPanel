import React, { ChangeEvent, useState } from "react";

interface IFileStateProps {
    file: null | any;
    previewUrl: string | "";
}

function useFilePicker() {
    const [file, setFile] = useState<IFileStateProps>({ file: null, previewUrl: "" });

    const onHandleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length >= 1) {
            const previewUrl = URL.createObjectURL(e.target.files[0]);
            setFile({ previewUrl, file: e.target.files[0] });
        }
    };

    return { file: file.file, previewUrl: file.previewUrl, onHandleFileChange };
}

export default useFilePicker;
