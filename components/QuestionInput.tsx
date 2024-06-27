'use client';

import { ChangeEvent, useState } from "react"
import YesNo from "./questionTypes/YesNo";
import MultipleChoice from "./questionTypes/MultipleChoice";
import OpenQuestion from "./questionTypes/OpenQuestion";
import FileQuestion from "./questionTypes/FileQuestion";
import { QuestionType } from "@/types/question";
import { useTestContext } from "@/lib/testContext";
import NumberQuestion from "./questionTypes/NumberQuestion";
import { RxCross2 } from "react-icons/rx";

interface questionProps {
    id: number,
    type: string,
}

export default function QuestionInput({ id, type }: questionProps) {
    let { getData, removeQuestion, getRank, updateQuestionData, updateQuestionType } = useTestContext();

    let handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value as QuestionType;
        updateQuestionType(id, selected);
    }

    const renderQuestion = (t: string) => {
        //TODO: Markdown for textAreas + value for question title
        //Missing number question
        switch (t) {
            case 'yesno':
                return (<YesNo id={id} data={getData(id)} setData={updateQuestionData} />);
            case 'mcq':
                return (<MultipleChoice id={id} data={getData(id)} setData={updateQuestionData} />);
            case 'text':
                return (<OpenQuestion />);
            case 'number':
                return (<NumberQuestion id={id} data={getData(id)} setData={updateQuestionData} />);
            case 'file':
                return (<FileQuestion id={id} data={getData(id)} setData={updateQuestionData} />)
            default:
                return (<div>Chose a question type</div>)
        }
    }

    const handleQuestionTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        updateQuestionData(id, {
            ...getData(id),
            title: text
        });
    }


    return (
        <div className="relative flex gap-5 flex-col p-4 border border-[#D8D8D8] rounded-lg">
            {/*TODO: icons */}
            <button className="absolute right-5 text-red-500 text-3xl h-8 w-8 hover:bg-gray-200 transition-all rounded-sm" onClick={() => removeQuestion(id)}><RxCross2 className="m-auto" /></button>
            <div className="flex gap-5">
                <label htmlFor="title" className="text-xl">Question {getRank(id) + 1}</label>
                <select value={type} onChange={handleChange} name="question" id="cars" className="bg-[#F0F0F0] rounded-lg w-[200px]">
                    <option value="yesno">Yes/No</option>
                    <option value="mcq">Multiple Choice</option>
                    <option value="text">Open question</option>
                    <option value="file">File input</option>
                </select>
            </div>
            <textarea value={getData(id).title} onChange={handleQuestionTitle} className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
            {renderQuestion(type)}
        </div>
    )
}