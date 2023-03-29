import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import QuizPage from './QuizPage';

jest.mock("../../services/chatGPTService", () => ({
    fetchQuizData: jest.fn().mockResolvedValue({
        history: 'Test history',
        question: 'Test question',
        correctAnswer: 'Test correct answer',
        wrongAnswers: ['Test wrong answer 1', 'Test wrong answer 2'],
    }),
}));

describe('QuizPage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders loading icon when quiz data is not yet fetched', () => {
        render(
            <MemoryRouter initialEntries={[{pathname: '/quiz', state: {flagUrl: 'test-flag.png', text: 'test-text'}}]}>
                <QuizPage/>
            </MemoryRouter>
        );

        expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
    });
});