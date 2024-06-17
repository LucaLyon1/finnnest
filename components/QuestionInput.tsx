'use client';

import { ChangeEvent, useState } from "react"
import YesNo from "./questionTypes/YesNo";
import MultipleChoice from "./questionTypes/MultipleChoice";
import OpenQuestion from "./questionTypes/OpenQuestion";
import FileQuestion from "./questionTypes/FileQuestion";
import { QuestionType } from "@/types/question";

interface questionProps {
    id: number,
    type: string,
    setType: (arg0: number, arg1: QuestionType) => void,
    setData: (arg0: number, arg1: any) => void,
}

export default function QuestionInput({ id, type, setType, setData }: questionProps) {
    let handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value as QuestionType;
        setType(id, selected)
    }


    const renderQuestion = (t: string) => {
        //TODO: Markdown for textAreas + value for question title
        //Missing number question
        switch (t) {
            case 'yesno':
                return (<YesNo />);
            case 'mcq':
                return (<MultipleChoice id={id} setData={setData} />);
            case 'text':
                return (<OpenQuestion />);
            case 'file':
                return (<FileQuestion id={id} setData={setData} />)
            default:
                return (<div>Chose a question type</div>)
        }
    }

    const handleQuestionTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setData(id, { title: text });
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
            <textarea onChange={handleQuestionTitle} className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
            {renderQuestion(type)}
        </div>
    )
}