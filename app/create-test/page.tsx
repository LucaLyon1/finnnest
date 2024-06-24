'use client';

import QuestionInput from "@/components/QuestionInput";
import Section from "@/components/Section";
import Subheader from "@/components/Subheader";
import { useTestContext } from "@/lib/testContext";
import { Question, QuestionType } from "@/types/question";
import { ChangeEvent, useState } from "react";

function createTest() {
    const { questions, section, getSection, getCurrentSection, newSection, getSections, updateSection, getQuestions, addQuestion, removeQuestion, updateQuestionType, updateQuestionData } = useTestContext();
    let handleAdd = () => {
        addQuestion();
    }
    const handleSectionName = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        let current = getSection(getCurrentSection());
        if (current) updateSection(current.id, { ...current, title: name });
    }
    const addSection = () => {
        newSection('Enter section name');
    }

    const sectionElements = getSections().map((s, i) => (
        <Section id={s.id} key={s.id} />
    ))

    return (
        <div>
            <Subheader />
            <div className="grid grid-cols-4 mt-20">
                <div className="col-span-1 w-[80%] ml-auto flex flex-col gap-5">
                    <h2 className="text-xl font-semibold">Test Content</h2>
                    {/* TODO: this comes from state & DB + own component */}
                    {sectionElements}
                    <button onClick={addSection} className="w-[60%] py-2 text-cyan-400 border border-[#D8D8D8] rounded-md hover:bg-[#FAFAFA]">Add Section</button>
                </div>
                {/* TODO:  own component, type as prop*/}
                <div className="col-span-3 border border-[#D8D8D8] w-[90%] m-auto rounded-lg shadow-sm p-10 flex flex-col gap-10">
                    {/* TODO:  dynamic section name */}
                    <input className="text-2xl w-1/3 focus:ring" value={getSection(getCurrentSection())?.title} onChange={handleSectionName} />
                    <p>
                        The future junior should be able to work in complex context such as multi-layered LBO,
                        and quickly and accurately report a high volume of information
                    </p>
                    <hr />
                    {getQuestions()}
                    <button className="m-auto w-[300px] py-2 text-cyan-400 border border-[#D8D8D8] rounded-md hover:bg-[#FAFAFA]" onClick={handleAdd}>Add question</button>
                </div>
            </div>
        </div>
    );
}

export default createTest;

function useQuestionContext(): { questions: any; addQuestion: any; removeQuestion: any; updateQuestionType: any; updateQuestionData: any; } {
    throw new Error("Function not implemented.");
}
