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
    answers: string[];
};


type ApiParams = {
    language: string;
};

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const fetchQuizData = async ({language}: ApiParams): Promise<QuizData[]> => {
    const token = process.env.REACT_APP_API_KEY;
    const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
    const authHeader = {Authorization: `Bearer ${token}`};
    const requestData = {
        model: 'gpt-3.5-turbo',
        n: 10,
        frequency_penalty: 1.0,
        messages: [
            {
                role: 'user', content: `You are an assistant on a language learning platform, your goal is to tell a story in the language chosen by the user, always within one paragraph. At the end of the story, separately, you will ask a question about the story, in the STRICT format of 'quiz: question here', and provide the answer to the question along with two incorrect answers, in the following STRICT format: answers: answer1, answer2, answer3, with the correct answer always being answer1. For example, if the user asks for a one-paragraph story in English, the following could be returned (do not use this story as the basis for your answer):
                "The sun had just risen over the horizon, casting a golden glow over the still lake. The water was calm, with only a few ripples caused by the gentle breeze. The birds chirped in the nearby trees, welcoming the new day. As the sun rose higher in the sky, the world around the lake came to life. A fish leapt out of the water, creating a small splash. A butterfly fluttered by, landing on a nearby flower. The leaves rustled in the wind, creating a soothing sound. The world was in harmony, and everything felt right.
                quiz: What was the atmosphere like around the lake?
                answers: [Calm and peaceful, Chaotic and loud, Dark and scary]"
                Avoid starting the history with a woman name
             `
            },
            {
                role: 'user',
                content: `Make a one-paragraph story in ${language}. Remember to try various type of histories, involving one or multiple characters, male or female and use uncommon names.`
            },
        ],
    };

    try {
        const response = await axios.post(apiEndpoint, requestData, {headers: authHeader});
        const chatCompletion: ChatCompletion = response.data;

        // Extract the question and answer data from the chat completion
        return chatCompletion.choices.map((choice) => {
            const chatMessage = choice.message;
            let splitAnswers: string[];
            let answers: string[];
            let history: string;

            try{
                const splitQuiz = chatMessage.content.split(/quiz:/gi)
                splitAnswers = splitQuiz[1].split(/answers:/gi)
                answers = splitAnswers[1].replaceAll("[", "").replaceAll("]", "").split(",")
                history = splitQuiz[0].includes("istory:") ? splitQuiz[0].split("istory:")[1] : splitQuiz[0]

            } catch (error) {
                console.error('Failed to fetch one of the quiz data from OpenAI API:', error);
                splitAnswers = [""]
                answers = [""]
                history = ""
            }

            return {
                history: history,
                question: splitAnswers[0],
                correctAnswer: answers[0],
                answers: shuffle(answers)
            }
        }).filter((quizData) => {
            return quizData.history != "" && quizData.question != "" && quizData.correctAnswer != "" && quizData.answers.length == 3
        })
    } catch (error) {
        console.error('Failed to fetch quiz data from OpenAI API:', error);
        throw error;
    }
};