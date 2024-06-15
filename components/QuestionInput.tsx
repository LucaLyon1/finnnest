import { ChangeEvent } from "react"

interface questionProps {
    id: number,
    type: string,
    setType: (arg0: number, arg1: string) => void,
}

export default function QuestionInput({ id, type, setType }: questionProps) {

    let handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value;
        setType(id, selected)

    }

    const renderQuestion = (t: string) => {
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