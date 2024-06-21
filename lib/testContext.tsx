import QuestionInput from "@/components/QuestionInput";
import { Question, QuestionType } from "@/types/question";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface TestContextType {
    getQuestions: () => JSX.Element[],
    addQuestion: () => void;
    removeQuestion: (id: number) => void;
    updateQuestionType: (id: number, type: QuestionType) => void;
    updateQuestionData: (id: number, data: any) => void;
    getData: (id: number) => any;
    getRank: (id: number) => number;
}

let uniqueId = 0;
const uniqueIdRendering = () => {
    return uniqueId++;
}

const testContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [questions, setQuestions] = useState<Question[]>([]);

    let getQuestions = () => {
        return (questions.map((q, i) => (
            <QuestionInput key={q.id} id={q.id} type={q.type} />
        )))
    }

    const addQuestion = () => {
        setQuestions(prev => [...prev, { id: uniqueIdRendering(), type: 'yesno', data: { correct: true } }])
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
    const getRank = (id: number) => {
        return questions.findIndex((q) => q.id == id);
    }
    return (
        <testContext.Provider value={{ getQuestions, addQuestion, removeQuestion, updateQuestionType, updateQuestionData, getData, getRank }}
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