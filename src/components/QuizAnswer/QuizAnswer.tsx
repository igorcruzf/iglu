import React from "react";
import './QuizAnswer.css';

interface AnswerProps {
    onClick: () => void;
    text: string;
    disable?: boolean;
    selected?: boolean;
    correct?: boolean;
}

const QuizAnswer: React.FC<AnswerProps> = ({onClick, text, disable = false, selected = false, correct = false}) => {

    const className = `answer-button ${selected ? (correct ? 'correct' : 'wrong') : ''}`;

    return (
        <button className={className} onClick={onClick} disabled={disable}>
            <div className={"answer-text"}>
                {text}
            </div>
        </button>
    );
}

export default QuizAnswer;