'use client';

import { ChangeEvent, useRef, useState } from "react"
import YesNo from "./questionTypes/YesNo";
import MultipleChoice from "./questionTypes/MultipleChoice";
import OpenQuestion from "./questionTypes/OpenQuestion";
import FileQuestion from "./questionTypes/FileQuestion";

interface questionProps {
    id: number,
    type: string,
    setType: (arg0: number, arg1: string) => void,
}

export default function QuestionInput({ id, type, setType }: questionProps) {
    //TODO: each question in its own component
    let handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setType(id, selected)
    }


    const renderQuestion = (t: string) => {
        //TODO: Markdown for textAreas + value for question title
        switch (t) {
            case 'yesno':
                return (<YesNo />);
            case 'mcq':
                return (<MultipleChoice />);
            case 'text':
                return (<OpenQuestion />);
            case 'file':
                return (<FileQuestion />)
            default:
                return (<div>Chose a question type</div>)
        }
    }


    return (
        <div className="flex gap-5 flex-col p-4 border border-[#D8D8D8] rounded-lg">
            <div className="flex gap-5">
                <label htmlFor="title" className="text-xl">Question {id}</label>
                <select onChange={handleChange} name="question" id="cars" className="bg-[#F0F0F0] rounded-lg w-[200px]">
                    <option value="yesno">Yes/No</option>
                    <option value="mcq">Multiple Choice</option>
                    <option value="text">Open question</option>
                    <option value="file">File input</option>
                </select>
            </div>
            {renderQuestion(type)}
        </div>
    )
}