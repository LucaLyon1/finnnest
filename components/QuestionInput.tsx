'use client';

import { ChangeEvent, useState } from "react"

interface questionProps {
    id: number,
    type: string,
    setType: (arg0: number, arg1: string) => void,
}

export default function QuestionInput({ id, type, setType }: questionProps) {
    let [answer, setAnswer] = useState<string[]>([]);
    let [correctAnswer, setCorrectAnswer] = useState(0);

    //TODO: each question in its own component
    let handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setType(id, selected)

    }
    let handleType = (event: ChangeEvent<HTMLInputElement>, i: number) => {
        const value = event.target.value;
        setAnswer((prev) => (
            prev.map((a, j) => j === i ? value : a)
        ));
    }
    let switchCorrect = (event: ChangeEvent<HTMLInputElement>, i: number) => {
        const selected = event.target.value;
        setCorrectAnswer((_) => i);
    }

    const ansElements = answer.map((a, i) => (
        <div key={i} className="flex gap-2">
            <input onChange={(e) => switchCorrect(e, i)} type="radio" id={`ans${i}`} name={`ans${i}`} value={a} checked={correctAnswer === i} />
            <input onChange={(e) => handleType(e, i)} className="border border-[#D8D8D8] rounded-md p-2" type="text" name="q" value={a} placeholder="Enter a choice here..." />
        </div>
    ))
    const addAnswer = () => {
        setAnswer((prev) => ([...prev, '']))
    }

    const renderQuestion = (t: string) => {
        //TODO: Markdown for textAreas
        switch (t) {
            case 'yesno':
                return (<>
                    <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
                    <div className="flex w-full justify-between gap-5">
                        {/* Maybe misleading ? This is the create test page */}
                        <button className="w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">Yes</button>
                        <button className="w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">No</button>
                    </div>
                </>);
            case 'mcq':
                return (<>
                    <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
                    <fieldset className="w-1/2 grid grid-cols-2 gap-5 p-5 border border-[#D8D8D8]">
                        <legend className="px-2">Provide all the choices and select the right one</legend>
                        {ansElements}
                        <button className="m-auto w-full py-2 text-cyan-400 border border-[#D8D8D8] rounded-md hover:bg-[#FAFAFA]" onClick={addAnswer}>Add answer</button>
                    </fieldset>

                </>);
            case 'text':
                return (<>
                    <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
                    <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Your candidates will answer here..." disabled></textarea>
                </>);
            case 'file':
                return (<>
                    <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
                    <label htmlFor="fileQ">Drop the file here</label>
                    <input type="file" name="questFile" />
                </>)
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