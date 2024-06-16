import { Question, QuestionType } from "@/types/question";
import { createContext } from "react";

interface QuestionContextType {
    questions: Question[];
    addQuestion: (type: QuestionType, data: any) => void;
    removeQuestion: (id: number) => void;
    updateQuestionType: (id: number, type: QuestionType) => void;
    updateQuestionData: (id: number, data: any) => void;
}

export const testContext = createContext([])