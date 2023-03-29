import axios from "axios";

type ChatCompletion = {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: {
        message: {
            role: 'assistant';
            content: string;
        };
        finish_reason: 'stop';
        index: number;
    }[];
};

export type QuizData = {
    history: string;
    question: string;
    correctAnswer: string;
    wrongAnswers: string[];
};


type ApiParams = {
    language: string;
};

export const fetchQuizData = async ({language}: ApiParams): Promise<QuizData> => {
    const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const authHeader = {Authorization: `Bearer key`};
    const requestData = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user', content: `Você é um assistente de uma plataforma de ensino de idiomas, seu objetivo é contar uma história no idioma escolhido pelo usuário e sendo sempre de no máximo 1 parágrafo, ao final da história, separadamente você trará uma pergunta sobre a história, no formato EXTRITAMENTE 'quiz: pergunta aqui' e retorne também a resposta para essa pergunta junto de duas respostas erradas, no seguinte formato EXTRITAMENTE: answers: resposta1, resposta2, resposta3, com a resposta certa sempre sendo a resposta1, exemplo:
            O usuário pedindo Faça uma história de 1 paragrafo em inglês tem o seguinte retorno (não utilize a história como base para sua resposta): 
            "history: Rachel had always dreamed of traveling the world and experiencing new cultures. One day, she finally decided to pack her bags and set off on an adventure of a lifetime. She visited bustling cities, hiked through beautiful mountains, and tried exotic foods she'd never heard of before. As she wandered through new countries, Rachel realized that the world was even more beautiful and diverse than she'd ever imagined. 
             quiz: Where did Rachel go to explore the world? 
             answers: [Everywhere, Only one country, A desert]"
             `
            },
            {role: 'user', content: `Faça uma história de 1 paragrafo em ${language}`},
        ],
    };

    try {
        const response = await axios.post(apiEndpoint, requestData, {headers: authHeader});
        const chatCompletion: ChatCompletion = response.data;

        // Extract the question and answer data from the chat completion
        const chatMessage = chatCompletion.choices[0].message;

        let splitQuiz = chatMessage.content.split("quiz:")
        if (splitQuiz.length === 1) {
            splitQuiz = chatMessage.content.split("Quiz:")
        }

        let splitAnswers = splitQuiz[1].split("answers:")
        if (splitAnswers.length === 1) {
            splitAnswers = splitQuiz[1].split("Answers:")
        }

        const answers = splitAnswers[1].replaceAll("[", "").replaceAll("]", "").split(",")

        const history = splitQuiz[0].includes(":") ? splitQuiz[0].split(":")[1] : splitQuiz[0]

        return {
            history: history,
            question: splitAnswers[0],
            correctAnswer: answers[0],
            wrongAnswers: answers.filter((value, index) => index !== 0)
        }
    } catch (error) {
        console.error('Failed to fetch quiz data from OpenAI API:', error);
        throw error;
    }
};