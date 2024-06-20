'use client';

import { useTestContext } from "@/lib/testContext";
import { QuestionProps } from "@/types/questionProps";
import { useEffect, useState } from "react";

function YesNo({ id, data, setData }: QuestionProps) {
    let { getData } = useTestContext();
    let style = "w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
    const handleClick = (flag: boolean) => {
        setData(id, {
            ...getData(id),
            correct: flag
        });
    }


    return (
        <>
            <p>Pick the expected answer :</p>
            <div className="flex w-full justify-between gap-5">
                {/* Maybe misleading ? This is the create test page */}
                <button onClick={() => handleClick(true)} className={`${style} ${getData(id).correct ? 'bg-cyan-400' : 'bg-[#F0F0F0]'}`}>Yes</button>
                <button onClick={() => handleClick(false)} className={`${style} ${!getData(id).correct ? 'bg-cyan-400' : 'bg-[#F0F0F0]'}`}>No</button>
            </div>
        </>
    );
}

export default YesNo;