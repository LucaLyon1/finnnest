import { Question } from "./question";

export interface Section {
    id: number,
    sectionName: string,
    questions: Question[],
}