
export enum ViewType {
    MENU = 'MENU',
    MATERIAL = 'MATERIAL',
    QUIZ = 'QUIZ',
    PRONUNCIATION = 'PRONUNCIATION',
    GLOSSARY = 'GLOSSARY',
    EVALUATION = 'EVALUATION',
}

export interface ProcedureText {
    id: string;
    title: string;
    type: string;
    imageUrl: string;
    goal: string;
    materials?: string[];
    steps: string[];
    translation: {
        title: string;
        goal: string;
        materials?: string[];
        steps: string[];
    };
}

export enum QuizType {
    MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
    DRAG_AND_DROP = 'DRAG_AND_DROP',
    WRITING = 'WRITING',
}

export interface MultipleChoiceQuestion {
    id: string;
    type: QuizType.MULTIPLE_CHOICE;
    question: string;
    context?: string;
    options: string[];
    correctAnswer: string;
}

export interface DragAndDropQuestion {
    id: string;
    type: QuizType.DRAG_AND_DROP;
    title: string;
    correctOrder: string[];
}

export interface WritingQuestion {
    id: string;
    type: QuizType.WRITING;
    title: string;
    imageUrl: string;
    prompt: string;
    geminiPromptContext: string;
}

export type QuizQuestion = MultipleChoiceQuestion | DragAndDropQuestion | WritingQuestion;

export interface GlossaryTerm {
    term: string;
    definition: string;
    example: string;
}
