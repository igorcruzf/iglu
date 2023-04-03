import axios from "axios";

export type QuizData = {
    history: string;
    question: string;
    correctAnswer: string;
    answers: string[];
};


type ApiParams = {
    language: string;
};

export const fetchQuizData = async ({language}: ApiParams): Promise<QuizData[]> => {
    const apiEndpoint = `https://iglu.onrender.com/quiz?language=${language}&useMock=true`;

    try {
        const response = await axios.get(apiEndpoint);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch quiz data from OpenAI API:', error);
        throw error;
    }
};