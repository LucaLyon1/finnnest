import { ChangeEvent, useState } from "react";


function MultipleChoice() {
    let [answer, setAnswer] = useState<string[]>([]);
    let [correctAnswer, setCorrectAnswer] = useState(0);

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
    return (
        <>
            <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
            <fieldset className="w-1/2 grid grid-cols-2 gap-5 p-5 border border-[#D8D8D8]">
                <legend className="px-2">Provide all the choices and select the right one</legend>
                {ansElements}
                <button className="m-auto w-full py-2 text-cyan-400 border border-[#D8D8D8] rounded-md hover:bg-[#FAFAFA]" onClick={addAnswer}>Add answer</button>
            </fieldset>
        </>
    );
}

export default MultipleChoice;