import { explicitlyAborted } from "zod/v4/core/util.cjs";

export type QuestionType = 'mcq' | 'short' | 'long' | 'true-false';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type AssigementStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface QuestionTypeConfig {
    type: QuestionType;
    quantity: number;
    marksPerQuestion: number;
}

export interface Question{
    question: string;
    diffculty: Difficulty;
    marks: number;
    type: QuestionType;
    options?: string[];
    answer?: string
}

export interface Section{
    title:string;
    instruction: string;
    question : Question[]
}

export interface AssessmentResult{
    title: string;
    sections: Section[];
}

export interface AssigementJobPalyload{
    assigementId: string;
    fileText: string;
    config: {
        title: string;
        subject: string;
        gradelevel: string;
        questionTypes: QuestionTypeConfig[];
        totalMarks: number;
        additionalInstructions?: string;
    };
}

export interface ApiResponse<T = unknown>{
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export interface SocketProcessPayload{
    assigementId: string;
    step: number;
    message:string;
}

export interface SocketCompletePayload{
    assigementId: string;
    result: AssessmentResult;
}

export interface SocketFailPayload{
    assigementId: string;
    error: string;
}