'use client';

import { useTestContext } from "@/lib/testContext";
import { QuestionProps } from "@/types/questionProps";
import { useEffect, useState } from "react";

function YesNo({ id, setData }: QuestionProps) {
    const [answer, setAnswer] = useState(true);
    let { getData } = useTestContext();
    let style = "w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"

    const handleClick = (flag: boolean) => {
        setAnswer((_) => flag);
        setData(id, {
            ...getData(id),
            correct: flag
        });
    }

    useEffect(() => {
        setData(id, {
            ...getData(id),
            correct: true
        });
        return () => {
            setData(id, {});
        }
    }, [answer])

    return (
        <>
            <p>Pick the expected answer :</p>
            <div className="flex w-full justify-between gap-5">
                {/* Maybe misleading ? This is the create test page */}
                <button onClick={() => handleClick(true)} className={`${style} ${answer ? 'bg-cyan-400' : 'bg-[#F0F0F0]'}`}>Yes</button>
                <button onClick={() => handleClick(false)} className={`${style} ${!answer ? 'bg-cyan-400' : 'bg-[#F0F0F0]'}`}>No</button>
            </div>
        </>
    );
}

export default YesNo;