interface QuestionProps {
    title: string,
    questions: string[],
}

function Question({ title, questions }: QuestionProps) {
    const questionElements = questions.map((q, i) => (
        <div key={i} className="flex items-center gap-2 mt-5">
            <div className="w-6 h-6 rounded-full border-[4px] border-slate-300"></div>
            <p>{q}</p>
        </div>
    ))
    return (
        <div className="w-[350px] h-[300px] bg-slate-100 p-4 rounded-xl">
            <h2 className="text-2xl font-medium">{title}</h2>
            {questionElements}
        </div>
    );
}

export default Question;