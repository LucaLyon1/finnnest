// Define the question types
export type QuestionType = 'yesno' | 'multipleChoice' | 'open' | 'file';

// Define the structure of a question
export interface Question {
    id: number;
    type: QuestionType;
    data?: any; // You can define a more specific type based on your data structure
}