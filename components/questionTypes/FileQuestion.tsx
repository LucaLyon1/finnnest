'use client';
import { QuestionProps } from "@/types/questionProps";
import { ChangeEvent, useRef, useState } from "react";

function FileQuestion({ id, data, setData }: QuestionProps) {
    //TODO: file handling with supabase
    let [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    let handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (validateFile(file)) setSelectedFile(file);
            else {
                setSelectedFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            }
        }
    }
    const validateFile = (file: File): boolean => {
        const validTypes = ['image/jpeg',
            'image/png',
            'application/pdf',
            'text/csv',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        const maxSizeInMB = 5;
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

        if (!validTypes.includes(file.type)) {
            alert(('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
            return false;
        }
        if (file.size > maxSizeInBytes) {
            alert((`File size exceeds ${maxSizeInMB}MB limit.`));
            return false;
        }
        return true;
    };

    return (
        <>
            <label htmlFor="fileQ">Drop the file here</label>
            <input onChange={handleFile} ref={fileInputRef} type="file" name="questFile" />
        </>
    );
}

export default FileQuestion;