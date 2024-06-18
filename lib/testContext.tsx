import { Question, QuestionType } from "@/types/question";
import { ReactNode, createContext, useContext, useState } from "react";

interface TestContextType {
    questions: Question[];
    addQuestion: () => void;
    removeQuestion: (id: number) => void;
    updateQuestionType: (id: number, type: QuestionType) => void;
    updateQuestionData: (id: number, data: any) => void;
    getData: (id: number) => any;
}

const testContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [questions, setQuestions] = useState<Question[]>([]);

    const addQuestion = () => {
        //TODO: better id handling
        setQuestions(prev => [...prev, { id: prev.length + 1, type: 'yesno', data: {} }])
    }
    const removeQuestion = (id: number) => {
        setQuestions(prev => (prev.filter(q => q.id !== id)));
    }
    const updateQuestionType = (id: number, type: QuestionType) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, type } : q));
    }
    const updateQuestionData = (id: number, data: any) => {
        setQuestions(prev => prev.map(q => q.id === id ? { ...q, data } : q));
    }
    const getData = (id: number) => {
        return questions.filter((q) => q.id === id)[0].data
    }
    return (
        <testContext.Provider value={{ questions, addQuestion, removeQuestion, updateQuestionType, updateQuestionData, getData }}
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