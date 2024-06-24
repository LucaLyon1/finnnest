import QuestionInput from "@/components/QuestionInput";
import { Question, QuestionType } from "@/types/question";
import { Section } from "@/types/section";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface TestContextType {
    questions: Question[],
    section: Section[],
    getQuestions: () => JSX.Element[],
    addQuestion: () => void;
    removeQuestion: (id: number) => void;
    updateQuestionType: (id: number, type: QuestionType) => void;
    updateQuestionData: (id: number, data: any) => void;
    getData: (id: number) => any;
    getRank: (id: number) => number;
    getSections: () => Section[],
    getSection: (id: number) => Section | undefined,
    updateSection: (id: number, sec: Section) => void;
    updateCurrentSection: (id: number) => void;
    getCurrentSection: () => number;
    newSection: (arg: string) => void;
}

let uniqueId = 0;
const uniqueIdRendering = () => {
    return uniqueId++;
}

const testContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [section, setSection] = useState<Section[]>([{ id: uniqueIdRendering(), title: 'Enter section name' }]);
    const [currentSection, setCurrentSection] = useState(section[0].id)
    const [questions, setQuestions] = useState<Question[]>([]);

    let getQuestions = () => {
        let sectionQuestions = questions.filter((q) => q.section?.id == currentSection)
        return (sectionQuestions.map((q) => (
            <QuestionInput key={q.id} id={q.id} type={q.type} />
        )))
    }
    let getSections = () => {
        return section;

    }
    let updateSection = (id: number, sec: Section) => {
        setQuestions((prev) => (prev.map((q) => q.section.id == id ? { ...q, section: sec } : q)));
        setSection((prev) => prev.map((s) => s.id === id ? sec : s));
    }
    let newSection = () => {
        const newId = uniqueIdRendering();
        setSection((prev) => [...prev, { id: newId, title: 'Enter section name' }]);
        setCurrentSection(newId)
    }

    const addQuestion = () => {
        setQuestions(prev => [...prev, { id: uniqueIdRendering(), section: getSection(currentSection) || section[0], type: 'yesno', data: { correct: true } }])
    }
    const removeQuestion = (id: number) => {
        setQuestions(prev => prev.filter(q => q.id !== id));
    }
    const updateQuestionType = (id: number, type: QuestionType) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, type } : q));
    }
    const updateQuestionData = (id: number, data: any) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, data } : q));
    }
    const getData = (id: number) => {
        const question = questions.find((q) => q.id === id);
        return question ? question.data : {}
    }
    const getSection = (id: number) => {
        return section.find((s) => s.id === id);
    }
    const getCurrentSection = () => {
        return currentSection;
    }
    const getRank = (id: number) => {
        return questions.filter((q) => q.section.id === currentSection).findIndex((q) => q.id == id);
    }
    const updateCurrentSection = (id: number) => {
        setCurrentSection(() => id)
    }
    return (
        <testContext.Provider value={{ questions, updateCurrentSection, getCurrentSection, getSection, newSection, section, getSections, updateSection, getQuestions, addQuestion, removeQuestion, updateQuestionType, updateQuestionData, getData, getRank }}
        >
            {children}
        </testContext.Provider>
    )
}

export const useTestContext = () => {
    const context = useContext(testContext);
    if (!context) {
        throw new Error('Test Context must be used within Test Provider')
    }
    return context;
}