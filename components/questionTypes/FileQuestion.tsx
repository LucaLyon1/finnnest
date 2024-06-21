'use client';
import { useTestContext } from "@/lib/testContext";
import { QuestionProps } from "@/types/questionProps";
import { ChangeEvent, useEffect, useRef, useState } from "react";

function FileQuestion({ id, data, setData }: QuestionProps) {
    //TODO: file handling with supabase
    let [selectedFile, setSelectedFile] = useState<File | null>(data.file);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { getData } = useTestContext();

    useEffect(() => {
        if (fileInputRef.current && selectedFile) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(selectedFile);
            fileInputRef.current.files = dataTransfer.files;
        }
        return () => {
            setSelectedFile(null);
            fileInputRef.current = null;
            setData(id, {})
        }
    }, [selectedFile]);

    let handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (validateFile(file)) {
                setSelectedFile(file);
                setData(id, {
                    ...getData(id),
                    file: file,
                })
            }
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
    const removeFile = () => {
        setSelectedFile(null);
        let newData = getData(id);
        delete newData.file;
        setData(id, newData);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        };
    }

    return (
        <>
            <label htmlFor="fileQ">Drop the file here</label>
            <input onChange={handleFile} type="file" name="questFile" />
            <button onClick={removeFile}>remove file</button>
        </>
    );
}

export default FileQuestion;